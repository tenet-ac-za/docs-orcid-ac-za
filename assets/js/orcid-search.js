/**
 * @author Guy Halse http://orcid.org/0000-0002-9388-8592
 * @copyright Copyright (c) 2022, Tertiary Education and Research Network of South Africa
 * @license https://github.com/tenet-ac-za/docs-tenet-ac-za/blob/master/LICENSE MIT License
 * @requires jQuery
 */

class TenetOrcidSearch
{
	institutions;
	fieldnames;

	/**
	 * Escape a SOLR string
	 * See https://solr.apache.org/guide/6_6/the-standard-query-parser.html#TheStandardQueryParser-EscapingSpecialCharacters
	 */
	escapeSolr(s)
	{
		return s.replace(/[+\-&|!(){}\[\]^"~*?:\/]/g, "\\$&");
	}

	downloadCSV(event)
	{
		event.preventDefault();
		var a = $('<a style="display: none;"/>');
		var csv = '# ORCID iDs for ' + $("#tenet-orcid-search #affiliation-org-name").val() + "\r\n";
		if (this.searchQuery) {
			csv = '# Search: ' + this.searchQuery + "\r\n";
		}
		csv += '# Created: ' + (new Date()).toISOString() + "\r\n\#\r\n";
		csv += this.makeCSV(this.searchResult);
		var url = window.URL.createObjectURL(new Blob(["\ufeff", csv], {type: "octet/stream"}));
		a.attr('href', url);
		a.attr('download', 'orcid-data-' + (new Date()).toISOString().split('T')[0] +'.csv');
		$("body").append(a);
		a[0].click();
		window.URL.revokeObjectURL(url);
		a.remove()
	}

	makeCSV(data)
	{
		var str = ''
		for (var j in this.fieldnames) {
			if (str != '') { str += ',' }
			str += '"' + this.fieldnames[j] + '"';
		}
		str += "\r\n";
		for (const d of data) {
			var line = '';
			for (var j in this.fieldnames) {
				if (line != '') { line += ',' }
				var o = d[this.fieldnames[j]];
				if (o === null || o === undefined) {
					o = '';
				} else if (o.constructor === Array) {
					o = o.join(';')
				}
				line += '"' + o.replace(/["]/g, "\"$&") + '"';
			}
			str += line + "\r\n";
		}
		return str;
	}

	/**
	 * generate some non-existant fields ;-)
	 */
	doResultFixups(data)
	{
		for (var i in data) {
			if (data[i]['email'].length) {
				data[i]['primary-email'] = data[i]['email'][0];
				data[i]['other-email'] = data[i]['email'].slice(1)
			}
			if (data[i]['institution-name'].length) {
				data[i]['current-institution'] = data[i]['institution-name'][0];
				data[i]['other-institution'] = data[i]['institution-name'].slice(1)
			}
			data[i]['orcid-id-full'] = 'https://orcid.org/' + data[i]['orcid-id'];
		}
		return data;
	}

	/**
	 * Actually query the ORCID search API
	 */
	doSearch(query, start = 0, passes = 0)
	{
		console.log("doSearch('" + query + '", ' + start + ")");
		if (start === 0) {
			this.searchResult = [];
			$('#tenet-orcid-results').html('');
			$('body').append(
				'<!-- what purpose do throbbers really serve? -->' +
				'<div id="tenet-orcid-search-throbber" style="z-index:1000;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(200,200,200,0.5);display:flex;justify-content:center;align-items:center;">' +
				'<img src="//upload.wikimedia.org/wikipedia/commons/d/de/Ajax-loader.gif" style="display:block;width:32px;height:32px;margin:auto">' +
				'<div style="color:grey;font-size:15px;position:absolute;bottom:180px;left:20px">Seaching for:<br><tt>' + query + '</tt></div>' +
				'</div>'
			)
		}
		$.ajax({
			method: "GET",
			url: "https://pub.orcid.org/v3.0/expanded-search",
			data: {
				q: query,
				start: start,
				rows: 1000
			},
			headers: {
				Accept: "application/json; charset=utf-8" /* force response as JSON */
			},
			dataType: "json",
			indexValue: { query: query, start: start, obj: this, passes: ++passes }
		}).done(function (data) {
			if (data.hasOwnProperty('expanded-result') && data['expanded-result'] !== null) {
				this.indexValue.obj.searchResult = this.indexValue.obj.searchResult.concat(this.indexValue.obj.doResultFixups(data['expanded-result']));
				let newStart = this.indexValue.start + data['expanded-result'].length
				if (newStart < data['num-found']) {
					this.indexValue.obj.doSearch(this.indexValue.query, newStart, this.indexValue.passes);
				} else{
					this.indexValue.obj.searchQuery = this.indexValue.query;
					$('#tenet-orcid-search-throbber').remove();
					$('#tenet-orcid-results').html(
						'<p>Searched for: <tt>' + this.indexValue.query + '</tt></p>' +
						'<p>Found ' + this.indexValue.obj.searchResult.length + ' results in ' + this.indexValue.passes + ' passes.</p>'
					);
					this.indexValue.obj.createResultsForm(this.indexValue.obj.searchResult);
				}
			} else {
				$('#tenet-orcid-search-throbber').remove();
				$('#tenet-orcid-results').html(
					'<p>Searched for: <tt>' + this.indexValue.query + '</tt></p>' +
					'<p><strong>NO RESULTS RETURNED</strong></p>'
				);
			}
		}).fail(function (jqXHR, textStatus, errorThrown) {
			$('#tenet-orcid-search-throbber').remove();
			$('#tenet-orcid-results').html(
				'<p>An error has occured searching for: <tt>' + this.indexValue.query + '</tt></p>' +
				'<p>Message: ' + textStatus + '</p>'
			);
		});
	}

	/**
	 * Prepare a query in accordence with https://info.orcid.org/faq/which-fields-does-the-orcid-search-api-support/
	 */
	prepareQuery(event)
	{
		event.preventDefault();
		let i = (this.institutions).find(o => o.domain == $("#tenet-orcid-search #affiliation-org-name").val() || o.name.toLowerCase() == $("#tenet-orcid-search #affiliation-org-name").val().toLowerCase());
		if (! i) { return false; }

		let q = [];
		if($("#tenet-orcid-search input#name").is(':checked') && i.hasOwnProperty('name')) {
			if($("#tenet-orcid-search input#alt-names").is(':checked') && i.hasOwnProperty('alt') && i['alt'].hasOwnProperty('names')) {
				q.push('affiliation-org-name:("' + this.escapeSolr(i['name']) + '" OR "' + i['alt']['names'].map(this.escapeSolr).join('" OR "') + '")');
			} else {
				q.push('affiliation-org-name:"' + this.escapeSolr(i['name']) + '"');
			}
		}
		let emails = [];
		if($("#tenet-orcid-search input#email").is(':checked') && i.hasOwnProperty('domain')) {
			emails.push('*@' + this.escapeSolr(i['domain']));
			if ($("#tenet-orcid-search input#email-subdomains").is(':checked')) {
				emails.push('*@*.' + this.escapeSolr(i['domain']));
			}
		}
		if($("#tenet-orcid-search input#alt-emails").is(':checked') && i.hasOwnProperty('alt') && i['alt'].hasOwnProperty('domains')) {
			for (const d of i['alt']['domains']) {
				emails.push('*@' + this.escapeSolr(d));
				if ($("#tenet-orcid-search input#email-subdomains").is(':checked')) {
					emails.push('*@*.' + this.escapeSolr(d));
				}
			}
		}
		if (emails.length) {
			q.push('email:("' + emails.join('" OR "') + '")');
		}
		if (i.hasOwnProperty('org-id')) {
			if($("#tenet-orcid-search input#ringgold-org-id").is(':checked') && i['org-id'].hasOwnProperty('ringgold')) {
				q.push('ringgold-org-id:' + this.escapeSolr(i['org-id']['ringgold']));
			}
			if($("#tenet-orcid-search input#grid-org-id").is(':checked') && i['org-id'].hasOwnProperty('grid')) {
				q.push('grid-org-id:' + this.escapeSolr(i['org-id']['grid']));
			}
			if($("#tenet-orcid-search input#ror-org-id").is(':checked') && i['org-id'].hasOwnProperty('ror')) {
				q.push('ror-org-id:' + this.escapeSolr(i['org-id']['ror']));
			}
		}
		if ($('#tenet-orcid-search input[name="require"]:checked').val() == 'and') {
			this.doSearch(q.join(' AND '), 0);
		} else {
			this.doSearch(q.join(' OR '), 0);
		}
	}

	createResultsForm(data)
	{
		let fields = [];
		for (const d of data) {
			for (const k of Object.keys(d)) {
				if (! fields.includes(k)) {
					fields.push(k);
				}
			}
		}
		let fieldstr = '<ul>';
		for (const f of fields) {
			fieldstr += '<li><input type="checkbox" name="results-option-' + f + '" id="results-option-' + f + '" value="' + f + '"';
			if (this.fieldnames.includes(f)) {
				fieldstr += ' checked="checked"';
			}
			fieldstr += '><label for="result-' + f + '">' + f + '</label></li>';
		}
		fieldstr += '</ul>'
		
		$('#tenet-orcid-results').append(
			'<div class="tenet-orcid-search results-form"><form id="tenet-orcid-results" name="tenet-orcid-results action="">' +
			'<fieldset name="result-options" id="result-options">' +
			'<legend>Available fields</legend>' +
			fieldstr +
			'</fieldset>' +
			'<input type="submit" id="results-csv" value="Download">' +
			'</form></div>'
		);
		for (const f of fields) {
			$('#tenet-orcid-results #results-option-' + f).on('change', null, { obj: this}, function (event) {
				let v = $(this).val();
				if ($(this).is(':checked') && ! event.data.obj.fieldnames.includes(v)) {
					if (v == 'orcid-id') {
						event.data.obj.fieldnames.splice(0, 0, v);
					} else {
						event.data.obj.fieldnames.push(v);
					}
				}
				if (! $(this).is(':checked') && event.data.obj.fieldnames.includes(v)) {
					event.data.obj.fieldnames = event.data.obj.fieldnames.filter(function (e) { return e != v});
				}
			});
		}
		$('#tenet-orcid-results #results-csv').on('click', this.downloadCSV.bind(this));
	}

	/*
	 * Create a search form
	 */
	createSearchForm()
	{
		$('#tenet-orcid').html(
			'<div class="tenet-orcid-search search-form"><form id="tenet-orcid-search" name="tenet-orcid-search" action="#">' +
			'<label for="affiliation-org-name">Institution:</label>' +
			'<input type="text" name="affiliation-org-name" id="affiliation-org-name">' +
			'<fieldset name="name-options" id="name-options">' +
			'<legend>Name options</legend>' +
			'<input type="checkbox" name="name" id="name" checked="checked"><label for="name">institution name</label>' +
			'<input type="checkbox" name="alt-names" id="alt-names"><label for="alt-names">alternative names</label>' +
			'</fieldset>' +
			'<fieldset name="email-options" id="email-options">' +
			'<legend>Email address options</legend>' +
			'<input type="checkbox" name="email" id="email" checked="checked"><label for="email">primary email domain</label>' +
			'<input type="checkbox" name="alt-emails" id="alt-emails"><label for="alt-emails">other email domains</label>' +
			'<br style="display: initial">' +
			'<input type="checkbox" name="email-subdomains" id="email-subdomains" checked="checked"><label for="email-subdomains">include subdomains</label>' +
			'</fieldset>' +
			'<fieldset name="org-ids" id="org-ids">' +
			'<legend>Org ID options</legend>' +
			'<input type="checkbox" name="ringgold-org-id" id="ringgold-org-id"><label for="ringgold-org-id">Ringgold ID</label>' +
			'<input type="checkbox" name="grid-org-id" id="grid-org-id"><label for="grid-org-id">GRID</label>' +
			'<input type="checkbox" name="ror-org-id" id="ror-org-id"><label for="ror-org-id">ROR</label>' +
			'</fieldset>' +
			'<fieldset name="combining" id="combining">' +
			'<legend>Combining options</legend>' +
			'<input type="radio" name="require" id="require-and" value="and"><label for="require-and">Require All</label>' +
			'<input type="radio" name="require" id="require-or" value="or" checked="checked"><label for="require-and">Require Any</label>' +
			'</fieldset>' +
			'<input type="submit" value="Search">' +
			'</form></div>' +
			'<div class="tenet-orcid-search search-results" id="tenet-orcid-results"></div>'
		);
		$('#tenet-orcid-search').on('submit', this.prepareQuery.bind(this));
		$('head').append(
			'<style id="tenet-orcid-search-style">' +
			'.tenet-orcid-search label { display: inline-block !important; padding: 0 0.5em; }' +
			'.tenet-orcid-search fieldset { border: 1px solid grey; margin: 0.3em 0; padding: 0.1em 0.3em; }' +
			'.tenet-orcid-search legend { width: auto; font-size: smaller; font-style: italic; }' +
			'.tenet-orcid-search.results-form li { list-style: none; display: inline; padding-right: 10px; white-space: nowrap; }' +
			'</style>'
		)
	}

	/**
	 * Adapt the form to reflect what is available
	 */
	toggleSearchFormChecked()
	{
		let i = (this.institutions).find(o => o.domain == $('#tenet-orcid-search #affiliation-org-name').val() || o.name.toLowerCase() == $('#tenet-orcid-search #affiliation-org-name').val().toLowerCase());
		if (i) {
			if(i.hasOwnProperty('alt')) {
				if (i['alt'].hasOwnProperty('names')) {
					$("#tenet-orcid-search input#alt-names").attr('checked','checked'); 
					$("#tenet-orcid-search input#alt-names").prop('disabled', false);
				} else {
					$("#tenet-orcid-search input#alt-names").removeAttr('checked'); 
					$("#tenet-orcid-search input#alt-names").prop('disabled', true);
				}
				if (i['alt'].hasOwnProperty('domains')) {
					$("#tenet-orcid-search input#alt-emails").attr('checked','checked'); 
					$("#tenet-orcid-search input#alt-emails").prop('disabled', false);
				} else {
					$("#tenet-orcid-search input#alt-emails").removeAttr('checked'); 
					$("#tenet-orcid-search input#alt-emails").prop('disabled', true);
				}
			}
			if(i.hasOwnProperty('org-id')) {
				$("#tenet-orcid-search #org-ids").prop('disabled', false);
				if(i['org-id'].hasOwnProperty('ringgold')) {
					$("#tenet-orcid-search input#ringgold-org-id").attr('checked','checked'); 
					$("#tenet-orcid-search input#ringgold-org-id").prop('disabled', false);
				} else {
					$("#tenet-orcid-search input#ringgold-org-id").removeAttr('checked'); 
					$("#tenet-orcid-search input#ringgold-org-id").prop('disabled', true);
				}
				if(i['org-id'].hasOwnProperty('grid')) {
					// $("#tenet-orcid-search input#grid-org-id").attr('checked','checked'); 
					$("#tenet-orcid-search input#grid-org-id").prop('disabled', false);
				} else {
					$("#tenet-orcid-search input#grid-org-id").removeAttr('checked'); 
					$("#tenet-orcid-search input#grid-org-id").prop('disabled', true);
				}
				if(i['org-id'].hasOwnProperty('ror')) {
					// $("#tenet-orcid-search input#ror-org-id").attr('checked','checked'); 
					$("#tenet-orcid-search input#ror-org-id").prop('disabled', false);
				} else {
					$("#tenet-orcid-search input#ror-org-id").removeAttr('checked'); 
					$("#tenet-orcid-search input#ror-org-id").prop('disabled', true);
				}
			} else {
				$("#tenet-orcid-search #org-ids").prop('disabled', true);
				$("#tenet-orcid-search input#ringgold-org-id").removeAttr('checked'); 
				$("#tenet-orcid-search input#grid-org-id").removeAttr('checked'); 
				$("#tenet-orcid-search input#ror-org-id").removeAttr('checked'); 
			}
		}
	}

	/**
	 * Generate a drop-down of instutions
	 */
	populateInstitutions()
	{
		var selectbox;
		if (this.institutions) {
			selectbox = '<select name="affiliation-org-name" id="affiliation-org-name"><option value=""></option>';
			for (const i of this.institutions) {
				selectbox = selectbox + '<option value="' + i.domain + '">' + i.name + '</option>'
			}
			selectbox = selectbox + '</select>';
		} else {
			selectbox = '<input type="text" name="affiliation-org-name" id="affiliation-org-name">';
		}
		$('#affiliation-org-name').replaceWith(selectbox);
		$('#affiliation-org-name').on('change', this.toggleSearchFormChecked.bind(this));
	}

	getInstitutions ()
	{
		$.ajax({
			url: "/assets/js/institutions.json?_="+(new Date()).getTime(),
			dataType: "json",
			context: this
		}).done(function (data) {
			data.sort((a, b) => (a.name > b.name) ? 1 : -1)
			this.institutions = data;
			this.populateInstitutions();
		});
	}

	constructor()
	{
		this.institutions = [];
		this.fieldnames = ['orcid-id', 'given-names', 'family-names', 'primary-email', 'other-email', 'current-institution', 'other-institution'];
		this.getInstitutions();
		this.createSearchForm();
	}
}

$(document).ready(function () {
	var tenetOrcidSearch = new TenetOrcidSearch();
});

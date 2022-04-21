---
title: Public ORCID Search
layout: single
permalink: /search


---

<div id="tenet-orcid">

  load here
  
</div>

<script>
$(document).ready(function() {
 $.getScript("/assets/js/orcid-search.js");
}).done(function() {
  var tenetOrcidSearch = new TenetOrcidSearch();
});
</script>

---
layout: single
permalink: /hub/manual/writing_work_items


sidebar:
  title: "Intembeko ORCID Hub Manual"
  nav: sidebar-hubmanual

---



## Purpose of this guide
This guide describes how an organisation's Technical Contact or designated Organisation
Administrator(s) can write works to ORCID records using the Intembeko ORCID Hub. It describes file
construction and upload, and editing/updating of records. If your anticipated Hub use differs from the
scenarios in the guide please contact us for assistance.
Prior to using the Intembeko ORCID Hub, your organisation must be onboarded to the application. If
your organisation is not listed on the Hub's home page, your organisation's ORCID Technical Contact
should request an invitation to onboard. Onboarding involves being authenticated in the Hub, using
the Hub to obtain API credentials for your organisation from ORCID, and entering these into the Hub.


## Types of works allowed in ORCID records
’Works’ is the generic term used by ORCID to describe research outputs. A large range of outputs is
recognised and listed by ORCID here. 



| Field | Description |
| ----- | ----------- |
| Invitee first name (required) | Person to whose ORCID record you are writing |
| Invitee last name (required) | Person to whose ORCID record you are writing |
| Invitee email address (required) | Person to whose ORCID record you are writing |
| Invitee local identifier | A local identifier – e.g. one used by your internal system. |
| Title (required) | The title of the work |
| Subtitle | The subtitle, if relevant |
| Translated title | The title as translated, if relevant |
| Translated title language | Language of the translated title |
| Journal title | This is the title of the main body that the work is a part of – can be journal title, book title, conference title etc. Note that ALL variations are captured under the term ‘journal title’; do NOT change the name of this header.|
| Type (required) | The type of work – for example: journal-article; book-chapter. Must be one of ORCID’s accepted types found in https://members.orcid.org/api/resources/worktypes |
| Publication date | Year, year and month, or year, month and date |
| Description | A short abstract or description of the work. ORCID recommends keeping this below 200 words as this data is not always read by systems that connect with ORCID.|
| Citation type | Citations may be fielded as in RIS, BibTex (preferred by ORCID) – or may be textual (APA, MLA, Chicago)|
| Citation | The content of the citation in one of the formats allowed, e.g. BibTex |
| URL | An external link to the work |
| Language | Language used in the work |
| Country | Country of publication |
| External ID Type (required) | The external ID type of the work; for example a DOI, ISBN etc. Must be one of ORCID’s accepted identifiers found in https://pub.orcid.org/v2.0/identifiers . If you are unable to assign a DOI or ISBN you can use ‘source-work-id’.|
| External ID relationship (required)| (json or yaml file must be used if more than one external relationship identifier is included) SELF (e.g. if your ‘external ID type’ is, for example, a DOI for a journal article). You can also have a PART_OF identifier relationship such as the ISSN of the journal in which the article ispublished). A SELF identifier is mandatory.|
| External iD Value (required) | This is the identifier value, i.e. the ISBN of a book or the DOI of an article, or your internal sourcework-id.|
| Identifier URL (external ID URL) | The url that an identifier resolves to. ORCID will auto-populate if an identifier type is recognised.|
| Contributors (json or yaml file only, if more than one contributor to be included) | Describes the role of the contributor. Can be: author / assignee / editor / chair-or-translator / co-investigator / co-inventor / graduate-student / other-inventor / principal-investigator / postdoctoral-researcher / support-staff(Hyphens are essential)|
| Contributor-sequence | Can be ‘first’ or ‘additional’ only|
| PUT code | Use the PUT-Code if you wish to update an item. The code can be obtained by exporting the task from the Hub once the entry is written to the ORCID record. By writing information using a PUT code the row of information in your fileoverwrites the specified item in the user’s ORCID record rather than creating a new entry.|


## Using the Hub to write works to ORCID records
Uploading files and activating them in the Hub generates email to your researchers and
contributors, inviting them to give your organisation permission to access their ORCID
record.

## Uploading files to the Hub
If the researcher(s) have not already given you permission to read from/write to their ORCID records,
perhaps from you writing an affiliation entry to their record, then prior to uploading and activating
your file in the Hub, and according to your organisation’s normal communications procedures, you
should contact them in advance to let them know that you intend to write works information to their
ORCID records. You must explain that they will be receiving an email from the Intembe ORCID
Hub, and the date on which you intend to upload your file. By doing this, your research community
will be expecting the Hub’s email and be less likely to delete it as spam.
To upload ‘works’ file to the Hub log-in and go to
>Tasks >Upload works ...upload your file…>activate all
This will either
* send an invitation to those people whose ORCID records you wish to write to (Figure 5) OR
* if the researchers have already given your organisation permission to act on their ORCID records, the
works record will immediately be written, with your organisation as the source of the information.


## Editing records using the Hub’s web-form feature
You can edit information written to ORCID records in the Hub directly using the web-form features.
Any information can be edited while the task is still active, but some edits can also be made after the
task has expired.
If the task is still active in the Hub, navigate to it via <Tasks>, <Uploaded Tasks> then click on the eye
icon to view the items. Choose the item you wish to edit and click on the icon that represents that
information e.g. invitees, contributors, external identifiers. Once you have edited the information you
must ‘reset’ the task for the edits to appear in the records. If adding new invitees, these people will
receive an invitation email as described previously.
If the task has expired you can still edit some information in ORCID records about the work item,
including url, identifiers and information about the work itself, although not contributors. Go to <Your
People>, <view/export people> and search for the person whose information you want to edit. Hover
over the pencil icon on the left and a suite of icons will appear/ Click on the typewriter icon to edit
works information. When the information appears on screen, click on the pencil icon on the left to
edit the information. 




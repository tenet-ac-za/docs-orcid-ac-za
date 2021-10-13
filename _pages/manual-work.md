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
| Invitee local identifier A local identifier – e.g. one used by your internal system. |
| Title (required) | The title of the work |
| Subtitle | The subtitle, if relevant |
| Translated title | The title as translated, if relevant |
| Translated title language | Language of the translated title |
|Journal title | This is the title of the main body that the work is 
a part of – can be journal title, book title,
conference title etc. Note that ALL variations are
captured under the term ‘journal title’; do NOT
change the name of this header.|
| Type (required) | The type of work – for example: journal-article;
book-chapter. Must be one of ORCID’s accepted
types found in
https://members.orcid.org/api/resources/worktypes |
| Publication date | Year, year and month, or year, month and date |
| Description | A short abstract or description of the work.
ORCID recommends keeping this below 200
words as this data is not always read by systems
that connect with ORCID.|
| Citation type | Citations may be fielded as in RIS, BibTex
(preferred by ORCID) – or may be textual (APA,
MLA, Chicago)|
| Citation | The content of the citation in one of the formats
allowed, e.g. BibTex |
| URL | An external link to the work |
| Language | Language used in the work |
|Country | Country of publication |

| External ID Type (required) | The external ID type of the work; for example a
DOI, ISBN etc. Must be one of ORCID’s accepted
identifiers found in
https://pub.orcid.org/v2.0/identifiers . If you are
unable to assign a DOI or ISBN you can use
‘source-work-id’.|
|External ID relationship (required)| (json or yaml file must be used if more than
one external relationship identifier is included)
SELF (e.g. if your ‘external ID type’ is, for
example, a DOI for a journal article). You can
also have a PART_OF identifier relationship such
as the ISSN of the journal in which the article is
published). A SELF identifier is mandatory.|
| External iD Value (required) | This is the identifier value, i.e. the ISBN of a book
or the DOI of an article, or your internal sourcework-id.|
| Identifier URL (external ID URL) | The url that an identifier resolves to. ORCID will
auto-populate if an identifier type is recognised.|
| Contributors (json or yaml file only, if more than
one contributor to be included) | Describes the role of the contributor. Can be:
author / assignee / editor / chair-or-translator /
co-investigator / co-inventor / graduate-student
/ other-inventor / principal-investigator /
postdoctoral-researcher / support-staff
(Hyphens are essential)|
| Contributor-sequence | Can be ‘first’ or ‘additional’ only|
| PUT code | Use the PUT-Code if you wish to update an item.
The code can be obtained by exporting the task
from the Hub once the entry is written to the
ORCID record. By writing information using a
PUT code the row of information in your file
overwrites the specified item in the user’s
ORCID record rather than creating a new entry.|

---
layout: single
permalink: /hub/manual/writing_affiliation_items

title: false
sidebar:
  title: "Intembeko ORCID Hub Manual"
  nav: sidebar-hubmanual

---


# Adding affiliations
## Affiliations allowed in ORCID records
The Hub allows all affiliations recognised by ORCID’s API 3.0 to be written to ORCID
records:

**Employment**: Formal employment relationship with an organization, e.g. staff, intern, researcher, contractor.
Employment can be paid or unpaid.

**Education**: Participation in an academic higher education program to receive an undergraduate, graduate, or
other degree, may be in progress or unfinished.

**Qualification**: Participation in a professional or vocational accreditation, certification, or training program, may
be in progress or unfinished.

**Invited position**: An invited non-employment affiliation, e.g. honorary fellow, guest researcher, emeritus
professor.

**Distinction**: An honorary or other award, distinction, or prize in recognition of your achievements, e.g. trophy,
medal, honorary degree.

**Membership**: Membership of a society or association, not including honorary memberships and fellowships.

**Service**: A significant donation of time, money, or other resource, e.g. volunteer society officer, elected board
position, extension work.



## Fields/metadata for affiliations

| Field | Description |
| ----- | ----------- |
| Invitee first name (required) | Person to whose ORCID record you are writing |
| Invitee last name (required) | Person to whose ORCID record you are writing |
| Invitee email address (required) | Person to whose ORCID record you are writing |
| Invitee local identifier | A local identifier – e.g. one used by your internal system |
| ORCID iD of invitee | If known |
| URL | If relevant, the URL related to the information being written e.g a departmental webpage |
| Organisation | Name of the organisation writing the information (will be filled in automatically, based on the organisation’s onboarding information) |
| City | Only required if not the home campus of the organisation |
| Country | Fills automatically as South Africa |
| Disambiguated organisation source | e.g. RINGGOLD, GRID, |
| Disambiguated organisation identifier | The RINGGOLD, GRID or other organization identifier for the organisation |
| Affiliation type (required) | employment, education, distinction, invitedposition, qualification, membership, service. NOTE – invited-position must contain a hyphen, otherwise you will encounter a Hub error |
| Role | If writing ‘Employment’ – the title of the role (e.g. Associate Professor) If writing ‘Education’ – degree title, level and result of the degree awarded, e.g. Batchelor of Science If writing ‘Qualification’ – title or result of the course or professional certification If writing ‘Invited-position’ – the name of the position, e.g. ‘honorary vising scholar’ If writing ‘Distinction’ – the prize or award name, e.g. ‘Hutton medal’ If writing ‘Membership’ – the nature of themembership, e.g. professional member, studentmember If writing ‘Service’ – the nature of the service,e.g. panel member, panel chair |
| Department | If relevant, the department related to the role |
| Start date | can be as precise as required, either dd/mm/yyyy or yyyy-mm-dd or yyyy-mm or yyyy |
| End date | If writing previous employment. Note, if a person has had serveral employee roles at your organisation enter each role in a seperate row; this will allow multiple employment entries, one for each of those roles, to be written to their ORCID record | 
| PUT code | Use the PUT-Code if you wish to update an item, e.g. adding an end date, by including a column header for the PUT-code for the item. The code can be obtained by exporting the task from theHub once the entry is written to the ORCID record. By writing information using a PUT codethe row of information in your file overwrites the specified item in the user’s ORCID record rather than creating a new entry |


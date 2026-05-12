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

## Uploading files to the Hub
If the researcher(s) have not already given you permission to read from/write to their ORCID records,
perhaps from you writing an affiliation entry to their record, then prior to uploading and activating
your file in the Hub, and according to your organisation’s normal communications procedures, you
should contact them in advance to let them know that you intend to write works information to their
ORCID records. You must explain that they will be receiving an email from the Intembe ORCID
Hub, and the date on which you intend to upload your file. By doing this, your research community
will be expecting the Hub’s email and be less likely to delete it as spam.
To upload ‘affiliations’ file to the Hub log-in and go to
>Tasks >Upload affiliations ...upload your file…>activate all
This will either
* send an invitation to those people whose ORCID records you wish to write to OR
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
> :warning: *work in progress*

# `Zenodo Curation Policy Template`

> Text boxes like this one are comments and can be deleted in the actual policy. Text, `marked like this` has to be adjusted to your needs. Apart from this, anything in this document can and should be adjusted to your needs.

This is the curation policy of `SLUB Dresden`. Submitted records have to adhere to the rules defined below. Community curators have the right apply changes to the metadata of your record, request you to update your record according to the rules below or reject your submission. The policy defines general requirements and specifies them further by record type.



## General

When submitting a record, the metadata fields ***Description* and *Licenses* are mandatory**. Below you find a table with comments on a selection of Zenodos Metadata fields. Please refer to the [Zenodo help](https://help.zenodo.org/docs/deposit/describe-records/) for more information on the fields. The Zenodo Metadata Schema is a subset of the [DataCite 4.4 Schema](https://schema.datacite.org/meta/kernel-4.4/); refer to this for detailed information.

> DataCite 4.5 just released, so the above notion might be outdated soonish. Additionally, [DataCite 4.5 documentation migrated to Read the Docs](https://datacite-metadata-schema.readthedocs.io/en/4.5/), which makes it far better digestible. In links to certain elements of DataCite, I already point to DataCite 4.5 if there are no differences to DataCite 4.4.

> The table mostly contains explanations to fields where I feel it is necessary. It could probably be left out to tighten this document.

| Field | Comment |
|-|-|
| Creators | When entering a new creator, try to identify them by their OCRID iD. This automatically fills the fields *family name*, *given names* and *affiliations* if available at ORCID. We encourage you to register an [ORCID iD](https://orcid.org/). <br>When entering an affiliation, check if the institution is registered at [ROR](https://ror.org/) and enter the affiliation accordingly if so. An affiliation is connected to the ROR, if the symbol appears of the left of its name (e.g., <img src="./assets/img/ror.png" alt="Description" style="height:12pt;"/>). You can check for this in the record's preview. In the *Affiliations* field `TU Dresden` is correctly identified by the string `TU Dresden (TUD)`.|
| Description | **Mandatory**. Shortly describe the records content. More detailed explanations can be distributed via Readme-files.
| License | **Mandatory**. We recommend the default license *Creative Commons Attribution 4.0 International*. The [CC License Chooser](https://chooser-beta.creativecommons.org/) might help to find another license.
| Contributors | In Zenodo a [Contributor is defined as](https://datacite-metadata-schema.readthedocs.io/en/4.5/properties/contributor/#id1) *"The institution or person responsible for collecting, managing, distributing, or otherwise contributing to the development of the resource."* Contributors are not included in the academic citation.|
| Dates | Any date relevant for the record, apart from the publication date. |
| References | **Not recommended**. Rather use *Related works* with the relation *References*. |
| Domain specific  fields | Zenodo support domain specific metadata for [Audiovisual Core](https://ac.tdwg.org/) and [Darwin Core](https://ac.tdwg.org/) schema. We strongly recommend using them if applicable. |

### Dataset

### Event

### Lesson

### Model

### Physical object

### Poster

### Presentation

### Publication

### Software

### Computational Notebook

### Video/Audio

### Workflow
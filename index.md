> :warning: *work in progress*

# `Zenodo Curation Policy Template`

> Text boxes like this one are comments and should be deleted in the actual policy. Text, `marked like this` has to be adjusted to your needs. Anything else can be adjusted.

This is the curation policy of the `Chair of ... of TU Dresden`. Submitted records have to adhere to the rules defined below. Community curators have the right apply changes to the metadata of your record, request you to update your record according to the rules below or reject your submission. The policy defines general requirements and specifies them further by record type.

## General

When submitting a record, the metadata fields ***Description*** and ***Licenses*** are **mandatory**. Below you find a table with comments on a selection of Zenodos Metadata fields. Please refer to the [Zenodo help](https://help.zenodo.org/docs/deposit/describe-records/) for more information on the fields. The Zenodo Metadata Schema is a subset of the [DataCite 4.4 Schema](https://schema.datacite.org/meta/kernel-4.4/); refer to this for detailed information.

> DataCite 4.5 just released, so the above notion might be outdated soonish. Additionally, [DataCite 4.5 documentation migrated to Read the Docs](https://datacite-metadata-schema.readthedocs.io/en/4.5/), which makes it far better digestible. In links to certain elements of DataCite, I already point to DataCite 4.5 if there are no differences to DataCite 4.4.

> The table mostly contains explanations to fields where I feel it is necessary. It could probably be left out to tighten this document.

| Field | Comment |
|-|-|
| Creators | When entering a new creator, try to identify them by their OCRID iD. This automatically fills the fields *family name*, *given names* and *affiliations* if available at ORCID. We encourage you to register an [ORCID iD](https://orcid.org/). <br>When entering an affiliation, check if the institution is registered at [ROR](https://ror.org/) and enter the affiliation accordingly if so. An affiliation is connected to the ROR, if the symbol appears of the left of its name (e.g., <img src="./assets/img/ror.png" alt="Description" style="height:12pt;"/>). You can check for this in the record's preview. In the *Affiliations* field `TU Dresden` is correctly identified by the string `TU Dresden (TUD)`.|
| Description | **Mandatory**. Briefly describe the records content. Comprehensive explanations can be distributed via *README*-files.
| License | **Mandatory**. We recommend the default license *Creative Commons Attribution 4.0 International*. The [CC License Chooser](https://chooser-beta.creativecommons.org/) might help to find another license.
| Contributors | In Zenodo a [Contributor is defined as](https://datacite-metadata-schema.readthedocs.io/en/4.5/properties/contributor/#id1) *"The institution or person responsible for collecting, managing, distributing, or otherwise contributing to the development of the resource."* Contributors are not included in the academic citation.|
| Dates | Any date relevant for the record, apart from the publication date. |
| References | **Not recommended**. Rather use *Related works* with the relation *References*. |
| Domain specific fields | Zenodo support domain specific metadata for [Audiovisual Core](https://ac.tdwg.org/) and [Darwin Core](https://ac.tdwg.org/) schema. We strongly recommend using them if applicable. |

### Dataset

Any dataset has to be provided as a compressed ZIP-file. Ideally, the contents of this ZIP-file are self-explanatory to the extent that anyone can use the dataset without additional information.

#### Contents of the ZIP-file

- Provide every file in a non-proprietary format, if possible.
- Include any auxiliary file that was used to produce the data (scripts, ontologies, ...).
- File names may only contain the 26 lowercase letters of the *[ISO basic Latin alphabet](https://www.wikidata.org/wiki/Q5974462)*, *[arabic numerals](https://www.wikidata.org/wiki/Q29961325)*, the *[hyphen-minus](https://www.wikidata.org/wiki/Q617884)* (-), and the *[underscore](https://www.wikidata.org/wiki/Q11199)* (_). A dot (.) may only be used to separate filename from file extension. Use the underscore as semantically stronger separating than the hyphen-minus. Due to the 260 characters path length limit on Windows, avoid using more than 100 characters in a filename.
- Add a *README*-file to the root directory and each sub-directory (uppercase is allowed here). In their respective directory, the *README*-files should briefly describe every auxiliary-file and directory, and comprehensively describe any data-file. Readme files should be provided in the [Markdown file format](https://daringfireball.net/projects/markdown/basics) (\*.md) or as plain text file (\*.txt). Below, you find a markdown template for the *README*-file.
- Add a file named *LICENSE.txt*, containing the license text, to the root directory (uppercase is allowed here).
- Add a file named *[CITATION.cff](https://citation-file-format.github.io/)*, containig citation information, to the root directory (uppercase is allowed here).

> The *README*-files could be replaced by more formalized metadata files, e.g., by YAML or JSON files. [This has automation potential](https://zenodo.org/records/10069113).

**README-Template:** Assume the following *README.md* is part of a sub-directory, which also contains a data file (*data.csv*), a python script (*process_inputs.py*) and another directory (*input*).

```md
# README

## `data.csv`

__type__: data file

__description__: The data is provided as a table. The 1st row contains the column names; the columns are described in the variables section. Empty cells are identified with *null*. The table describes ... 

__provenance__: The data was generated by the Python script `process_inputs.py` with the paramters param1 = ... and param2 = ..., and the input data form the `input` directory.

__additional information__: ...

### Variables

| name | datatype | unit | description |
|-|-|-|-|
| Column 1 | ISO 8601 DateTime String (YYYYMMDDThhmmss) | None | ... | 
| Column 2 | double | Kelvin | Temperatur difference between ... |
| ... | ... | ... | ... |

## `process_inputs.py`

__type__: auxiliary file

__description__: Script used to generate `data.csv`. The parameters param1 and param2 control ...

## `input`

__type__: directory

__description__: The directory contains the input data that was used to generate `data.csv`.
```

### Event

Providing **the event's date is mandatory**. Add a new date with the type "Other" and the description "Date of the event" to the *Dates* field.

### Lesson

Attach the approximate duration and required skills to the record's *Description* field:

*--- brief description of the lesson ---*

***Duration:** 60' <br>
**Required proficiency:** None*

### Model

### Physical object

### Poster

### Presentation

### Publication

### Software

### Computational Notebook

### Video/Audio

### Workflow
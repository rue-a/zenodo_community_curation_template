> :warning: *work in progress*

# `Zenodo Curation Policy Template`

> Text boxes like this one are comments and should be deleted in the actual policy. 

This is the curation policy of the *\<Chair of ... of TU Dresden\>*. Submitted records have to adhere to the rules defined below. Community curators have the right apply changes to the metadata of your record, request you to update your record according to the rules below or reject your submission. The policy defines general requirements and specifies them further by record type.

## General

When submitting a record, the metadata fields ***Description*** and ***Licenses*** are **mandatory**.

### Dataset

Any dataset has to be provided as a compressed ZIP-file. Ideally, the contents of this ZIP-file are self-explanatory to the extent that anyone can use the dataset without additional information.

#### Contents of the ZIP-file

- Provide every file in a non-proprietary format, if possible.
- Include or link to any auxiliary file that was used to produce the data (scripts, ontologies, ...).
- File names may only contain the 26 lowercase letters of the *[ISO basic Latin alphabet](https://www.wikidata.org/wiki/Q5974462)*, *[arabic numerals](https://www.wikidata.org/wiki/Q29961325)*, the *[hyphen-minus](https://www.wikidata.org/wiki/Q617884)* (-), and the *[underscore](https://www.wikidata.org/wiki/Q11199)* (_). A dot (.) may only be used to separate filename from file extension. Use the underscore as semantically stronger separating than the hyphen-minus. Avoid using more than 100 characters in a filename.
- Add a Readme file to the root directory and each sub-directory. In their respective directory, the Readme files should briefly describe every auxiliary-file and directory, and comprehensively describe any data-file. Readme files should be provided in the [Markdown file format](https://daringfireball.net/projects/markdown/basics) (`README.md`) or as plain text file (`README.txt`).
- Add a license file named `LICENSE.txt`, containing the license text, to the root directory.
- Add a citation information file named [`CITATION.cff`](https://citation-file-format.github.io/), containig citation information, to the root directory.

> The Readme files could be replaced by more formalized metadata files, e.g., by YAML or JSON files. [This has automation potential](https://zenodo.org/records/10069113).

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


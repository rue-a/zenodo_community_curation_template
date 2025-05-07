# `Zenodo Curation Policy Template`

> Text boxes like this one are comments and should be deleted in the actual policy. 

This is the curation policy of the *\<Chair of ... of TU Dresden\>*. Submitted records have to adhere to the rules defined below. Community curators have the right to apply changes to the metadata of your record, request you to update your record according to the rules below or reject your submission. The policy defines general requirements and specifies them further by record type.

## General Requirements

When submitting a record, the metadata fields __*Description*__ and __*Licenses*__ are **mandatory**.

## Specific Requirements for Dataset

Any dataset should be provided as a compressed ZIP-file. Ideally, the contents of this ZIP-file are self-explanatory to the extent that anyone can use the dataset without additional information.

### Contents of the ZIP-file

- Provide every file in a [non-proprietary format](https://lib.guides.umbc.edu/c.php?g=728911&p=5872066), if possible.
- Include or link to any auxiliary file that was used to produce the data (scripts, ontologies, ...).
- File names may only contain the 26 lowercase letters of the *[ISO basic Latin alphabet](https://www.wikidata.org/wiki/Q5974462)*, *[arabic numerals](https://www.wikidata.org/wiki/Q29961325)*, the *[hyphen-minus](https://www.wikidata.org/wiki/Q617884)* (`-`), and the *[underscore](https://www.wikidata.org/wiki/Q11199)* (`_`). A dot (`.`) may only be used to separate filename from file extension. Use the underscore as semantically stronger separating than the hyphen-minus. Avoid using more than 100 characters in a filename.
- If possible, file names should be human readable, i.e. contain easily readable information about their content. 
- Add a Readme file to the root directory and each sub-directory. In their respective directory, the Readme files should briefly describe every auxiliary-file and directory, and comprehensively describe any data-file. Readme files should be provided in the [Markdown file format](https://daringfireball.net/projects/markdown/basics) (`README.md`) or as plain text file (`README.txt`).
- Add a license file named [`LICENSE.txt`](https://creativecommons.org/2014/01/07/plaintext-versions-of-creative-commons-4-0-licenses/) to the root directory.
- Add a citation information file named [`CITATION.cff`](https://citation-file-format.github.io/) to the root directory.

> The Readme files could be replaced by formalized metadata files. See, e.g., [RO-Crate](https://www.researchobject.org/ro-crate/) or [Automatic Generation of Interoperable Scientific Data – A Use Case with Electrochemistry Data](https://zenodo.org/records/10069113).

## Specific Requirements for Event

Providing the **date of the event is mandatory**. For this purpose, add a new date of the type "Other" with the description "Date of the event" to the *Dates* field.

If the event has a website, provide a link to this website. 

## Specific Requirements for Lesson

Attach the approximate duration and required skills to the *Description* field:

*--- brief description of the lesson ---*

***Duration:** 60' <br>
**Required proficiency:** None*

## Specific Requirements for Model

_Use the model card concept to describe the model._

Margaret Mitchell, Simone Wu, et. al. _2019_. __Model Cards for Model Reporting__. In Proceedings of the Conference on Fairness, Accountability, and Transparency (FAT* '19). Association for Computing Machinery, New York, NY, USA, 220–229. https://doi.org/10.1145/3287560.3287596

### Model Details  
- Person or organization developing model  
- Model date  
- Model version
- Model type  
- Information about training algorithms, parameters, fairness constraints 
or other applied approaches, and features  
- Paper or other resource for more information  
- Citation details  
- License  
- Where to send questions or comments about the model  

### Intended Use  
- Primary intended uses  
- Primary intended users  
- Out-of-scope use cases  

### Factors  
- Relevant factors  
- Evaluation factors  

### Metrics  
- Model performance measures  
- Decision thresholds  
- Variation approaches  

### Evaluation Data  
- Datasets  
- Motivation  
- Preprocessing  

### Training Data  
- When possible, mirror evaluation data; otherwise, provide minimal 
allowable information (e.g., distribution over various factors in the 
training datasets).  

### Quantitative Analyses  
- Unitary results  
- Intersectional results  

### Ethical Considerations  
- Relevant ethical considerations  

### Caveats and Recommendations  
- Appropriate caveats and recommendations


## Specific Requirements for Physical object

\-

## Specific Requirements for Poster

Fill out the *Conference* block if the poster was shown at a conference.

## Specific Requirements for Presentation

Fill out the *Conference* block if the presentation was given at a conference.

## Specific Requirements for Publication

\-

## Specific Requirements for Software

The fields of the __*Software* block__ are __mandatory__.

## Specific Requirements for Computational Notebook

Upload an executed and a blank version of the notebook. Briefly describe the purpose/outputs and the conditions on the inputs of the notebook. 

<!-- If published, reference the input (**) and output (*Related Works* ⇾ *Compiles*) data used by the executed notebook.  -->

## Specific Requirements for Video/Audio

\-

## Workflow

\-

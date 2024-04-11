# Comments

Below you find a table with comments on a selection of Metadata fields. Please refer to the [Zenodo help](https://help.zenodo.org/docs/deposit/describe-records/) for more information on the fields. The Zenodo Metadata Schema is a subset of the [DataCite 4.4 Schema](https://schema.datacite.org/meta/kernel-4.4/); refer to this for detailed information.

> The table mostly contains explanations to fields where I feel it is necessary. It could probably be left out to tighten this document.

> DataCite 4.5 just released, so the above notion might be outdated soonish. Additionally, [DataCite 4.5 documentation migrated to Read the Docs](https://datacite-metadata-schema.readthedocs.io/en/4.5/), which makes it far better digestible. In links to certain elements of DataCite, I already point to DataCite 4.5 if there are no differences to DataCite 4.4.

| Field | Comment |
|-|-|
| Creators | When entering a new creator, try to identify them by their OCRID iD. This automatically fills the fields *family name*, *given names* and *affiliations* if available at ORCID. We encourage you to register an [ORCID iD](https://orcid.org/). <br>When entering an affiliation, check if the institution is registered at [ROR](https://ror.org/) and enter the affiliation accordingly if so. An affiliation is connected to the ROR, if the symbol (<img src="./assets/img/ror_low.png" alt="Description" style="height:16px; transform: translateY(3px);"/>) appears of the left of its name . You can check for this in the record's preview. In the *Affiliations* field `TU Dresden` is correctly identified by the string `TU Dresden (TUD)`.|
| Description | **Mandatory**. Briefly describe the records content. Comprehensive explanations can be distributed via *README*-files.
| License | **Mandatory**. We recommend the default license *Creative Commons Attribution 4.0 International*. The [CC License Chooser](https://chooser-beta.creativecommons.org/) might help to find another license.
| Contributors | In Zenodo a [Contributor is defined as](https://datacite-metadata-schema.readthedocs.io/en/4.5/properties/contributor/#id1) *"The institution or person responsible for collecting, managing, distributing, or otherwise contributing to the development of the resource."* Contributors are not included in the academic citation.|
| Dates | Any date relevant for the record, apart from the publication date. |
| References | **Not recommended**. Rather use *Related works* with the relation *References*. |
| Domain specific fields | Zenodo supports domain specific metadata for [Audiovisual Core](https://ac.tdwg.org/) and [Darwin Core](https://ac.tdwg.org/) schema. We strongly recommend using them if applicable. |


# README-Example

Assume the following *README.txt* is part of a sub-directory, which also contains a data file (*data.csv*), a python script (*process_inputs.py*) and another directory (*input*).




```
_____data.csv________________________________________

TYPE
data file

DESCRIPTION
The data is provided as a table. The 1st row contains 
the column names; the columns are described in the 
variables section. Empty cells are identified with 
"null". The table describes ... 

PROVENANCE
The data was generated by the Python script 
`process_inputs.py` with the paramters param1 = ... 
and param2 = ..., and the input data form the `input` 
directory.

ADDITIONAL INFORMATION
...

VARIABLES
_____________________________________________________
name        datatype          unit        description
-----------------------------------------------------
Column 1    ISO 8601          None        ...
            DateTime String 
            (YYYYMMDDThhmmss) 
-----------------------------------------------------
Column 2    double            Kelvin      Temperatur 
                                          difference
                                          between ...
-----------------------------------------------------
...         ...               ...         ...
-----------------------------------------------------


_____process_inputs.py_______________________________

TYPE
auxiliary file

DESCRIPTION
Script used to generate `data.csv`. The parameters 
param1 and param2 control ...

_____input___________________________________________

TYPE
directory

DESCRIPTION
The directory contains the input data that was used 
to generate `data.csv`.
```
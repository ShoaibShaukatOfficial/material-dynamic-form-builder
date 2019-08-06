## General Information
A Dynamic Form Builder Module which will generate forms controls according to given JSON file(assets folder).
* Scalable Module structure
* Runtime Configuration Loader

### Technologies
Project is created with:
* Angular 8
* Angular Material 8

### Setup
To run this project, install it locally using npm:

```
npm install
npm start

update(If Needed) JSON file in asstes folder or create new JSON file below format
{
    "key": "Q01",
    "type":"radiobutton",
    "label": "Which is the largest country in the world by population?",
    "options": [
                { "key": "germany", "value": "Germany" },
                { "key": "usa", "value": "USA" },
                { "key": "china", "value": "China" },
                { "key": "russia", "value": "Russia" }
            ],
    "order": 1,
    "required":true,
    "answer":"china"
},
{
    "key": "Q02",
    "type":"radiobutton",
    "label": "When did the second world war end?",
    "options": [
                { "key": "1945", "value": "1945" },
                { "key": "1939", "value": "1939" },
                { "key": "1944", "value": "1944" },
                { "key": "1942", "value": "1942" }
            ],
    "order": 2,
    "required":true,
    "answer":"1945"
},
```
### For Live Demo 
use this link [StackBlitz](https://stackblitz.com/github/ShoaibShaukatOfficial/material-dynamic-form-builder)


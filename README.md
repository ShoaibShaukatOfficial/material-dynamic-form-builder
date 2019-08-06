## General Information
A Dynamic Form Builder Module which will generate forms controls according to given JSON file(assets folder).
* Scalable Module structure
* Runtime Configuration Loader
* * 
### Technologies
Project is created with:
* Angular 8
* Angular Material 8

### Setup
To run this project, install it locally using npm:

```
npm install
npm start

update(If Needed) JSON file in assets folder or create new JSON file below format
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
## Example
Please use the following questions to build a simple quiz app. Initial score will be 0, each correct answer should add 1 point to the score, and show the final score once the quiz is completed.

The app should be a single page app, which starts with a welcome screen, click "Start the Quiz" button on the welcome screen to show questions. Only show one question at a time, and each question need to have 4 available options (radio buttons) for user to select. Once user finishes the last question, show the final score.

Question 1: Which is the largest country in the world by population?
Options: India, USA, China, Russia
Correct Answer: China

Question 2: When did the second world war end?
Options: 1945, 1939, 1944, 1942
Correct Answer: 1945

Question 3: Which was the first country to issue paper currency?
Options: USA, France, Italy, China
Correct Answer: China

Question 4: Which city hosted the 1996 Summer Olympics?
Options: Atlanta, Sydney, Athens, Beijing
Correct Answer: Atlanta

Question 5: Who invented telephone?
Options: Albert Einstein, Alexander Graham Bell, Isaac Newton, Marie Curie
Correct Answer: Alexander Graham Bell
### For Live Demo 
use this link [StackBlitz](https://stackblitz.com/github/ShoaibShaukatOfficial/material-dynamic-form-builder)


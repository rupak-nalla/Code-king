// data/dictionary.js
const questions= {
     1: {
          Question: 'Consider the following code and predict the output:',
          Options: {
               1:"Hello",
               2:"World",
               3:"'World'",
               4:"'W'",
          },
          answer:"World"
     },
     2: {
          Question: 'Consider the following code and predict the output:',
          Options: {
               1:"Hello",
               2:"World",
               3:"HelloWorld",
               4:"Hello World",
          },
          answer:"HelloWorld"
     },
     3: {
          Question: 'Consider the following code and predict the output:',
          Options: {
               1:"5",
               2:"-5",
               3:"0",
               4:"-1",
          },
          answer:"0"
     },
     4: {
          Question: 'Consider the following code and predict the output:',
          Options: {
               1:"25 25",
               2:"25 12",
               3:"12 25",
               4:"12 12",
          },
          answer:"25 12"
     },
     5: {
          Question: 'Consider the following code and predict the output:',
          Options: {
               1:"0",
               2:"-1",
               3:"1",
               4:"5",
          },
          answer:"1"
     }
};

export default questions;

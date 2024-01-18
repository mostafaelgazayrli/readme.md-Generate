// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')



// TODO: Create an array of questions for user input
const questions = [
    { 
    type: 'input',
    name: 'title',
    message: "What is your project's title?",
},
{ 
    type: 'input',
    name: 'Description',
    message: "Please write a description for your project!",
},
{ 
    type: 'input',
    name: 'Installation',
    message: "What are the steps required to install your project?",
},
{ 
    type: 'input',
    name: 'Usage',
    message: "how user use this app?",
},
{ 
    type: 'list',
    name: 'license',
    message: "please choose your License if you didn't see your License choose None",
    choices: ['IBM','MIT','Mozilla','Zlib','Perl','Open Data Commons','GNU','Eclipse','BSD','Apache','None']
},
{ 
    type: 'input',
    name: 'Contributing',
    message: "what does user want to know about Contributing?",
},
{ 
    type: 'input',
    name: 'Tests',
    message: "how to run test for project?",
},
{ 
    type: 'input',
    name: 'github',
    message: "what is your github username?",
},
{ 
    type: 'input',
    name: 'email',
    message: "what is your email address?",
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('your readme file is ready')
        writeToFile('README.md',generateMarkdown({ ...inquirerResponses}))
    })
}

// Function call to initialize app
init();

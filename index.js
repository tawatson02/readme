// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const fileName = './README.md'
const generateMarkdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
   
        {
            type: 'input',
            name: 'title',
            message:'What is the title of your repository?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a brief description of your project.',
            
        },
        {
            type: 'input',
            name: 'install',
            message:'How do you install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message:'How can this project be used?',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'List anyone else that contributed to this repository.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Give any testing instructions that are needed.'
        },
        {
            type: 'list',
            name: 'license',
            message:'Which license did you use?',
            choices: ['MIT','GNU','CC','No License'],
        },
    
    
];
console.log("why isn't this working?")
// TODO: Create a function to write README filenod
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>
    err ? console.log(err) : console.log('Success!'))
};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)

    .then((data) =>{
        const inputData = generateMarkdown(data)
        writeToFile(fileName, inputData);
    })
}

// Function call to initialize app
init();

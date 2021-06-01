const inquirer = require('inquirer');
const fs = require("fs");


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the description section for your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation section for your project',
        },        
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the Usage Information section for your project',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter the Contribution Guidelines section for your project',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter the Test Guidelines section for your project',
        },
        {
            name: 'license',
            message: 'What kind of license for our project',
            type: 'list',
            choices: ['The Unlicense', 'Mit License', 'Mozilla Public License' ],
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is your gitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
    ])
}


const init = () => {
    promptUser()
    //   .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
      .then(() => console.log('It finished running'))
      .catch((err) => console.error(err));
  };
init();


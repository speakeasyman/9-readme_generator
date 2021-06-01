const inquirer = require('inquirer');
const fs = require("fs");
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

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
    };

    const generateReadMe = (answers) =>
    `badge goes here
    ## 1.0 Description:
    - This is a readme generator
    ## 2.0 Table of Contents:
    1. [Description](#1.0-Description)
    2. [Table of Contents](#2.0-table-of-contents)
    3. [Installation](#3.0-installation-instructions)
    4. [Usage](#4.0-usage-information)
    5. [Contribution](#5.0-contribution-guidelines)
    6. [Test](#6.0-test-instructions)
    7. [Questions](#7.0-questions)
    8. [License](#8.0-license)
    ## 3.0 Installation Instructions
    - Install the thing by steps one two three
    ## 4.0 Usage Information
    - Usuage information
    ## 5.0 Contribution Guidelines
    - contribution guidelines
    ## 6.0 Test Instructions
    - test instructions go here
    ## 7.0 Questions:
    - If you have any questions my github can be found here  https://github.com/speakeasyman
    - Alternatively you may email me at jonathan.w.nance@gmail.com
    ## 8.0 License:
    License goes here`;


const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('test.md', generateReadMe(answers)))
      .then(() => console.log('It finished running'))
      .catch((err) => console.error(err));
  };

init();


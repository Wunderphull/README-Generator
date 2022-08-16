// Required packages:
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const util = require(`util`);

// Variables for connecting the modules to the application:
const generateMarkdown = require(`./utils/generateMarkdown`);
const licenseBadge = require(`./utils/licenseBadge`).licenseBadge;
const inquirerQuestions = require(`./utils/inquirerQuestions`).inquirerQuestions;

// Asynchronous await:ß
const writeFileAsync = util.promisify(fs.writeFile);

// Function to initialize program and create README file
async function init() {
    try {
        const answers = await inquirer.prompt(inquirerQuestions);
        answers.licenseBadge = licenseBadge(answers.license);
        let readMeData = generateMarkdown(answers);
        await writeFileAsync(`created-README.md`, readMeData);
    } catch(err) {
        throw err;
    }
};

// function call to initialize program
init();

// That's all she wrote.
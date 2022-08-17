// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require("fs")
const {writeFile} = require("fs")
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = inquirer
.prompt([
  /* Pass your questions in here */
  {
    type: "input",
    name: "githubName",
    message: "What is the github user name?"
  },
  {
    type: "input",
    name: "projectTitle",
    message: "What is your project title?" 
  },
  {
    type: "input",
    name: "description",
    message: "How would describe your project?" 
  },
  {
    type: "input",
    name: "installation",
    message: "What is your installation?" 
  },

  {
    type: "input",
    name: "usage",
    message: "What is this used for?" 
  },

  {
    type: "list",
    name: "license",
    message: "Choose from this lists:" ,
    choices: ["MIT","Apache","ISC"]
  },

  {
    type: "input",
    name: "contributing",
    message: "How can I contribute to this project?" 
  },

  {
    type: "input",
    name: "test",
    message: "What testing frame is used for this project?" 
  },

  {
    type: "input",
    name: "email",
    message: "What is your email?" 
  },

  {
    type: "input",
    name: "githubProfile",
    message: "What is the link to your github?" 
  },

])
.then((answers) => {
  // Use user feedback for... whatever!! 
  let markdownData = generateMarkdown(answers)
  writeToFile("README.md",markdownData)
})
.catch((error) => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});

// TODO:' Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync(fileName, "utf8"));
        }
      });
}


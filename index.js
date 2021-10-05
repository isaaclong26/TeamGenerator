import fetch from "node-fetch";
import fs from "fs";
import inquirer from "inquirer";
import chalk from "chalk";
import { employee, intern, manager,engineer } from "./classes.js";
import { printHtml, initPage, finishPage } from "./html.js";

main()
function newEmployee() {
    console.log("Welcome to the Team Builder ");
    inquirer
        .prompt([{
                name: "name",
                message: "Name of Employee: "
            },
            {
                type: "list",
                name: "role",
                message: "What is the role of this team member?",
                choices: ["engineer", "intern", "manager"]
            }

        ])
        .then(answers => {
            let employeeClass = eval(answers.role)
            let teammate = new employeeClass(answers.name);
            let type = teammate.constructor.name;
            //fill in rest of info based on class 
            // info that is class independent 
            inquirer
                .prompt([{
                        name: "email",
                        message: "Enter Email Address: "
                    },
                    {
                        name: "id",
                        message: "Enter employee Id: "
                    }
                ])
                .then(answers => {
                    teammate.email = answers.email;
                    teammate.id = answers.id;

                    // based on class
                    switch (type) {
                        case "manager":
                            teammate.getOffice(teammate);
                            break;
                        case "intern":
                            teammate.getSchool(teammate);
                            break;
                        case "engineer":
                            teammate.getGithub(teammate);
                            break;

                    };
                   
                });
                
        })
}

function main() { 
  initPage();  
  newEmployee();
  // loop to add members until told to stop
  let addMore = true;
  


 }

export function addAnother(){
      inquirer
      .prompt([
          {name: "more", message: "Add another Team Member?", type: "list", choices: ["Yes","No"]}
      ])
      .then(answers => {
          
          if(answers.more=="Yes"){
              newEmployee();
          }
          else{
              
              finishPage();
              console.log("Team building complete");
              console.log("Veiw your team on index.html")
            }
      })
  } ;



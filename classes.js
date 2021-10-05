import inquirer from "inquirer";
import { printHtml, initPage, finishPage } from "./html.js";


export class employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
    }
    getName() {
        inquirer
            .prompt([{
                name: "name",
                message: chalk.blue("Enter Name of Employee: "),
            }])
            .then(answers => {
                return answers;
            });
    }
    getId() {
        inquirer
            .prompt([{
                    name: "id",
                    message: "Employee Id: "
                }

            ])
            .then(answers => {

                this.id = answers;

            });
    }
    getRole() {
        inquirer
            .prompt([{
                    name: "roll",
                    message: "Enter Roll: "
                }

            ])
            .then(answers => {
                this.role = answers;
            })
    }

}

export class manager extends employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.role = "manager"
    }

    getOffice(teamMember) {
        inquirer
            .prompt([{
                name: "Office",
                message: "enter office number: "
            }])
            .then(answers => {
                teamMember.office = answers.Office;
                printHtml(teamMember);
            })
    }
}
export class engineer extends employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.role = "engineer"
    }

    getGithub(teamMember) {
        inquirer
            .prompt([{
                name: "GitHub",
                message: "enter GitHub username: "
            }])
            .then(answers => {
                teamMember.git = answers.GitHub;
                printHtml(teamMember)

            })
    }
}
export class intern extends employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.role = "intern"
    }

    getSchool(teamMember) {
        inquirer
            .prompt([{
                name: "School",
                message: "enter School: "
            }])
            .then(answers => {
                teamMember.school = answers.School;
                printHtml(teamMember);
            })
    }
}
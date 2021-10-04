import fetch from "node-fetch";
import fs from "fs";
import inquirer from "inquirer";
import chalk from "chalk";

main();

function main(){
    initPage();
    buildTeam();
}

function done() {
    inquirer
        .prompt([{
            type: "list",
            name: "done",
            message: "Add another team member?  ",
            choices: ["Yes", "No"],
        }, ])
        .then(answers => {
            if (answers.done == "Yes") {
                teamMember();
            }

        });
}

function buildTeam() {
    teamMember();


}

function teamMember() {
    inquirer
        .prompt([{
            type: "list",
            name: "role",
            message: "Choose role of team member: ",
            choices: ["Leader", "Engineer", "Intern","Manager"]
        }, ])
        .then(answers => {
            let role = answers.role;
            getUserName(role);

        });
};

function getUserName(memberRoll) {
    inquirer
        .prompt([{
                name: "member",
                message: chalk.blue("Enter GitHub Username of Team Member: "),
            },
            {
                name: "email",
                message: "Email: "
            },
            {
                name: "office",
                message: "Office Number: "
            },
            {
                name: "id",
                message: "Employee Id: "
            }

        ])
        .then(answers => {
            fetchGitInfo(answers)
            answers.role = memberRoll;
            return answers;

        });
};

function fetchGitInfo(iqObject) {
    fetch(`https://api.github.com/users/${iqObject.member}`)
        .then(function (response) {
            return response.json();

        })
        .then(function (data) {
            //manipulate data here 
            let name = data.name;
            let proPic = data.avatar_url;
            let userName = data.login;
            console.log(name);
            console.log(proPic);
            console.log(userName);
            genTile();

            function genTile() {
                const htmlData = `
        <div id="${userName}" class="col-sm bg-light mx-auto text-center">
        <h1>${name}</h1>
        <h2>${iqObject.role}</h2>
        <img src="${proPic}" style="width: 200px; height: 200px"><br>
        <p>GitHub UserName: ${userName}</p>
        <p> Office Number: ${iqObject.office}</p>
        <p> Employee ID: ${iqObject.id}</p>
        <p> Email Address: <a href = "mailto: ${iqObject.email}">${iqObject.email}</a></p>
        </div>

        `


                fs.appendFile("index.html", htmlData, err => {
                    if (err) {
                        console.error(err)
                        return
                    }
                    //file written successfully
                });
            };

            done();
        });



};

function initPage() {
    const startUp = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">  </head>
  <body>
  <div class="container-fluid">
  <div class="row">
`
    fs.writeFile("index.html", startUp, err => {
        if (err) {
            console.error(err)
            return
        }
        //file written successfully
    });

}

function finishPage() {
    const finData = `</div></div></body> </html>`
    fs.appendFile("index.html", finData, err => {
        if (err) {
            console.error(err)
            return
        }
        //file written successfully
    });
}
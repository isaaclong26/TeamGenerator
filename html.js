import fs from "fs";
import { addAnother } from "./index.js";


var teamMembersCount = 0;
export function initPage() {
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
  <div class="row gx-5" >
`
    fs.writeFile("index.html", startUp, err => {
        if (err) {
            console.error(err)
            return
        }
        //file written successfully
    });

}

export function finishPage() {
    const finData = `</div></div></body> </html>`
    fs.appendFile("index.html", finData, err => {
        if (err) {
            console.error(err)
            return
        }
        //file written successfully
    });
}









export function printHtml(teamMember){
    console.log(teamMember);
    let keys = Object.keys(teamMember);
    let values = Object.values(teamMember)
    
    let role = keys[4];
    if(role =="git"){role=`<a href="https://github.com/${values[4]}" target="blank">${values[4]}</a> `}
    else{role = values[4]}
    let template = `
   <div class="col-sm mx-auto text-center border rounded" >
   <h1>${teamMember.name}</h1>
   <h2>${teamMember.role}</h2>
   <hr>
   
   <p> Email Address: <a href = "mailto: ${teamMember.email}">${teamMember.email}</a></p>
   <p>Team Member ID: ${teamMember.id}</p>
    <p> ${keys[4]}: ${role}</p>
    </div>

    `
    
     
    fs.appendFile("index.html", template, err => {
        if (err) {
            console.error(err)
            return
        }
        //file written successfully
    });
    teamMembersCount++;
    if(teamMembersCount%3 ==0 && teamMembersCount != 0){
            let newRow = ` </div> <div class="row gx-5">`
           
            fs.appendFile("index.html", newRow, err => {
                if (err) {
                    console.error(err)
                    return
                }
                //file written successfully
            });
        
        }
    addAnother();


}
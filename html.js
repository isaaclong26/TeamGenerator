import fs from "fs";
import { addAnother } from "./index.js";
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
    let template = `
   <div class="col-sm mx-auto text-center" >
   <h1>${teamMember.name}</h1>
   <h2>${teamMember.role}</h2>
   <hr>
   <p>${teamMember.email}</p>
   <p>${teamMember.id}</p>
    
    </div>

    `
    fs.appendFile("index.html", template, err => {
        if (err) {
            console.error(err)
            return
        }
        //file written successfully
    });

    addAnother();


}
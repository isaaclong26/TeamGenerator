import fetch from "node-fetch";
import fs from "fs";
import inquirer from "inquirer";
import chalk from "chalk";



 class employee{
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

}

let bob = new employee("isaac Long", "isaaclong26","isaaclong123@outlook.com")

console.log(bob.email);



#! /usr/bin/env node
import inquirer from "inquirer";
let currency : any = {

    USD :   1 ,
    PKR :   280,
    INR :   74.57 ,
    RIYAL : 3.75 ,
    POUND : 0.79 
   
};

let menu = await inquirer.prompt ([
    {
        name : "from",
        message : "Enter currency from convert",
        type : "list" ,
        choices : ["USD" , "PKR" , "INR" , "RIYAL" , "POUND"],

    },
    {
        name : "to",
        message : "Enter currency to convert",
        type : "list" ,
        choices : ["USD" , "PKR" , "INR" , "RIYAL" ,  "POUND"],
    },
    {
        name : "amount",
        type : "number" ,
        message : "Enter from the amount" ,
    },
]);

let fromAmount = currency [menu.from];
let toAmount = currency [menu.to];
let usr_amount = menu.amount
let baseAmount =  usr_amount/ fromAmount;
let convertedAmount = baseAmount * toAmount;

console.log (convertedAmount.toFixed(2));
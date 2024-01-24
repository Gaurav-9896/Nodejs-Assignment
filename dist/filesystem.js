"use strict";
const fs = require('fs');
//Writing a file
/*fs.writeFile('file.txt',"Created a file ",(err:any) =>{
    if (err) {
        console.log(err)
    }
//no})*/
//Reading a file
fs.readFile("file.txt", 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File Data: \n " + data);
});
//Deleting a file 
fs.unlink('file.txt', (err) => {
    if (err)
        console.log(err);
});

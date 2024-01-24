const fs = require('fs');
//Writing a file
/*fs.writeFile('file.txt',"Created a file ",(err:any) =>{
    if (err) {
        console.log(err)
    }
//no})*/
//Reading a file
fs.readFile("file.txt", 'utf-8',(err:any,data:any) =>{
    if (err) {
        console.log(err);
        return;
    }
    console.log("File Data: \n " + data);
});
//Deleting a file 
fs.unlink('file.txt', (err:any) =>{
    if (err)
        console.log(err);
});

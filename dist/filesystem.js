"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
module.exports('fs');
//Writing a file
fs.writeFile('file.txt', "Created a file ", (err) => {
    if (err) {
        console.log(err);
    }
});
// const rename = fs.renameSync('file.txt','Renamed')
// console.log (rename)
// //Reading a file
// fs.readFile("file.txt", 'utf-8',(err:any,data:any) =>{
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("File Data: \n " + data);
// });
// // //Deleting a file 
// // fs.unlink('file.txt', (err:any) =>{
// //     if (err)
// //         console.log(err);
// // });
//Day3-
//Readable stream
// const stream =fs.createReadStream('Renamed.txt', 'utf-8')
// stream.on('data',(chunk:any)=>{
//     console.log(chunk)
// })
// stream.on('end',() =>console.log('stream finished'))
//Writable stream
const stream = fs.createReadStream('Renamed.txt', 'utf-8');
const writeStream = fs.createWriteStream('text.md', 'utf-8');
// stream.on('data',(chunk:any)=>{
//     console.log(chunk)
//     writeStream.write(chunk)
// })
// stream.on('end',() =>{
//     writeStream.end()
// })  
//stream.pipe(writeStream).on('error',(error) => console.log(error)) //pipes
//  writeStream.on('close',()=> process.stdout.write('file copied'))
//HTTP//
const https = require('https');
const options = {
    hostname: "",
    port: "",
    path: "",
    method: "GET",
};
const request = https.request(options, (res) => {
    let responsebody = "";
    res.SetEncoding('utf-8');
});

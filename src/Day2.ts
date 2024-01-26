//PATH AND UTIL MODULES

const path = require("path");
//console.log(path.basename(__filename))
console.log(path.join(__dirname, '/.path'));


var util = require ("util");

console.log(util.log(path.basename(__filename)))

//Import and export modules
const getFileExt = ()=>{
    return path.extname(path.basename(__filename))
}
console.log(getFileExt);

module.exports = getFileExt;
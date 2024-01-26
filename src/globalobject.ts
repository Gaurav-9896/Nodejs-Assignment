process.stdout.write("what is node.js?\n")
process.stdin.on('data', (data)=> console.log(data.toString().trim()))//copies input

//READLINE
const readline =require('readline')

const rl = readline.CreateInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('what is your name',(answer:any)=> console.log(answer))
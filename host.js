const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Host Maker by BorzXy')
readline.question('IP: ', ip => {
readline.question('Your File name example (GDPS): ', name => {
readline.question('File Extension example (JSON): ', file => {
console.log(`${name}.${file} Successfully maded...`)

let data = (`${ip} growtopia1.com\n${ip} growtopia2.com`)
   
  fs.writeFile(`${name}.${file}`, data, function(err, result) {
     if(err) console.log('error', err);
   });
 });
});
});
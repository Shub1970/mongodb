const { readFileSync, writeFileSync } = require('fs');

console.log('start');
const first = readFileSync("./firstText.txt", 'utf8');
const second = readFileSync("./secondText.txt", 'utf8');
writeFileSync('./writeHere.txt', `${first} ${second}`);
console.log('end');

const path = require('path');

const filePath = path.join('/content/', 'subfolder', 'text.txt');
console.log(filePath);

console.log(path.basename(filePath))

const filepat = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

console.log(filepat);
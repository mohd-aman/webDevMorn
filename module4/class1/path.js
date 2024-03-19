const path = require('path');

// console.log(path);
// "/Users/interviewbit/Desktop/webDevMorn/module4/class1/fs.js"

const extName = path.extname("/Users/interviewbit/Desktop/webDevMorn/module4/class1/fs.js");
console.log(extName);

const baseName =path.basename('/Users/interviewbit/Desktop/webDevMorn/module4/class1/fs.js');
console.log(baseName);

console.log(__dirname);

console.log(__filename);
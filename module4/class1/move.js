const path = require("path");
const fs = require('fs');

const srcPath = "/Users/interviewbit/Desktop/webDevMorn/module4/class1/myDirectory/file.md";
const destDirectory = "/Users/interviewbit/Desktop/webDevMorn/module4/class1/myDirectory2";

const baseName = path.basename(srcPath);

// const destPath = destDirectory+'/'+baseName;
const destPath = path.join(destDirectory,baseName);

// console.log(destPath);

fs.copyFileSync(srcPath,destPath);

fs.unlinkSync(srcPath);

console.log("File has been moved");
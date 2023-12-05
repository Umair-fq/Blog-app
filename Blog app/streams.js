const fs = require('fs');

const readStream = fs.createReadStream('./file.txt');
const writeStream = fs.createWriteStream('./file1.txt');
// readStream.on('data', (chunk) => {
//     console.log(chunk.toString());
//     writeStream.write(chunk.toString());
// })
readStream.pipe(writeStream)
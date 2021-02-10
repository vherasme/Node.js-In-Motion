const fs = require('fs');

fs.readdir(__dirname, (err, files) => {
    console.log(`Files in ${__dirname}:\n ${files}`)
});
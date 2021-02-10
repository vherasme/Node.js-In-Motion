const fs = require('fs');

fs.writeFile('message.txt', 'Node.JS in Motion', (err) => {
    if (err) {
        throw err;
    }
    console.log("The file has been saved");
    fs.unlink("message.txt", () => {
        if (err) {
            throw err;
        }
        console.log("The file has been deleted");
    });
})
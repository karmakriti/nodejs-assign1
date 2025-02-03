
const fs = require('fs');


// Read file Asynchronously i.e non-blocking

fs.readFile('.file.txt', 'utf8', (error, data) => {
    if (error) {
        console.log("Error reading file : " + error);
        return; // Exits the callback function
    }
// print data
    console.log('File data:\n', data);
   
});


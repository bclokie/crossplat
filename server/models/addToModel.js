const fs = require('fs');

function addFieldsToJSONFile(inputFilename, outputFilename) {
    fs.readFile(inputFilename, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading JSON file:", err);
            return;
        }

        try {
            const jsonData = JSON.parse(data);
            for (const entry of jsonData) {
                entry.exceptions = [];
                entry.storeLinks = [];
            }

            fs.writeFile(outputFilename, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
                if (err) {
                    console.error("Error writing to JSON file:", err);
                } else {
                    console.log("Fields added to JSON file successfully.");
                }
            });
        } catch (parseError) {
            console.error("Error parsing JSON:", parseError);
        }
    });
}

// Usage
const inputJsonFilename = '../gameList.json';
const outputJsonFilename = './modifiedGameList.json';
addFieldsToJSONFile(inputJsonFilename, outputJsonFilename);

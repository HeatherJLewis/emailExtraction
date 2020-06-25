var fs = require("fs");

fs.readFile("NnNTNFEY.txt", function(err, data) {
    try{
        const testText = data.toString();
        const testTextArray = testText.split(' ');

        const resultsArray = testTextArray.filter(el => el.includes('@softwire.com'))

        console.log(resultsArray.length)
    } catch {
        console.log(`Error reading data: ${err}`);

    }
});


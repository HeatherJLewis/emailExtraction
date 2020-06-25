var fs = require("fs");

fs.readFile("NnNTNFEY.txt", function(err, data) {
    if(err){
        throw new Error(`Error reading data: ${err}`)
    }

    const testText = data.toString();

    const results = testText.match(/@softwire.com/g);

    console.log(results.length)

});


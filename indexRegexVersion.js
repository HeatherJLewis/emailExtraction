var fs = require("fs");

fs.readFile("NnNTNFEY.txt", function(err, data) {
    if(err){
        throw new Error(`Error reading data: ${err}`)
    }

    const sampleText = data.toString();

    const arrayOfEmailDomains = sampleText.match(/@[a-zA-Z\-\.]+/g);

    console.log(arrayOfEmailDomains.length)

    const objectOfEmailsDomains = {};

    arrayOfEmailDomains.forEach(domain => {
        if(objectOfEmailsDomains[domain] >= 1){
            return objectOfEmailsDomains[domain] += 1
        } else {
            return objectOfEmailsDomains[domain] = 1;
        }
    })

    console.log(objectOfEmailsDomains)
});


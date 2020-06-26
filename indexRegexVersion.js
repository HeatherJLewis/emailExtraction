var fs = require("fs");

fs.readFile("NnNTNFEY.txt", function(err, data) {
    if(err){
        throw new Error(`Error reading data: ${err}`)
    }

    const sampleText = data.toString();

    const arrayOfEmailDomains = sampleText.match(/@[a-zA-Z\-\.]+/g);

    console.log(arrayOfEmailDomains.length)

    const reducer = (objectOfEmails, domain) => {
        if(objectOfEmails[domain] >= 1){
            objectOfEmails[domain] += 1
        } else {
            objectOfEmails[domain] = 1;
        }
        return objectOfEmails;
    }

    const domainFrequencies = arrayOfEmailDomains.reduce(reducer, {})

    console.log(domainFrequencies)
});

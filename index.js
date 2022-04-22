const fs = require('fs');
const { employeeCycle, mARR, eARR, iARR} = require('./utils/employeeInput');
const {generateHTML} = require('./utils/generateHTML');

function writeToFile(data) {
    fs.writeFile("index.html", data, (err)=> err ? console.error(err): console.log("index.html has been created!"))
}

async function init() {
    await employeeCycle();
    writeToFile(generateHTML( mARR,eARR,iARR));
}

init();
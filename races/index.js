var fs = require("fs");

var list = []; 

var weaponsDir = "./races/";
fs.readdirSync(weaponsDir).forEach(fileName => {
    if(fileName.endsWith(".js") || fileName.includes("example")) return  
    list.push(JSON.parse(fs.readFileSync(weaponsDir+fileName)));
})

module.exports = list;
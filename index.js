var csv = require('csv-to-json')
var inquirer = require('inquirer');

async function main() {
var files = [
    {
        type: 'input',
        message: `What's the file you would like to convert?`,
        name: 'file'
    },
    {
        type: 'input',
        message: 'What would you like to call your output file?',
        name: 'output'
    }
]

var success = function(err){
    console.log('Success!')
}

var parse = function(err,json) {
    csv.writeJsonToFile({
        filename: `${res.output}.json`,
        json: json
    }, success)
}

var res = await inquirer.prompt(files)
var obj = { filename: res.file}

csv.parse(obj, parse)

}

main()
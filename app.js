//  fs module: 1) sync vs 2 async

const {readFileSync,writeFileSync} = require('fs');
const { readFile } = require('fs/promises');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');


console.log(first, second);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
)

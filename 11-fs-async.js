// async: word of callbacks
const {readFile,writeFile} = require('fs');
console.log('Starting the Task');

readFile('./content/first.txt','utf8', (err,result)=>{
    if(err) {
        return
    }

    const first = result;
    readFile('./content/second.txt','utf8', (err,result)=>{
        if(err) {
            return
        }
    
        const second = result;
        writeFile(
            './content/result-async.txt',
            `AYSNC RESULT IS: ${first} AND ${second}`,
            (err,result)=>{
                if(err){
                    return
                }
                console.log('Done with the write')
            });
    });
});

console.log('Last line of the file');
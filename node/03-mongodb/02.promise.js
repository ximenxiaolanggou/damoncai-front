let fs = require('fs')

function readFile(path){
    return new Promise((resolve,reject) => {
        fs.readFile(path,'utf8',(err,data) => {
            if(err){
                reject('error')
            }else {
                resolve(data)
            }
        })
    })
}

readFile('../resource/hello.txt')
    .then(res => {
        console.log(res);
        return readFile('../resource/hello2.txt');
    })
    .then(res => {
        console.log(res);
        return readFile('../resource/hello3.txt');
    })
    .then(res => {
        console.log(res)
        console.log('End...')
    })




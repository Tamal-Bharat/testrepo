const fs = require('fs');

const obj = {
    name  :  'Tamal Biswas',
    age : 120,
    salary : 12000
};

fs.writeFile('./file1.json', JSON.stringify(obj), (error)=>{
    if(error != null){
        console.log(`ERROR: ${error}`);
    }
});

fs.readFile('./file1.json', (error, data)=>{
    if(error != null){
        console.log(`ERROR: ${error}`);
    }
    else{
        console.log(JSON.parse(data));
    }
});
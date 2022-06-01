sha3_256 = require('js-sha3').sha3_256;
var hashList = [];
var finalHashList = "";
function getHash(){
  var fs = require('fs');
  const dir = './task2';
  const files = fs.readdirSync(dir)
  
  for (const file of files) {
    var fs = require('fs');
    var myEmail = ['haydaraliyevmd@gmail.com'];
    var fileBuffer = fs.readFileSync('./task2/'+file);
    const hash = sha3_256.create();
    const finalHex = hash.update(fileBuffer).hex(64);
    hashList.push(finalHex);
    
  }
  hashList.sort();
  finalHashList = hashList.join('').concat(myEmail);
  const finalHash = sha3_256.create();
  const finalResult = finalHash.update(finalHashList).hex(64);
  return finalResult;
}

console.log(getHash());
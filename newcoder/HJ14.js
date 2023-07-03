const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
   let line = await readline();
   let length = parseInt(line);
   const str = [];
   while(length > 0){
    line = await readline();
    str.push(line);
    length --;
   }
   str.sort();
   str.forEach(item => console.log(item));
}()

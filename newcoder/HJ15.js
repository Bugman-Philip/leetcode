const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    const line = await readline();
    const str = parseInt(line).toString(2);
    
    let count = 0;
    for(let i = 0; i < str.length; i ++) {
        if(str.charAt(i) === '1') {
            count++
        }
    } 
    console.log(count);
}()

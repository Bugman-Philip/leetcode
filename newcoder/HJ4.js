const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let line = await readline();
    let count = Math.ceil(line.length / 8);
    let a = 8 - line.length % 8;
    let str = ''
    while(a > 0) {
        str = `${str}0`;
        a--;
    }
    line = `${line}${str}`;
    for(let i = 0; i < count; i ++) {
        console.log(line.substring(i*8, (i+1)*8));
    }
}()



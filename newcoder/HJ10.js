const { off } = require("process");

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
   let line = await readline();
   const map = new Map();
   for(let i = 0; i < line.length; i ++) {
    if(line.charCodeAt(i) >= 0 && line.charCodeAt(i) <= 127 && !map.has(line.charCodeAt(i))) {
        map.set(line.charCodeAt(i), 1)
    }
   }
   console.log(map.size)
}()

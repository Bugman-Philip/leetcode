const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    const line = await readline();
    const map = new Map();
    for(let i = 0; i < line.length; i ++) {
        let count = 1;
        if(map.has(line[i])) {
            count = map.get(line[i])+1;
        }
        map.set(line[i], count);
    }
    let str = [];
    let min = Number.MAX_VALUE;
    for([key, value] of map.entries()) {
        if(min >= value) {
            min = value;
        }
    }
    for([key, value] of map.entries()) {
        if(value === min) {
            line = line.replaceAll(key,'');
        }
    }
    console.log(line);
}()

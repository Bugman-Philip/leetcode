const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    const line = await readline();
    const str = [];
    for(let i = line.length - 1; i >= 0; i --) {
        str.push(line.charAt(i))
    }
    console.log(str.join(''));
}()

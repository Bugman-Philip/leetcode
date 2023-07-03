const { off } = require("process");

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    const line = await readline();
    let str = [];
    for(let i = line.length - 1; i >= 0; i --) {
        if(str.indexOf(line.charAt(i)) === -1) {
            str.push(line.charAt(i));
        }
    }
    let result = '';
    str.forEach(item => result = `${result}${item}`)
    console.log(result)
}()

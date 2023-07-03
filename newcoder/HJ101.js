const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    const length = await readline()
    let nums = await readline();
    const array = nums.split(' ').slice(0, length);
    const flag = await readline();
    if(parseInt(flag) === 0) {
        str.sort((a,b) => parseInt(a) - parseInt(b))
    } else if(parseInt(flag) === 1) {
        str.sort((a,b) => parseInt(b) - parseInt(a))
    }

    console.log(str.join(' '));
}()

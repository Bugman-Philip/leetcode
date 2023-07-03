const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    const line = await readline();
    const str = line.split(';');
    const reg = new RegExp('^([A|W|S|D])([0-9]{1,2}$)');
    const array = str.filter(item => reg.test(item))
    const result = [0,0]
    array.forEach(item => {
        const order = reg.exec(item);
        if(order[1] === 'A') {
            result[0] = result[0] - parseInt(order[2]);
        }else if(order[1] === 'D') {
            result[0] = result[0] + parseInt(order[2]);
        }else if(order[1] === 'W') {
            result[1] = result[1] + parseInt(order[2]);
        }else if(order[1] === 'S') {
            result[1] = result[1] - parseInt(order[2]);
        }
    });
    console.log(result.join());
}()

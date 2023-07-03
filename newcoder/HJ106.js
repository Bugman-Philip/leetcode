const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    const line = await readline();
    const array = line.split(" ");
    const num = array[0];
    const offset = array[array.length-1];
    const target = array[num+1];
    const dict = array.slice(1, num+1);
    const set = new Set();
    for(let item of dict) {
        let result1 = false;
        let result2 = false;
        if(item !== target && item.length === target.length) {
            result1 = true;
        }
        const arrayItem = item.split('');
        const arrayTarget = target.split('');
        arrayItem.sort();
        arrayTarget.sort();
        if(arrayItem.join('') === arrayTarget.join('')) {
            result2 = true;
        }
        if(result1 && result2) {
            set.add(item);
        }
    }
    console.log(set.size);
    const result = [...set];
    result.sort();
    console.log(result[offset -1]);
    
}()

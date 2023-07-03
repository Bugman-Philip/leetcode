const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let count = await readline()
    let map = new Map();    
    while(count > 0) {
        let current = await readline();
        let str = current.split(' ');
        let value = parseInt(str[1]);
        if(map.has(str[0])) {
            value = parseInt(map.get(str[0])) + parseInt(value)
        }
        map.set(str[0],value);
        count --;
    }
    const string = [...map.entries()];
    string.sort((a,b) => parseInt(a[0]) - parseInt(b[0]));
    string.forEach(item => console.log(`${item[0]} ${item[1]}`))
}()

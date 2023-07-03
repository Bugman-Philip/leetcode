const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
// 10.0.3.193
void async function () {
    while(line = await readline()) {
        if(line.indexOf('.') !== -1) {
            let str = line.split('.');
            let str1 = [];
            for(let i = 0; i < str.length; i++) {
                let item = parseInt(str[i]).toString(2);
                while(item.length < 8) {
                    item = `0${item}`;
                }
                str1.push(item);
            }
            str1 = str1.join('');
            console.log(parseInt(str1, 2));
        } else {
            let str = parseInt(line).toString(2);
            if(str.length % 8) {
                while(str.length % 8 !== 0) {
                    str = `0${str}`
                }
            }
            let str1 = [];
            for(let i = 0; i < str.length; i= i+8) {
                const current = str.substring(i,i+8)
                const currentNum = parseInt(current, 2);
                str1.push(currentNum);
            }
            console.log(str1.join('.'))
        }
    }   
  
}()

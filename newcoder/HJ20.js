const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    function test(line) {
        if(line.length <=8) {
            return "NG";
        }
        const reg1 = new RegExp('[a-z]');
        const reg2 = new RegExp('[A-Z]');
        const reg3 = new RegExp('[0-9]');
        const reg4 = new RegExp('[^a-zA-Z0-9]');
    
        let count = 0;
        if(reg1.test(line)) {
            count ++;
        }
        if(reg2.test(line)) {
            count ++
        }
        if(reg3.test(line)) {
            count++
        }
        if(reg4.test(line)) {
            count++
        }
    
        if(count < 3) {
            return "NG";
        }
    
        for(let i = 0; i < line.length - 3; i ++) {
            if(line.substring(i+3).indexOf(line.substring(i, i+3)) !== -1) {
                return "NG";
            }
        }
    
        return "OK";
    }
    while(line = await readline()) {
        const result = test(line);
        console.log(result);
    }
    
}()

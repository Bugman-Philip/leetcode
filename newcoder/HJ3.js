const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let count = await readline();
    let i = 0;
    let set = new Set();
    while(i < count) {
        set.add(await readline());
        i++;
    }
    const list = [...set];
    list.sort();
    list.forEach(item => console.log(item));
  
}()


function sort(array) {
    array.sort((a,b) => {
        const aa = a.split('.');
        const bb = b.split('.');
        const length = aa.length - bb.length >= 0 ? aa.length : bb.length;
        for(let i = 0; i < length; i ++) {
            if(parseInt(aa[i]) - parseInt(bb[i]) > 0) {
                return 1;
            } else if(parseInt(aa[i]) - parseInt(bb[i]) < 0) {
                return -1;
            }
        }
     
        return aa.length - bb.length
    })
}

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let line = await readline();
    const st = line.split(' ');
    st.reverse()
    st = st.join(' ');
    console.log(st);
}()

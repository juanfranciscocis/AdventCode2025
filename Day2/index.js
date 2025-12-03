const fs = require("fs");

const file = fs.readFileSync("input.txt", "utf8")
    .replace(/\r/g, "")
    .split(",")
    .filter(Boolean);


const isInvalid = []

for (const str of file) {
    const init = str.split("-");
    const min = Number(init[0]);
    const max = Number(init[1]);

    for (let i = min; i <= max; i++) {
        const s = i.toString();
        if (s.length % 2 !== 0) continue;


        // split into two the number and check if is the same
        const numLen = i.toString().length;
        const firstHalf = i.toString().slice(0, numLen / 2);
        const secondHalf = i.toString().slice(numLen / 2);

        if (firstHalf === secondHalf) isInvalid.push(i);
    }
}

console.log(isInvalid.reduce((a, b) => a + b));
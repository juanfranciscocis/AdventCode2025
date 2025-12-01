const fs = require("fs");

const file = fs.readFileSync("input.txt", "utf8")
    .replace(/\r/g, "")
    .split("\n")
    .filter(Boolean);

let pos = 50;
let zeroHits = 0;

for (const line of file) {
    const dir = line[0];
    const steps = Number(line.slice(1));

    const stepDirection = dir === "R" ? 1 : -1;

    for (let i = 0; i < steps; i++) {
        pos = (pos + stepDirection + 100) % 100;
        if (pos === 0) zeroHits++;
    }
}

console.log(zeroHits);

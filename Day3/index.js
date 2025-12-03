const fs = require("fs");

const file = fs.readFileSync("input.txt", "utf8")
    .replace(/\r/g, "")
    .split("\n")
    .filter(Boolean);

let total = 0;

for (const line of file) {
    let biggestForThisLine = 0;

    for (let i = 0; i < line.length; i++) {
        const a = Number(line[i]);

        for (let j = i + 1; j < line.length; j++) {
            const b = Number(line[j]);
            const value = a * 10 + b;

            if (value > biggestForThisLine) {
                biggestForThisLine = value;
            }
        }
    }

    total += biggestForThisLine;
}

console.log(total);

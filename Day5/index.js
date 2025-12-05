const fs = require("fs");

const range = fs.readFileSync("input.txt", "utf8")
    .replace(/\r/g, "")
    .split("\n")
    .filter(Boolean);

const toCheck = fs.readFileSync("input2.txt", "utf8")
    .replace(/\r/g, "")
    .split("\n")
    .filter(Boolean);




let isFresh = 0
for (const line of toCheck){
    for (const rangeLine of range){
        if (Number(line) >= Number(rangeLine.split("-")[0]) && Number(line) <= Number(rangeLine.split("-")[1])) {
            isFresh++;
            break;
        }
    }
}

console.log(isFresh);
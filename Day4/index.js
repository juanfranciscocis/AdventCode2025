const fs = require("fs");

const file = fs.readFileSync("input.txt", "utf8")
    .replace(/\r/g, "")
    .split("\n")
    .filter(Boolean);

let total = 0;
for (let row = 0; row < file.length; row++) {
    for (let col = 0; col < file[row].length; col++) {
        if (file[row][col] === '@') {
            let counter = 0
            // Arriba izquierda
            if (row > 0 && col > 0 && file[row - 1][col - 1] === '@') counter++;
            // Arriba
            if (row > 0 && file[row - 1][col] === '@') counter++;
            // Arriba derecha
            if (row > 0 && col < file[row].length - 1 && file[row - 1][col + 1] === '@') counter++;
            // Izquierda
            if (col > 0 && file[row][col - 1] === '@') counter++;
            // Derecha
            if (col < file[row].length - 1 && file[row][col + 1] === '@') counter++;
            // Abajo izquierda
            if (row < file.length - 1 && col > 0 && file[row + 1][col - 1] === '@') counter++;
            // Abajo
            if (row < file.length - 1 && file[row + 1][col] === '@') counter++;
            // Abajo derecha
            if (row < file.length - 1 && col < file[row].length - 1 && file[row + 1][col + 1] === '@') counter++;

            if (counter < 4) total++;


        }
    }
}

console.log(total);
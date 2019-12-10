const fs = require("fs");
const colors = require("colors");

let createFile = (base, limit) => {
  return new Promise((resolve, reject) => {
    let data = "";

    if (!Number(base)) {
      reject(`El valor introducido "${base}" no es numérico`);
      return;
    }

    for (let i = 1; i <= limit; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tables/tabla-${base}.txt`, data, err => {
      if (err) reject(err);
      else
        resolve(
          `${colors.green(
            `tables/tabla-${base}.txt`
          )} en base ${base} y limite ${limit}`
        );
    });
  });
};

let toListTable = (base, limit) => {
  let data = "";

  console.log(`=======================`.green);
  console.log(`Taba del ${base} `.green);
  console.log(`=======================`.green);

  for (let i = 1; i <= limit; i++) {
    console.log(`${base} * ${i} = ${base * i}\n`);
  }
};

module.exports = {
  createFile,
  toListTable
};

const { argv } = require("./config/yargs");
const colors = require("colors");
const { createFile, toListTable } = require("./multiply/multiply");
let comand = argv._[0];

switch (comand) {
  case "tolist":
    toListTable(argv.base, argv.limit);
    break;
  case "create":
    createFile(argv.base, argv.limit)
      .then(res => {
        console.log(`Archivo creado: ${res} `);
      })
      .catch(error => {
        console.log(`Error => ${error}`);
      });

    break;

  default:
    console.log("Comando no reconocido");
}

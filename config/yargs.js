const args = {
  base: {
    demand: true,
    alias: "b"
  },
  limit: {
    alias: "l",
    default: 10
  }
};
const argv = require("yargs")
  .command("create", "Imprime en consola la tabla de multiplicar", args)
  .command("tolist", "Lista la tabla de multiplicar", args)
  .help().argv;

module.exports = {
  argv
};

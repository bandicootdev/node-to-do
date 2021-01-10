const {argv} = require('./config/yargs')
const colors = require('colors');
const {crear, getListado, actualizar, eliminar} = require('./utils/utils');
let comando = argv._[0];
console.log(comando)

switch (comando) {
  case 'crear': {
    let tarea = crear(argv.descripcion);
    console.log(tarea)
    break
  }
  case 'listar': {
    let listado = getListado();
    for (const tarea of listado) {
      console.log('============ TODO ============'.green)
      console.log(`==== Nombre: ${tarea.descripcion} ====`.cyan)
      console.log(`==== Estado: ${tarea.complete} ====`.cyan)
      console.log('=============================='.green)
    }
    break
  }
  case 'actualizar': {
    let actualizado = actualizar(argv.descripcion, argv.complete)
    console.log(actualizado)
    break
  }
  case 'eliminar': {
    let eliminado = eliminar(argv.descripcion)
    console.log(eliminado)
    break
  }
  default:
    console.log('Comando invalido ')
}
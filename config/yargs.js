const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')

const descripcion = {
  demand: true,
  description: 'Descripcion de la tarea por hacer',
  alias: 'd'
}

const complete = {
  default: true,
  description: 'Marca como completado o pendiente la tarea',
  alias: 'c'
}

const argv = yargs(hideBin(process.argv))
  .command('crear', 'Crea una tarea por hacer', {
    descripcion
  })
  .command('actualizar', 'Actualizar el estado de una tarea', {
    descripcion,
    complete
  })
  .command('eliminar', 'Eliminar una tarea', {
    descripcion
  })
  .help()
  .argv


module.exports = {
  argv
}
const fs = require('fs');

let todoList = [];

const guardarDB = () => {
  let data = JSON.stringify(todoList)
  fs.writeFile('db/data.json', data, (err) => {
    if (err) throw new Error('No se pudo guardar');
  })
};

const cargarDB = () => {
  try {
    todoList = require('../db/data.json')
  } catch (err) {
    todoList = [];
  }
};

const crear = (descripcion) => {
  const todo = {
    descripcion,
    complete: false
  }
  cargarDB();
  todoList.push(todo)
  guardarDB();
  return todo;
};

const getListado = () => {
  cargarDB();
  return todoList;
};

const actualizar = (descripcion, completado = true) => {
  cargarDB();
  let index = todoList.findIndex((e) => e.descripcion === descripcion)
  if (index >= 0) {
    todoList[index].complete = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

const eliminar = (descripcion) => {
  cargarDB();
  let index = todoList.findIndex((e) => e.descripcion === descripcion)
  if (index >= 0) {
    todoList.splice(index, 1)
    guardarDB();
    return true;
  } else {
    return false;
  }
};

module.exports = {
  crear,
  getListado,
  actualizar,
  eliminar
}
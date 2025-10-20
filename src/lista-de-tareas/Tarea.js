


function Tarea(titulo, descripcion, estado, creacion, ultimaEdicion, vencimiento, dificultad) {

    this.titulo = titulo;
    this.descripcion = descripcion;
    this.estado = estado;
    this.creacion = creacion;
    this.ultimaEdicion = ultimaEdicion;
    this.vencimiento = vencimiento;
    this.dificultad = dificultad;
}


Tarea.prototype.filtrarEstado = function (arrayTareas, estado) {

    let arrayTareaFiltrado;
    arrayTareaFiltrado = arrayTareas.filter(tarea => tarea.estado == estado);

    return arrayTareaFiltrado;
}

Tarea.prototype.mostrarTareas = function (arrayTareas) {

    let index = 0;
    arrayTareas.forEach(tarea => {
        console.log(`[${index + 1}] ${tarea.titulo}`);
        index++;
    });
   
}

Tarea.prototype.mostrarDetalleTareas = function () {
    console.log(`
Titulo: ${this.titulo}
Descripcion: ${this.descripcion}
Estado: ${this.estado}
Dificultad: ${this.dificultad}
Creacion: ${this.creacion.toLocaleDateString()}
Vencimiento: ${this.vencimiento.toLocaleDateString()}
Ultima Edicion: ${this.ultimaEdicion.toLocaleDateString()}`);
}

Tarea.prototype.buscarTarea =  function (arrayTareas,titulo) {
    
    let arrayTareasEncontradas = arrayTareas.filter(tarea => tarea.titulo.toLowerCase() == titulo.toLowerCase());

    return arrayTareasEncontradas;

}


module.exports = { Tarea }
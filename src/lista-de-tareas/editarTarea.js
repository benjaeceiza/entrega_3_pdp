const { pedirDatos } = require("./pedirDatos");

async function editarTarea(tarea) {

    console.log("\n---------------------\n");
    console.log(`Editar tu tarea: ${tarea.titulo}\n`);
    console.log("---------------------\n");
    console.log(`- Si deseas mantener los valores de un atributo, simplemente dejalos en blanco.\n`);
    console.log(`- Si deseas dejar en blanco un atributo, escribe un espacio.\n`);

    await pedirDatos(tarea);
}
module.exports = { editarTarea }
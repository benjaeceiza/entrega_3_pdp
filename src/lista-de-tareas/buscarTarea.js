const { detalleTarea } = require("./detalleTarea");
const { input } = require("./readline");


async function buscarTarea(arrayTareas) {

    console.log("\n---------------------\n");
    console.log("Buscar tarea\n");
    console.log("---------------------\n");
    let buscarTarea = await input(`Introduce el titulo de la tarea para buscarla:\n`);

    let arrayTareasEncontradas = arrayTareas[0].buscarTarea(arrayTareas, buscarTarea);

    if (arrayTareasEncontradas.length == 0) {
        console.log("\n No se ha encontrado ninguna tarea");

    } else {
        console.log("\n---------------------\n");
        console.log("Tareas ecnontradas\n");
        console.log("---------------------\n");
        arrayTareas[0].mostrarTareas(arrayTareasEncontradas);

        let detalleTareaAsk = await input(`\nDesea ver los detalles de alguna?\nIntroduce el numero para verla o 0 para volver.\n`);

        if (parseInt(detalleTareaAsk)) {

            await detalleTarea(arrayTareasEncontradas, detalleTareaAsk);
        }
    }



}

module.exports = { buscarTarea }
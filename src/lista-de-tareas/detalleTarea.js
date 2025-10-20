const { editarTarea } = require("./editarTarea");
const { input } = require("./readline");

async function detalleTarea(arrayTareaFiltrado, detalleTareaAsk) {


    while (parseInt(detalleTareaAsk) > arrayTareaFiltrado.length || parseInt(detalleTareaAsk) <= 0 || isNaN(parseInt(detalleTareaAsk))) {
        detalleTareaAsk = await input(`\nIngrese un numero valido...\n`);
    }

    console.log("\n---------------------\n");
    console.log("El Detalle de tu tarea\n");
    console.log("---------------------\n");

    arrayTareaFiltrado[parseInt(detalleTareaAsk - 1)].mostrarDetalleTareas();

     let editarAsk = await input(`\nSi deseas editarla, presiona E, o Presiona 0 para volver.\n`);

     while(parseInt(editarAsk) != 0 && editarAsk.toUpperCase() != "E" ){
           editarAsk = await input(`\nIngrese un valor valido...\n`);
     }

     if(parseInt(editarAsk) != 0){
        await editarTarea(arrayTareaFiltrado[parseInt(detalleTareaAsk - 1)]);
     }
}

module.exports = { detalleTarea }
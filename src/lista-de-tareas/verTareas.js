const { detalleTarea } = require("./detalleTarea");
const { input } = require("./readline");

async function verTareas(arrayTareas) {


    let arrayTareaFiltrado = [];
    console.log("\n---------------------\n");
    console.log("Que tareas desea ver?\n");
    console.log("---------------------\n");

    let ask = await input(`[1] Todas\n[2] Pendientes\n[3] En curso\n[4] Terminadas\n[5] Canceladas\n[0] Volver\n`);


    while (parseInt(ask) != 1 && parseInt(ask) != 2 && parseInt(ask) != 3 && parseInt(ask) != 4 && parseInt(ask) != 0) {
        ask = await input(`Valor Ingresado no valido...\n`);
    }

    if (parseInt(ask) != 0) {

        if (parseInt(ask) === 1) {

            arrayTareaFiltrado = arrayTareas;

        } else if (parseInt(ask) === 2) {

            arrayTareaFiltrado = arrayTareas[0].filtrarEstado(arrayTareas, "Pendiente");

        } else if (parseInt(ask) === 3) {
            arrayTareaFiltrado = arrayTareas[0].filtrarEstado(arrayTareas, "En curso");

        } else if (parseInt(ask) === 4) {

            arrayTareaFiltrado = arrayTareas[0].filtrarEstado(arrayTareas, "Terminada");
        } else if (parseInt(ask) === 5) {

            arrayTareaFiltrado = arrayTareas[0].filtrarEstado(arrayTareas, "Cancelada");
        }



        console.log("\n---------------------\n");
        console.log("Estas son tus tareas\n");
        console.log("---------------------\n");

        if (arrayTareaFiltrado.length == 0) {

            console.log("No hay tareas disponibles\n");

        } else {

            arrayTareas[0].mostrarTareas(arrayTareaFiltrado);
            let detalleTareaAsk = await input(`\nDesea ver los detalles de alguna?\nIntroduce el numero para verla o 0 para volver.\n`);
             
             if(parseInt(detalleTareaAsk)){
    
                await detalleTarea(arrayTareaFiltrado,detalleTareaAsk);
             }
        }

    }

}

module.exports = { verTareas };
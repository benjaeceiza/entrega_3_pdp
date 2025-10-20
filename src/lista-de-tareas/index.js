const { agregarTarea } = require("./agregarTarea");
const { buscarTarea } = require("./buscarTarea");
const { input, closeInput } = require("./readline");
const { Tarea } = require("./Tarea");
const { verTareas } = require("./verTareas");


async function main() {

    let menuAns;
    let pulse;

    const tarea1 = new Tarea("Comprar leche", "Supermercado", "Pendiente", new Date(), new Date(), new Date(), "⭐");
    const tarea2 = new Tarea("Hacer ejercicio", "Gimnasio", "En curso", new Date(), new Date(), new Date(), "⭐⭐");
    const arrayTareas = [tarea1, tarea2];


    while (menuAns != 0) {

        console.log("\n---------------------\n");
        console.log("Que desea hacer?\n");
        console.log("---------------------\n");

        menuAns = await input(`[1] Ver Mis Tareas.\n[2] Buscar una Tarea.\n[3] Agregar una Tarea.\n[0] Salir.\n`);
        switch (parseInt(menuAns)) {

            case 1:
                await verTareas(arrayTareas);

                break;

            case 2:
                await buscarTarea(arrayTareas);

                break;

            case 3:
                await agregarTarea(arrayTareas);

                break;

            case 0:
                console.log("\n---------------------\n");
                console.log("Saliendo del sistema\n");
                console.log("---------------------\n");
                pulse = await input("Presione una tecla para continuar...\n");

                break;
            default:
                console.log("\n---------------------\n");
                console.log("Valor invalido\n");
                console.log("---------------------\n");
                pulse = await input("Presione una tecla para continuar...\n");
                break;

        }
    }


    closeInput();
}

main();
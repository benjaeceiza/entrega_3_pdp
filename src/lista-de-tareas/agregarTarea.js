const { input } = require("./readline");
const { Tarea } = require("./Tarea");

async function agregarTarea(arrayTareas) {
    console.log("\n---------------------\n");
    console.log("Agregar una tarea\n");
    console.log("---------------------\n");

    // PETICION DE TITULO TAREA
    let titulo = await input(`Introduce El titulo de la tarea:\n`);
    if (titulo.trim() == "") {
        titulo = "Sin titulo";
    };

    //   PETICION DESCRIPCION DE LA TAREA
    let descripcion = await input(`Introduce la descripcion de la tarea:\n`);
    if (descripcion.trim() == "") {
        descripcion = "Sin descripcion";
    };

    // PETICION DEL ESTADO DE LA TAREA
    console.log("Introduce el estado de la tarea:\n");
    let estado = await input(`Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada):\n`);

    // CONTROLA QUE EL USUARIO HAYA INGRESADO UN DATO VALIDO
    if (estado.toLowerCase() != "p" && estado.toLowerCase() != "e" && estado.toLowerCase() != "t" && estado.toLowerCase() != "c" && estado.trim() != "") {
        console.log("\nOpcion invalida se le asignara PENDIENTE\n");
        estado = "";
        const pulsar = await input(`Presione una tecla para continuar...`);
    }

    // ASIGNACION DE ESTADO
    if (estado == "" || estado == " ") {
        estado = "Pendiente";
    };
    if (estado.toLowerCase() == "p") {
        estado = "Pendiente";
    };
    if (estado.toLowerCase() == "e") {
        estado = "En curso";
    };
    if (estado.toLowerCase() == "t") {
        estado = "Terminada";
    };
    if (estado.toLowerCase() == "c") {
        estado = "Cancelada";
    };

    // PETICION DE LA DIFICULTAD DE LA TAREA
    console.log("Introduce la dificultad de la tarea:\n");
    let dificultad = await input(`Dificultad ([1] / [2] / [3]):\n`);

    if (parseInt(dificultad) != 1 && parseInt(dificultad) != 2 && parseInt(dificultad) != 3 && dificultad.trim() != "") {
        console.log("Opcion invalida se le asignara DIFICULTAD 1\n");
        dificultad = "⭐";
        const pulsar = await input(`Presione una tecla para continuar...`);
    }

    if (dificultad.trim() == "") {
        dificultad = "⭐";
    }

    // ASIGNAMIENTO DE VENCIMIENTO, SE LE SUMA 10 DIAS A LA FECHA DE LA CREACION

    const vencimiento = new Date();
    const dia = vencimiento.getDate();
    vencimiento.setDate(dia + 10);
    console.log("\nSu nueva tarea:\n");
    console.log(`Titulo: ${titulo}`);
    console.log(`Descripcion: ${descripcion}`);
    console.log(`Estado: ${estado}`);
    console.log(`Dificultad: ${dificultad}`);
    console.log(`Vencimiento: ${vencimiento.toLocaleDateString()}`);

    // LO MANDAMOS AL ARRAY PRINCIPAL

    let tareaNueva = new Tarea(titulo, descripcion, estado, new Date(), new Date(), vencimiento,dificultad)
    arrayTareas.push(tareaNueva);
    console.log("\nTarea Agregada con exito!:");

    const pulsar = await input(`\nPresione una tecla para continuar...`);

    return arrayTareas;
}

module.exports = { agregarTarea }
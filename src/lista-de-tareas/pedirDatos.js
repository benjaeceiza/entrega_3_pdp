const { input } = require("./readline")

async function pedirDatos(tarea) {

    let nuevoTitulo = await input(`1. Ingresa el Titulo: \n`);
    let nuevaDescripcion = await input(`2. Ingresa la descripcion: \n`);
    let nuevoEstado = await input(`3. Estado ([P]endiente / [E]n curso / [T]erminada / [C]ancelada):\n`);

    if (nuevoEstado != " " && nuevoEstado != "" &&
        nuevoEstado.toUpperCase() != "E" &&
        nuevoEstado.toUpperCase() != "P" &&
        nuevoEstado.toUpperCase() != "T" &&
        nuevoEstado.toUpperCase() != "C") {

        console.log("Opcion invalida, no se modificara el valor de ESTADO");
        let pulsar = await input(`Presione una tecla para continuar...`);
        nuevoEstado = "";

    }

    let nuevaDificultad = await input(`4. Dificultad ([1] / [2] / [3]):\n`);

    while (parseInt(nuevaDificultad) != 1 && parseInt(nuevaDificultad) != 2 && parseInt(nuevaDificultad) != 3 && nuevaDificultad != " " && nuevaDificultad != "") {
        console.log("");
        nuevaDificultad = "";
        pulsar = await input(`\nHa introducido un numero invalido, no se modificara la dificultad\nPresione una tecla para continuar...`);
    }


    let nuevoVencimiento = await input(`5. Vencimiento: Ingresa la cantidad de dias que quieres aumentar la fecha de vencimiento\n`);

    // ESTRUCTURAS DE CONTROL, VERIFICA SI EL USUARIO INGRESO UN ESPACIO, UN DATO, O SI SOLO DIO ENTER 

    // VALIDACION DE TITULO
    if (nuevoTitulo == " ") {

        tarea.titulo = "Sin Titulo";
   

    } else if (nuevoTitulo) {

        tarea.titulo = nuevoTitulo;
   
    }

    // VALIDACION DE ESTADO
    if (nuevoEstado == " ") {

        tarea.estado = "Pendiente";

    } else if (nuevoEstado) {
        if (nuevoEstado.toLocaleLowerCase() == "p") {

            tarea.estado = "Pendiente";

        } else if (nuevoEstado.toLocaleLowerCase() == "e") {

            tarea.estado = "En curso";

        } else if (nuevoEstado.toLocaleLowerCase() == "t") {

            tarea.estado = "Terminada";

        } else if (nuevoEstado.toLocaleLowerCase() == "c") {

            tarea.estado = "Cancelada";

        }
        

    }

    // VALIDACION DE DESCRIPCION
    if (nuevaDescripcion == " ") {
        tarea.descripcion = "Sin Descripción";
    } else if (nuevaDescripcion) {

        tarea.descripcion = nuevaDescripcion;
      
    }

    // VALIDACION DE DIFICULTAD

    if (nuevaDificultad == " ") {
        tarea.dificultad = "⭐";
    } else if (nuevaDificultad) {
        if (parseInt(nuevaDificultad) == 1) {
            tarea.dificultad = "⭐";
            

        } else if (parseInt(nuevaDificultad) == 2) {

            tarea.dificultad = "⭐⭐";
          
        } else if (parseInt(nuevaDificultad) == 3) {

            tarea.dificultad = "⭐⭐⭐";
         
        }
    }
    // VALIDACION DE VENCIMIENTO
    if (nuevoVencimiento == " ") {
        console.log("No puede dejar en blanco la fecha de vencimiento, Se dejara la fecha existente.\n");
    } else if (nuevoVencimiento) {

        let dia = tarea.vencimiento.getDate();

        tarea.vencimiento.setDate(dia + parseInt(nuevoVencimiento));
      
    }


    console.log("!Los Datos se han guardado exitosamente!\n");
     
    pulsar = await input(`Presione una tecla para continuar...`);

    return tarea;

}

module.exports = { pedirDatos }
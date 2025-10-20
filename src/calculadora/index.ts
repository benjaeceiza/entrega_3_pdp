import { closeInput, input } from "./readline";
import { Calcular } from "./Calcular";
import { validarNumero } from "./validarNumero";
import { validarDivision } from "./validarDivision";


async function main() {
    let menu: number = 10;
    let primerNumero: number = 0;
    let segundoNumero: number = 0;
    let primerNumeroAsk: string = "";
    let segundoNumeroAsk: string = "";
    let pulsar:string ="";

    while (menu !== 0) {

        console.log("\nIngresa la operacion que desee hacer:\n");

        let menuAns = await input("[1] Sumar\n[2] Restar\n[3] Dividir\n[4] Multiplicar\n[0] Salir\n");

        menu = parseInt(menuAns);
        switch (menu) {
            case 1:
                console.log("\nHas elegido sumar\n");
               
                // INICIALIZAMOS SUMA
                const calculo: Calcular = new Calcular(0, 0);
                 
                // PEDIMOS Y CONTROLAMOS LOS NUMEROS INGRESADOS
                primerNumeroAsk = await input(`\nIngrese el primer numero\n`);
                primerNumero = await validarNumero(primerNumeroAsk);

                segundoNumeroAsk = await input(`\nIngrese el segundo numero\n`);
                segundoNumero = await validarNumero(segundoNumeroAsk);

                // SETEAMOS Y CALCULAMOS
                calculo.setPrimerNumero(primerNumero);
                calculo.setSegundoNumero(segundoNumero);
                calculo.sumar();

                // MOSTRAMOS RESULTADO
                console.log("\nEl resultado de la suma es: " + calculo.getResultado());

                pulsar = await input("\nPulsa enter para continuar...");

                break;
            case 2:

                console.log("\nHas elegido restar\n");
               
                // INICIALIZAMOS RESTA
                const calculo1: Calcular = new Calcular(0, 0);

                // PEDIMOS Y CONTROLAMOS LOS NUMEROS INGRESADOS
                primerNumeroAsk = await input(`\nIngrese el primer numero\n`);
                primerNumero = await validarNumero(primerNumeroAsk);

                segundoNumeroAsk = await input(`\nIngrese el segundo numero\n`);
                segundoNumero = await validarNumero(segundoNumeroAsk);
 
                // SETEAMOS Y CALCULAMOS
                calculo1.setPrimerNumero(primerNumero);
                calculo1.setSegundoNumero(segundoNumero);
                calculo1.restar();

                // MOSTRAMOS RESULTADO
                console.log("\nEl resultado de la resta es: " + calculo1.getResultado());

                pulsar = await input("\nPulsa enter para continuar...");


                break;
            case 3:
                 console.log("\nHas elegido dividir\n");
               
                // INICIALIZAMOS DIVISION
                const calculo2: Calcular = new Calcular(0, 0);

                // PEDIMOS Y CONTROLAMOS LOS NUMEROS INGRESADOS
                primerNumeroAsk = await input(`\nIngrese el primer numero\n`);
                primerNumero = await validarNumero(primerNumeroAsk);

                segundoNumeroAsk = await input(`\nIngrese el segundo numero\n`);
                segundoNumero = await validarNumero(segundoNumeroAsk);
                segundoNumero = await validarDivision(segundoNumeroAsk);
 
                // SETEAMOS Y CALCULAMOS
                calculo2.setPrimerNumero(primerNumero);
                calculo2.setSegundoNumero(segundoNumero);
                calculo2.dividir();

                // MOSTRAMOS RESULTADO
                console.log("\nEl resultado de la division es: " + calculo2.getResultado());

                pulsar = await input("\nPulsa enter para continuar...");
                break;
            case 4:
                  console.log("\nHas elegido multiplicar\n");
               
                // INICIALIZAMOS MULTIPLICACION
                const calculo3: Calcular = new Calcular(0, 0);

                // PEDIMOS Y CONTROLAMOS LOS NUMEROS INGRESADOS
                primerNumeroAsk = await input(`\nIngrese el primer numero\n`);
                primerNumero = await validarNumero(primerNumeroAsk);

                segundoNumeroAsk = await input(`\nIngrese el segundo numero\n`);
                segundoNumero = await validarNumero(segundoNumeroAsk);
 
                // SETEAMOS Y CALCULAMOS
                calculo3.setPrimerNumero(primerNumero);
                calculo3.setSegundoNumero(segundoNumero);
                calculo3.multiplicar();

                // MOSTRAMOS RESULTADO
                console.log("\nEl resultado de la multiplicacion es: " + calculo3.getResultado());

                pulsar = await input("\nPulsa enter para continuar...");
                break;
            case 0:
                console.log("\nSaliendo...\n");
                pulsar = await input("Pulsa enter para continuar...");
                break;

            default:

                console.log("\nOperacion no valida\n");
                pulsar = await input("Pulsa enter para continuar...");
                break;

        }

        
    }
    
    closeInput();
}

main();
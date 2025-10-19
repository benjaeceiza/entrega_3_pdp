import { input } from "./readline";
import { Calcular } from "./Calcular";


async function main() {
    let menu: number = 10;
    let primerNumero: number = 0;
    let segundoNumero: number = 0;

    while (menu !== 0) {

        console.log("\nIngresa la operacion que desee hacer:\n");

        let menuAns = await input("[1] Sumar\n[2] Restar\n[3] Dividir\n[4] Multiplicar\n[0] Salir\n");

        menu = parseInt(menuAns);
        switch (menu) {
            case 1:
                console.log("\nHas elegido sumar\n");
                const sumar:Calcular = new Calcular(0,0);
                //HCER LA CALCULADORA
                

                console.log(`El resultado de la suma es: ${sumar.sumar()}\n`);
                
                let pulsar = await input("\nPulsa enter para continuar...");

                break;
            case 2:
               



                break;
            case 3:
                console.log("\nHas elegido dividir\n");
              
                pulsar = await input("\nPulsa enter para continuar...");
                break;
            case 4:
                console.log("\nHas elegido multiplicar\n");
             
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

}

main();
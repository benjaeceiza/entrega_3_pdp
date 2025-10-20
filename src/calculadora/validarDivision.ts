import { input } from "./readline";

export async function validarDivision(numero: number | string): Promise<number> {
  let num = Number(numero);
 
  while (num == 0 || isNaN(num)) {
    const numeroAsk = await input("\nEl valor ingresado no es válido, ingrese uno nuevamente...\n");
    num = Number(numeroAsk);
  }

  return num;
}
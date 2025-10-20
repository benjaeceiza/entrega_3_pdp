import { input } from "./readline";

export async function validarNumero(numero: number | string): Promise<number> {
  let num = Number(numero);
 
  while (isNaN(num)) {
    const numeroAsk = await input("\nEl valor ingresado no es válido, ingrese uno nuevamente...\n");
    num = Number(numeroAsk);
  }

  return num;
}
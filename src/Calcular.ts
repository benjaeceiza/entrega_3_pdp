export class Calcular {
    private primerNumero: number;
    private segundoNumero: number;
    private resultado: number;

    public constructor(primerNumero: number, segundoNumero: number) {
        this.primerNumero = primerNumero;
        this.segundoNumero = segundoNumero;
        this.resultado = 0;
    }
   

    public setPrimerNumero(primerNumero: number): void {

        this.primerNumero = primerNumero;
    }

    public setSegundoNumero(segundoNumero: number): void {
        this.segundoNumero = segundoNumero;
    }

    public sumar(): number {
        this.resultado = this.primerNumero + this.segundoNumero;
        return this.resultado;
    }

    public restar(): number {
        this.resultado = this.primerNumero - this.segundoNumero;
        return this.resultado;
    }
    public multiplicar(): number {
        this.resultado = this.primerNumero * this.segundoNumero;
        return this.resultado;
    }
    public dividir(): number {
        if (this.segundoNumero === 0) {
            console.log("Error: No se puede dividir entre cero.");

        }
        this.resultado = this.primerNumero / this.segundoNumero;
        return this.resultado;
    }
}
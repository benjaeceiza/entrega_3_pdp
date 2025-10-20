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

    public sumar(): void {
        this.resultado = this.primerNumero + this.segundoNumero;
      

    }

    public restar(): void {
        this.resultado = this.primerNumero - this.segundoNumero;

    }
    public multiplicar(): void {
        this.resultado = this.primerNumero * this.segundoNumero;

    }
    public dividir(): void {
      
        this.resultado = this.primerNumero / this.segundoNumero;
    }

    public getResultado(): number {

        return this.resultado;
    }
}
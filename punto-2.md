

## Ejercicio 2 – Calculadora en TypeScript

En el ejercicio de la **calculadora**, utilicé los principales conceptos de la Programación Orientada a Objetos (OOP) a través del uso de **clases**.  
Creé una clase llamada `Calcular`, que representa el comportamiento y los datos necesarios para realizar operaciones matemáticas.

### Conceptos aplicados:

- **Encapsulamiento:**  
  Los atributos (`primerNumero`, `segundoNumero` y `resultado`) fueron declarados como `private`.  
  Esto evita que se modifiquen directamente desde fuera de la clase y obliga a usar los **métodos públicos** (`setPrimerNumero`, `setSegundoNumero`, `getResultado`) para acceder o cambiar los valores.  
  Ejemplo:
  ```typescript
  public setPrimerNumero(primerNumero: number): void {
      this.primerNumero = primerNumero;
  }

### Conceptos no utilizados:

Herencia y Polimorfismo no fueron necesarios, ya que todas las operaciones (suma, resta, etc.) comparten la misma lógica dentro de una sola clase.
Crear clases hijas (por ejemplo, Suma, Resta, etc.) sería redundante para este caso simple.


### Ejercicio 3 – Lista de tareas en JavaScript con prototipos

## Conceptos aplicados:

**Encapsulación:** 
Cada tarea se crea con la función constructora Tarea, que agrupa sus propiedades (título, descripción, estado, fechas, dificultad) dentro de un solo objeto.

- function Tarea(titulo, descripcion, estado, creacion, ultimaEdicion, vencimiento, dificultad) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.estado = estado;
    this.creacion = creacion;
    this.ultimaEdicion = ultimaEdicion;
    this.vencimiento = vencimiento;
    this.dificultad = dificultad;
}

**Uso de prototipos para reutilizar métodos:**
Definí varios métodos en el prototipo (filtrarEstado, mostrarTareas, buscarTarea), de modo que todos los objetos Tarea comparten la misma funcionalidad sin duplicar código.

- Tarea.prototype.filtrarEstado = function (arrayTareas, estado) {
    return arrayTareas.filter(tarea => tarea.estado === estado);
};

**Abstracción:**
- Los métodos permiten trabajar con las tareas sin preocuparse por los detalles internos de cómo están almacenadas o filtradas.
- Por ejemplo, para mostrar solo las tareas pendientes basta con llamar al método filtrarEstado.

### Conceptos no utilizados:

**Herencia y Polimorfismo:**
- No fueron necesarios porque todas las tareas comparten la misma estructura. No había distintos “tipos” de tareas que justificaran crear prototipos derivados.
- Además, el uso de JavaScript con prototipos simples se enfocó más en la reutilización que en la jerarquía.
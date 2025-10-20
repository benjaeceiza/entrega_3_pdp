

## 1. Generalización simbólica  
**¿Cuáles son las reglas escritas del lenguaje?**

JavaScript se rige por un conjunto de reglas que indican cómo deben crearse y comportarse los objetos.  
En lugar de usar clases como otros lenguajes, JavaScript usa **prototipos**.

Esto significa que:
- Cada objeto puede servir de modelo (prototipo) para otros objetos.
- Los objetos pueden heredar propiedades y métodos directamente de otros objetos.
- Se pueden crear nuevos objetos fácilmente con funciones constructoras o con `Object.create()`.

En este modelo, las reglas no son tan estrictas. Los objetos pueden modificarse en cualquier momento, agregando o quitando propiedades o funciones.  
Las “reglas” del paradigma de prototipos son **flexibles y dinámicas**, lo que permite adaptar el código con libertad.

---

## 2. Creencias de los profesionales  
**¿Qué características del lenguaje se consideran mejores que en otros?**

Quienes trabajan con JavaScript suelen destacar varias ventajas de su forma de trabajar con objetos:

- **Flexibilidad:**  
  Los objetos pueden cambiar y adaptarse mientras el programa está funcionando.

- **Simplicidad:**  
  No se necesita una estructura compleja de clases. Se pueden crear y extender objetos de manera directa y rápida.

- **Facilidad para reutilizar código:**  
  Al heredar comportamientos de otros objetos, se pueden construir programas sin repetir tanto código.

- **Velocidad para probar ideas:**  
  Es ideal para experimentar y crear prototipos de forma ágil.


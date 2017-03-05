/**
 * Imort: Define los módulos que vamos a usar para escribir nuestro código.
 * '@angular/core': Esto inidica donde buscar las dependencias.Define y exporta 2 objetos llamados
 *    - Componente
 *    - OnInit: Ayuda a correr codigo cuando se inicializa el componente
 */
import { Component, OnInit } from '@angular/core';


/**
 * Anotaciones o decoradores: Añaden funcionalidad a código usando el compilador sin modificar el codigo base.
 */
@Component({
  /**
   * Se define la etiqueta HTML
   */
  selector: 'app-hello-world',
  /**
   * La vista que se va a usar. Opciones:
   *  - templateUrl
   *  - template: usando `` 
   */
  templateUrl: './hello-world.component.html', 
  /**
   * Los estilos son encapsulados y solo se aplican al componente
   */
  styleUrls: ['./hello-world.component.css'] // Listado de CSS a usar
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

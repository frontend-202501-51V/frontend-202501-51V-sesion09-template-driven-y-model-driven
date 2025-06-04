import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  standalone: false,
  templateUrl: './ng-model.component.html',
  styleUrl: './ng-model.component.scss'
})
export class NgModelComponent {
  nombre = 'visitante'
  edad: number = 0;

  suscrito = false;

  genero = ''

  pais = ''

  comentario = ''

  contacto:any =  {
    nombre: ''
  }

  usuario = ''

  correoConValidacion= ''

  telefono =''

  formatearTelefono() {
    console.log('se formatea el telefono')
    // busca los bloques de 3 numeros
    // los retorna como un arreglo de 3 numeros [a,b,c]
    // valida con filter
    // une ese arreglo con un guion -> [123,456,789] => '123-456-789'
    this.telefono = this.telefono
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d{3})(\d{3})/, (m, a,b,c) => [a,b,c]
      .filter(Boolean)
      .join('-'))
    console.log(this.telefono)
  }
}

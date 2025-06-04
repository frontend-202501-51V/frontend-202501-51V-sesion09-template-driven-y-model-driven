import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rx-forms',
  standalone: false,
  templateUrl: './rx-forms.component.html',
  styleUrl: './rx-forms.component.scss'
})
export class RxFormsComponent {
  // este atributo sera un control de formulario reactivo
  nombre = new FormControl('');

  formulario = new FormGroup({
    nombreCompleto: new FormControl('Carlos Miguel Zarate'),
    email: new FormControl('carlos@gmail.com')
  })

  nombreValidado = new FormControl('', Validators.required)

  emailValidado = new FormControl('', [Validators.required, Validators.email])

  clave = new FormControl('', [Validators.required, Validators.minLength(6)])

  formularioValidacion = new FormGroup({
    nombre:  new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email])
  })
}

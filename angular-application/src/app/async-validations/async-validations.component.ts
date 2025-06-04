import { Component, Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { delay, map, Observable, of, tap } from 'rxjs';

// necesitamos obtener una lista de usuarios existentes
const usuariosExistentes = ['ana', 'miguel', 'alfredo', 'pedro']

function usuarioInicioValidator(): AsyncValidatorFn{
  return (control: AbstractControl): Observable<{usuarioExistente: boolean} | null> => {
    // obtener las llamadas api y transformarlas
    // this.http.get('https://google.com/json').pipe(

    // .pipe me permite concadenar funciones, para transformar datos
    return of(usuariosExistentes.includes(control.value)).pipe(
      delay(3000), // simular un a llamada http
      // @deprecated — Instead of passing separate callback arguments, use an observer argument
      //  Signatures taking separate callback arguments will be removed in v8. Details:
      //  https://rxjs.dev/deprecations/subscribe-arguments
      tap(existe =>  {
        console.log('existe? ', existe)
      }),
      map(existe => (  existe ? ({usuarioExistente: true})   : null    ) )
    )
    // agregamos un tiempo de espera como el settimeout
  }
}

const emails = ['test@gmail.com', 'admin@correo.com']
function emailUnicoValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{emailExistente: boolean} | null> => {
        return of( emails.includes(control.value))
        .pipe(
          // aqui envio los metodos a concadenar
          delay(3000),
          map(existe => (  existe ? ({emailExistente: true}) : null  ))
        )
    }
}

@Component({
  selector: 'app-async-validations',
  standalone: false,
  templateUrl: './async-validations.component.html',
  styleUrl: './async-validations.component.scss'
})
export class AsyncValidationsComponent {
  usuario = new FormControl('', null, usuarioInicioValidator())

  registroForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
    usuario: ['', [Validators.required], usuarioInicioValidator()],
    correo: ['', null, emailUnicoValidator()],
  })
}

  registrar(){
    this.mensaje = 'Registro exitoso'
  }
  mensaje =''
}

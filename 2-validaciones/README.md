# Bloque 2: Validaciones y Gestión de Estado en Formularios Angular

En este bloque aprenderás a validar formularios de manera profesional, mostrando mensajes claros, gestionando el estado de los controles y mejorando la experiencia de usuario.  
El objetivo es que domines validaciones integradas, personalizadas, asíncronas, mensajes de error y feedback visual, **entendiendo cómo implementarlas en Angular y cómo adaptar los conceptos a cualquier framework**.

---

## 1. Validaciones integradas en Angular

Angular ofrece validadores listos para usar en formularios reactivos y template-driven:

```typescript
import { FormControl, Validators } from '@angular/forms';

// Ejemplo: campo requerido y longitud mínima
usuario = new FormControl('', [Validators.required, Validators.minLength(4)]);
email = new FormControl('', [Validators.required, Validators.email]);
```

**En el template:**

```html
<input [formControl]="usuario" placeholder="Usuario">
<div *ngIf="usuario.errors?.required && usuario.touched">El usuario es obligatorio.</div>
<div *ngIf="usuario.errors?.minlength && usuario.touched">Mínimo 4 caracteres.</div>
```

---

## 2. Validaciones personalizadas

Puedes crear funciones para reglas de negocio específicas:

```typescript
import { AbstractControl, ValidationErrors } from '@angular/forms';

// No permitir "admin" como usuario
export function noAdminValidator(control: AbstractControl): ValidationErrors | null {
  return control.value?.toLowerCase() === 'admin' ? { noAdmin: true } : null;
}

// Uso en un FormControl
usuario = new FormControl('', [noAdminValidator]);
```

**Validación de grupo (ejemplo: contraseñas iguales):**

```typescript
import { FormGroup } from '@angular/forms';

export function passwordsIgualesValidator(form: FormGroup): ValidationErrors | null {
  const pass = form.get('password')?.value;
  const confirm = form.get('confirmar')?.value;
  return pass === confirm ? null : { passwordsNoCoinciden: true };
}

// Uso en un FormGroup
formulario = new FormGroup({
  password: new FormControl(''),
  confirmar: new FormControl('')
}, { validators: passwordsIgualesValidator });
```

---

## 3. Validaciones asíncronas

Para consultar APIs (por ejemplo, usuario único):

```typescript
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

// Simulación de API
const usuariosExistentes = ['ana', 'juan'];
export function usuarioUnicoValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return of(usuariosExistentes.includes(control.value)).pipe(
      delay(1000),
      map(existe => existe ? { usuarioExistente: true } : null)
    );
  };
}

// Uso en un FormControl
usuario = new FormControl('', null, usuarioUnicoValidator());
```

**En el template:**

```html
<input [formControl]="usuario" placeholder="Usuario">
<div *ngIf="usuario.pending">Verificando usuario...</div>
<div *ngIf="usuario.errors?.usuarioExistente && usuario.touched">El usuario ya existe</div>
```

---

## 4. Mensajes de error y feedback visual

Centraliza los mensajes y muestra solo cuando el usuario interactúa:

```typescript
// Mensajes reutilizables
export const mensajesError = {
  required: 'Este campo es obligatorio.',
  minlength: ({ requiredLength }) => `Mínimo ${requiredLength} caracteres.`,
  email: 'Formato de email inválido.',
  noAdmin: 'No se permite "admin" como usuario.',
  usuarioExistente: 'El usuario ya existe.',
  passwordsNoCoinciden: 'Las contraseñas no coinciden.'
};
```

**Componente reutilizable para mensajes de error:**

```typescript
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-error-message',
  template: `
    <span *ngIf="control && control.errors && (control.dirty || control.touched)">
      <ng-container *ngFor="let error of errorKeys()">
        <span *ngIf="control.errors[error]">
          {{ getErrorMessage(error, control.errors[error]) }}
        </span>
      </ng-container>
    </span>
  `
})
export class ErrorMessageComponent {
  @Input() control;
  errorKeys() {
    return this.control ? Object.keys(this.control.errors || {}) : [];
  }
  getErrorMessage(error, errorData) {
    const msg = mensajesError[error];
    return typeof msg === 'function' ? msg(errorData) : msg;
  }
}
```

---

## 5. Gestión de estado y feedback visual

Angular expone los siguientes estados en cada control:

- `pristine` / `dirty`
- `touched` / `untouched`
- `valid` / `invalid`
- `pending`
- `disabled`

**Consulta y uso de estados:**

```html
<input [formControl]="usuario"
       [ngClass]="{
         'campo-valido': usuario.valid && (usuario.dirty || usuario.touched),
         'campo-invalido': usuario.invalid && (usuario.dirty || usuario.touched)
       }"
       placeholder="Usuario">
```

**Métodos estándar en TypeScript:**

```typescript
usuario.reset();
usuario.disable();
usuario.enable();
usuario.markAsTouched();
usuario.markAsDirty();
```

---

## Buenas prácticas y errores comunes

- Valida siempre en frontend y backend.
- Muestra mensajes solo cuando el usuario interactúa.
- Centraliza y reutiliza mensajes de error.
- Usa validaciones personalizadas solo cuando las integradas no bastan.
- No bloquees la UX con validaciones innecesarias.
- Mantén la lógica de validación separada de la presentación.

---

## Preguntas conceptuales para repaso

1. ¿Qué diferencia hay entre una validación integrada y una personalizada?
2. ¿Cuándo usarías una validación asíncrona?
3. ¿Cómo centralizar los mensajes de error?
4. ¿Qué estados usarías para feedback visual?
5. ¿Por qué validar en frontend y backend?

---

**Practica y adapta estos conceptos y fragmentos a tus propios proyectos. Solo con práctica y comprensión profunda de cada fragmento tu alumno se volverá realmente experto.**

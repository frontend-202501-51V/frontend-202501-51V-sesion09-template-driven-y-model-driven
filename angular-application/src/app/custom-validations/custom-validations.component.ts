import { Component } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

// retorna un objeto de validacion error o sino null que significa que no hay error
// obtiene como parametro un control
function noAdminValidator(control: AbstractControl): ValidationErrors | null {
  // usar para la comparacion el triple igual ====
  return (control.value as string).toLowerCase() === 'admin' ? {noAdmin: true} : null;
}

@Component({
  selector: 'app-custom-validations',
  standalone: false,
  templateUrl: './custom-validations.component.html',
  styleUrl: './custom-validations.component.scss'
})
export class CustomValidationsComponent {
  usuario = new FormControl('', [noAdminValidator])
}

import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-integrated-validations',
  standalone: false,
  templateUrl: './integrated-validations.component.html',
  styleUrl: './integrated-validations.component.scss'
})
export class IntegratedValidationsComponent {
  usuario = new FormControl('', [Validators.minLength(3), Validators.maxLength(8), Validators.required])

  telefono = new FormControl('')
}

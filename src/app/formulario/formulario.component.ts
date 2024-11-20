import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPseudoCheckboxModule } from '@angular/material/core';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, 
    FormsModule, MatCardModule, MatPseudoCheckboxModule, MatCheckboxModule, ReactiveFormsModule], 
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  formSphere!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<FormularioComponent>, 
    private formBuilder: FormBuilder
  ) {
    this.formSphere = this.formBuilder.group({
      nombre: [''],
      apellido: [''],
      edad: [''],
      eduTipo1: true,
      eduTipo2: false
    });
  }

  save() {
    console.log(this.formSphere.value);
  }


  closeDialog() {
    this.dialogRef.close(); 
  }
}
import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; 
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string =  'Proyecto_sphere Joselin';

  constructor(private dialog: MatDialog) {}

  openForm() {
    this.dialog.open(FormularioComponent);
  }

}

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Micropractica4';
  columnas: string[] = ['Nombre', 'Telefono', 'Email', 'Tipo', 'Habitual', 'Acciones'];

  datos: Contacto[] =
    [new Contacto('Ricardo Martín Manso', 609117799, 'ricardma@inf.uc3m.es', 'Trabajo', "Si"),
    new Contacto('Manolo el del Bombo', 609117799, 'ricardma@inf.uc3m.es', 'Personal', "No"),
    new Contacto('María Lopez', 609117799, 'ricardma@inf.uc3m.es', 'Trabajo', "Si"),
    new Contacto('Clara de Juan Pastor', 609117799, 'ricardma@inf.uc3m.es', 'Personal', "No"),
    ];

  articuloselect: Contacto = new Contacto("", 0, "", "", "");
  selected = 'Personal';
  checked = false;

  @ViewChild(MatTable) tabla1!: MatTable<Contacto>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar() {
    if (this.checked) {
      this.articuloselect.habitual = "Si"
    } else {
      this.articuloselect.habitual = "No"
    }
    this.datos.push(new Contacto(this.articuloselect.nombre, this.articuloselect.telefono, this.articuloselect.email, this.selected, this.articuloselect.habitual));
    this.tabla1.renderRows();
    this.articuloselect = new Contacto("", 609117799, "", "", "");
  }
}

export class Contacto {
  constructor(public nombre: string, public telefono: number, public email: string, public tipo: string, public habitual: string) {
  }
}
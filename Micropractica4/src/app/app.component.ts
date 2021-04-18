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
    [new Contacto('Ricardo Martín Manso', 609117799, 'ricardma@inf.uc3m.es', 'Trabajo', true),
    new Contacto('Manolo el del Bombo', 609117799, 'ricardma@inf.uc3m.es', 'Personal', true),
    new Contacto('María Lopez', 609117799, 'ricardma@inf.uc3m.es', 'Trabajo', true),
    new Contacto('Clara de Juan Pastor', 609117799, 'ricardma@inf.uc3m.es', 'Personal', true),
    ];

  articuloselect: Contacto = new Contacto("", 0, "", "", true);
  selected = 'Personal';

  @ViewChild(MatTable) tabla1!: MatTable<Contacto>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar() {
    this.datos.push(new Contacto(this.articuloselect.nombre, this.articuloselect.telefono, this.articuloselect.email, this.selected, this.articuloselect.habitual));
    this.tabla1.renderRows();
    this.articuloselect = new Contacto("", 609117799, "", "", true);
  }
}

export class Contacto {
  constructor(public nombre: string, public telefono: number, public email: string, public tipo: string, public habitual: boolean) {
  }
}
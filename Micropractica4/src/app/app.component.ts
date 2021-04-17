import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columnas: string[] = ['Nombre', 'Telefono', 'Email', 'Tipo', 'Habitual', 'Acciones'];

  datos: Contacto[] =
    [new Contacto('Ricardo Martín Manso', 609117799, 'ricardma@inf.uc3m.es', 'Trabajo', 'Si'),
    new Contacto('Manolo el del Bombo', 609117799, 'ricardma@inf.uc3m.es', 'Personal', 'Si'),
    new Contacto('María Lopez', 609117799, 'ricardma@inf.uc3m.es', 'Trabajo', 'Si'),
    new Contacto('Clara de Juan Pastor', 609117799, 'ricardma@inf.uc3m.es', 'Personal', 'Si'),
    ];

  articuloselect: Contacto = new Contacto("", 609117799, "", "", "");

  @ViewChild(MatTable) tabla1!: MatTable<Contacto>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar() {
    this.datos.push(new Contacto(this.articuloselect.nombre, this.articuloselect.telefono, this.articuloselect.email, this.articuloselect.tipo, this.articuloselect.habitual));
    this.tabla1.renderRows();
    this.articuloselect = new Contacto("", 609117799, "", "", "");
  }
}

export class Contacto {
  constructor(public nombre: string, public telefono: number, public email: string, public tipo: string, public habitual: string) {
  }
}
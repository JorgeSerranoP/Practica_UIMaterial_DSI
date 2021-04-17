import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTable } from '@angular/material/table';

export class Contacto {
  constructor(public nombre: string, public telefono: number, public email: string, public tipo: string, public habitual: string) {
  }
}

const ELEMENT_DATA: Contacto[] = [
  { nombre: "", telefono: 1, email: "", tipo: 'H', habitual: "" },
  { nombre: "", telefono: 2, email: "", tipo: 'He', habitual: "" },
  { nombre: "", telefono: 1, email: "", tipo: 'Li', habitual: "" },
  { nombre: "", telefono: 1, email: "", tipo: 'Be', habitual: "" },
];

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})

export class ListaContactosComponent {
  displayedColumns: string[] = ['Nombre', 'Telefono', 'Email', 'Tipo', 'Habitual', 'Acciones'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

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

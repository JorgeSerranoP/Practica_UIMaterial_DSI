import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ngOnInit() {
    this.dataSource.filterPredicate = (data: Contacto, filter: string) => {
      return data.nombre.toLowerCase().startsWith(filter);
    };
  }

  title = 'Micropractica4';
  columnas: string[] = ['Nombre', 'Telefono', 'Email', 'Tipo', 'Habitual', 'Acciones'];

  ELEMENT_DATA: Contacto[] =
    [new Contacto('Ricardo Martín Manso', "609117799", 'ricardma@inf.uc3m.es', 'Trabajo', "Si"),
    new Contacto('Manolo el del Bombo', "609117799", 'ricardma@inf.uc3m.es', 'Personal', "No"),
    new Contacto('María Lopez', "609117799", 'ricardma@inf.uc3m.es', 'Trabajo', "Si"),
    new Contacto('Clara de Juan Pastor', "609117799", 'ricardma@inf.uc3m.es', 'Personal', "No"),
    ];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  articuloselect: Contacto = new Contacto("", "", "", "", "");
  selected = 'Personal';
  checked = false;
  public input: string = "";

  @ViewChild(MatTable) tabla1!: MatTable<Contacto>;

  editar(cod: number) {
    this.articuloselect = this.ELEMENT_DATA[cod];
    this.selected = this.ELEMENT_DATA[cod].tipo;
    if (this.ELEMENT_DATA[cod].habitual == "Si") {
      this.checked = true;
    } else {
      this.checked = false;
    }
  }

  borrar(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.ELEMENT_DATA.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar() {
    if (this.checked) {
      this.articuloselect.habitual = "Si"
    } else {
      this.articuloselect.habitual = "No"
    }
    this.ELEMENT_DATA.push(new Contacto(this.articuloselect.nombre, this.articuloselect.telefono, this.articuloselect.email, this.selected, this.articuloselect.habitual));
    this.tabla1.renderRows();
    this.articuloselect = new Contacto("", "", "", "", "");
  }

  filtrarNombre(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}

export class Contacto {
  constructor(public nombre: string, public telefono: string, public email: string, public tipo: string, public habitual: string) {
  }
}
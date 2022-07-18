export class Proyecto {
  id?: number;
  nombre: String;
  descripcion: String;
  link: String;
  anio: number;
  imagenIdentidad: Object;

  constructor(nombre: String, descripcion: String, link: String, anio: number, imagenIdentidad: Object) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.link = link;
    this.anio = anio;
    this.imagenIdentidad = imagenIdentidad;
  }
}



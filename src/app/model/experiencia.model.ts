export class Experiencia {
  id?: number;
  puesto: String;
  empresa: String;
  descripcion: String;
  anio_inicio: number;
  anio_fin: number;
  imagenIdentidad: Object;

  constructor(puesto: String, empresa: String, descripcion: String, anio_inicio: number, anio_fin: number, imagenIdentidad: Object) {
    this.puesto = puesto;
    this.empresa = empresa;
    this.descripcion = descripcion;
    this.anio_inicio = anio_inicio;
    this.anio_fin = anio_fin;
    this.imagenIdentidad = imagenIdentidad;
  }
}



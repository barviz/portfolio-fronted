export class Educacion {
  id?: number;
  titulo: String;
  institucion: String;
  anio_inicio: number;
  anio_fin: number;
  imagenIdentidad: Object;

  constructor(titulo: String, institucion: String, anio_inicio: number, anio_fin: number, imagenIdentidad: Object) {
    this.titulo = titulo;
    this.institucion = institucion;
    this.anio_inicio = anio_inicio;
    this.anio_fin = anio_fin;
    this.imagenIdentidad = imagenIdentidad;
  }
}



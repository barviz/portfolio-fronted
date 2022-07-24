export class Educacion {
  id: number;
  titulo: String;
  institucion: String;
  anio_inicio: number;
  anio_fin: number;
  img_url_logo: String;

  constructor(id: number, titulo: String, institucion: String, anio_inicio: number, anio_fin: number, img_url_logo: String) {
    this.id = id;
    this.titulo = titulo;
    this.institucion = institucion;
    this.anio_inicio = anio_inicio;
    this.anio_fin = anio_fin;
    this.img_url_logo = img_url_logo;
  }
}



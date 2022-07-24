export class Experiencia {
  id: number;
  puesto: String;
  empresa: String;
  descripcion: String;
  anio_inicio: number;
  anio_fin: number;
  img_url_logo: String;

  constructor(id: number, puesto: String, empresa: String, descripcion: String, anio_inicio: number, anio_fin: number, img_url_logo: String) {
    this.id = id;
    this.puesto = puesto;
    this.empresa = empresa;
    this.descripcion = descripcion;
    this.anio_inicio = anio_inicio;
    this.anio_fin = anio_fin;
    this.img_url_logo = img_url_logo;
  }
}



export class Proyecto {
  id: number;
  nombre: String;
  descripcion: String;
  link: String;
  anio: number;
  img_url_logo: String;

  constructor(id: number, nombre: String, descripcion: String, link: String, anio: number, img_url_logo: String) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.link = link;
    this.anio = anio;
    this.img_url_logo = img_url_logo;
  }
}



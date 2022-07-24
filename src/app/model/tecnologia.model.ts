export class Tecnologia {
  id: number;
  nombre: String;
  porcentaje: String;
  img_url_logo: String;

  constructor(id: number, nombre: String, porcentaje: String, img_url_logo: String) {
    this.id = id;
    this.nombre = nombre;
    this.porcentaje = porcentaje;
    this.img_url_logo = img_url_logo;
  }
}



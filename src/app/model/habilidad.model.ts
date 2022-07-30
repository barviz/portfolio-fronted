export class Habilidad {
  id: number;
  nombre: string;
  porcentaje: number;
  img_url_logo: string;

  constructor(id: number, nombre: string, porcentaje: number, img_url_logo: string) {
    this.id = id;
    this.nombre = nombre;
    this.porcentaje = porcentaje;
    this.img_url_logo = img_url_logo;
  }
}



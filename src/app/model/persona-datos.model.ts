export class PersonaDatos {
  id: number;
  nombre: String;
  apellido: String;
  titulo: String;
  ubicacion: String;
  img_url_perfil: String;
  img_url_banner: String;

  constructor(id: number, nombre: String, apellido: String, titulo: String, ubicacion: String, img_url_perfil: String, img_url_banner: String) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.titulo = titulo;
    this.ubicacion = ubicacion;
    this.img_url_perfil = img_url_perfil;
    this.img_url_banner = img_url_banner;
  }
}



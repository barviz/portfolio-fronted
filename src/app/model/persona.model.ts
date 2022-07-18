export class Persona {
  id?: number;
  nombre: String;
  apellido: String;
  titulo: String;
  ubicacion: String;
  descripcion: String;
  imagenIdentidad: Object;
  imagenBanner: Object;

  constructor(nombre: String, apellido: String, titulo: String, ubicacion: String, descripcion: String, imagenIdentidad: Object, imagenBanner: Object) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.titulo = titulo;
    this.ubicacion = ubicacion;
    this.descripcion = descripcion;
    this.imagenIdentidad = imagenIdentidad;
    this.imagenBanner = imagenBanner;
  }
}



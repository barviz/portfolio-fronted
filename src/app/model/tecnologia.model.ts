export class Tecnologia {
  id?: number;
  nombre: String;
  porcentaje: String;
  imagenIdentidad: Object;

  constructor(nombre: String, porcentaje: String, imagenIdentidad: Object) {
    this.nombre = nombre;
    this.porcentaje = porcentaje;
    this.imagenIdentidad = imagenIdentidad;
  }
}



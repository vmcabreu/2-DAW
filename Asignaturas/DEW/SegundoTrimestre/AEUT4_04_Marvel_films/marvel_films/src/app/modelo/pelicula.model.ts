export class Pelicula {
  public id: number;
  public nombre: string;
  public poster: string;

  constructor(id: number, nombre: string, poster: string) {
    this.id = id;
    this.nombre = nombre;
    this.poster = poster;
  }
}

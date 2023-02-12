export class Pelicula {
  public id: number;
  public name: string;
  public poster: string;
  public releaseDate: string;
  public description: string;

  constructor(id: number, nombre: string, poster: string, releaseDate: string = "", description: string = "") {
    this.id = id;
    this.name = nombre;
    this.poster = poster;
    this.releaseDate = releaseDate;
    this.description = descaription;
  }
}

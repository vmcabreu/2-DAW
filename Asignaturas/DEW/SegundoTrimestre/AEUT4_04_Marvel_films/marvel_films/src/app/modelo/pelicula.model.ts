export class Pelicula {
  public id: number;
  public name: string;
  public poster: string;
  public releaseDate: string;
  public sinopsis: string;

  constructor(id: number, nombre: string, poster: string, releaseDate: string = "", sinopsis: string = "") {
    this.id = id;
    this.name = nombre;
    this.poster = poster;
    this.releaseDate = releaseDate;
    this.sinopsis = sinopsis;
  }
}

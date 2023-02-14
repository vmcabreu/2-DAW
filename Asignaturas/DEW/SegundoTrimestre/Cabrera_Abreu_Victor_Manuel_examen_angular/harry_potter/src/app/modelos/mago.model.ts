import { Varita } from "./varita.model";

export class Mago {
  public id: string;
  public name: string;
  public alternate_names: string[];
  public species: string;
  public gender: string;
  public house: string;
  public dateOfBirth: string;
  public yearOfBirth: number;
  public wizard: boolean;
  public ancestry: string;
  public eyeColour: string;
  public hairColour: string;
  public wand: Varita;
  public patronus: string;
  public hogwartsStudent: boolean;
  public hogwartsStaff: boolean;
  public actor: string;
  public alternate_actors: string[];
  public alive: boolean;
  public image: string;

  constructor(
    id: string,
    name: string,
    alternate_names: string[],
    species: string,
    gender: string,
    house: string,
    dateOfBirth: string,
    yearOfBirth: number,
    wizard: boolean,
    ancestry: string,
    eyeColour: string,
    hairColour: string,
    wand: Varita,
    patronus: string,
    hogwartsStudent: boolean,
    hogwartsStaff: boolean,
    actor: string,
    alternate_actors: string[],
    alive: boolean,
    image: string
  ) {

    this.id = id
    this.name = name
    this.alternate_names = alternate_names
    this.species = species
    this.gender = gender
    this.house = house
    this.dateOfBirth = dateOfBirth
    this.yearOfBirth = yearOfBirth
    this.wizard = wizard
    this.ancestry = ancestry
    this.eyeColour = eyeColour
    this.hairColour = hairColour
    this.wand = wand
    this.patronus = patronus
    this.hogwartsStudent = hogwartsStudent
    this.hogwartsStaff = hogwartsStaff
    this.actor = actor
    this.alternate_actors = alternate_actors
    this.alive = alive
    this.image = image

  }
}

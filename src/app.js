export class Team {
  constructor() {
    this.members = new Set();
  }

  add (character) {
    if (!this.members.has(character)) this.members.add(character);
    else throw new Error ("Такой персонаж уже имеется в команде");
  }

  addAll (...objs) {
    objs.forEach(obj => this.members.add(obj));
  }

  toArray () {
    return [this.members];
  }
}

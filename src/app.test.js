import * as ch from './character.js'
import {Team} from './app.js';

let bowerman = new ch.Bowerman('Bowerman');
let swordsman = new ch.Swordsman('Swordsman');
let magician = new ch.Magician('Magician');
let undead = new ch.Undead('Undead');
let zombie = new ch.Zombie('Zombie');
let daemon = new ch.Daemon('Daemon');

let team = new Team();
const set = new Set();

test('Team Add one character ', () => {
  team.add(daemon);
  set.add(daemon);
  expect(team.members).toEqual(set);
});
test('Team Add one character (Dublicate)', () => {
  const t = () => team.add(daemon);
  expect(t).toThrow(new Error ("Такой персонаж уже имеется в команде"));
});
test('Team Add All character ', () => {
  team.addAll(swordsman, magician, undead, undead);
  set.add(swordsman);
  set.add(magician);
  set.add(undead);
  expect(team.members).toEqual(set);
});
test('Set convertation to Array ', () => {
  expect(team.toArray()).toEqual([team.members]);
});

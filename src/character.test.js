import * as ch from './character.js'

let bowerman = new ch.Bowerman('Bowerman');
let swordsman = new ch.Swordsman('Swordsman');
let magician = new ch.Magician('Magician');
let undead = new ch.Undead('Undead');
let zombie = new ch.Zombie('Zombie');
let daemon = new ch.Daemon('Daemon');

test('Character Class Error (No type) ', () => {
  const t = () => new ch.Character('Daemon', 'Test');
  expect(t).toThrow(new Error ("Некорректные аргументы"));
});
test('Character Class Error (Invalid Name)', () => {
  const t = () => new ch.Character('DaemonTestSword', 'Swordsman');
  expect(t).toThrow(new Error ("Некорректные аргументы"));
});

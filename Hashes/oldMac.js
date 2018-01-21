function oldMac( animals ) {
  return animals.map(el => {
    return `
    Old MacDonald had a farm.
    E I E I O
    And on that farm he had a ${el.animal}.
    E I E I O
    With a ${el.sound} ${el.sound} here
    and a ${el.sound} ${el.sound} there.
    Here a ${el.sound}
    there a ${el.sound}
    everywhere a ${el.sound} ${el.sound}.
    Old MacDonald had a farm.
    E I E I O.
    `;
  }).join('\n');
}
let animals = [
  { animal: 'duck', sound: 'quack' },
  { animal: 'dog', sound: 'woof' },
  { animal: 'fish', sound: 'blub' },
];

console.log( oldMac( animals ) );

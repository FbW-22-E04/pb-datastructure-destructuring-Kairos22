// 1. Array Destructuring
const [fruit, vegetable, food] = ['banana', 'cucumber', ['bread', 'cakes', 'pizza']];
console.log(fruit, vegetable, food);
console.log('------------------------1');

// 2.Object Destructuring
 const characters = {
  laura: "hexe",
  saad: "wizard",
  izabela: "snow white",
};
const {laura, saad, izabela} = characters;
console.log(laura, saad, izabela);
console.log('---------------------------2');

// 3. Parameters: Object Destructuring 
const band = {
    name: 'Regina Spektor',
    hit: 'US',
    nationality: 'American-Russian',
    genre: 'Indie-pop',
};
function data ({name, hit, nationality, genre}) {
  console.log(`${name} is a ${nationality} singer/songwriter and pianist. The musician sings ${genre} and their greatest hit is ${hit}.`);

}

data (band);
console.log('------------------------------------3');



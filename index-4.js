function createPet(name, species, energy, happiness) {
    let pet = {
        name: name,
        species: species,
        energy: energy,
        happiness: happiness,
        status() {
            console.log(`Name: ${this.name} Species: ${this.species} Energy: ${this.energy} Happiness: ${this.happiness}`);
        },
        feed() {
            this.energy += 20;
            this.happiness += 20;
            console.log(`You fed ${this.name} their happiness is now ${this.happiness} and energy levels are now ${this.energy}`);
        },
        play() {
            this.energy -= 20;
            this.happiness += 10;
            console.log(`You played with ${this.name} their happiness is now ${this.happiness} and energy levels are now ${this.energy}`);
        },
        rest() {
            this.energy = 100;
            console.log(`${this.name} has rested enough. Their energy levels are restored to 100.`);
        }
    }
    return pet;
};
//Three empty arrays
let dogKennel = [];
let catKennel = [];
let fishTank = [];
//Populate 5 pets for each array
//Dog Kennel
dogKennel.push(createPet('Fluffy', 'Dog', 80, 80));
dogKennel.push(createPet('Roxy', 'Dog', 80, 80));
dogKennel.push(createPet('Daisy', 'Dog', 80, 80));
dogKennel.push(createPet('Spot', 'Dog', 80, 80));
dogKennel.push(createPet('Lassie', 'Dog', 80, 80));
// console.log(dogKennel);
//Cat Kennel
catKennel.push(createPet('Sprinkles', 'Cat', 100, 100));
catKennel.push(createPet('Luxio', 'Cat', 100, 100));
catKennel.push(createPet('LeeLu', 'Cat', 100, 100));
catKennel.push(createPet('Oreo', 'Cat', 100, 100));
catKennel.push(createPet('Dennis', 'Cat', 100, 100));
// console.log(catKennel);
//Fish Tank
fishTank.push(createPet('Phil', 'Fish', 50, 50));
fishTank.push(createPet('Gil', 'Fish', 50, 50));
fishTank.push(createPet('Memo', 'Fish', 50, 50));
fishTank.push(createPet('Dory', 'Fish', 50, 50));
fishTank.push(createPet('Spike', 'Fish', 50, 50));
// console.log(fishTank);

//For loops for each kennel to feed
// let wholeKennel = [dogKennel, catKennel, fishTank];
//The concat() method concatenates (joins) two or more arrays. 
//The concat() method returns a new array, containing the joined arrays.
// The concat() method does not change the existing arrays.-W3Schools
let wholeKennel = dogKennel.concat(catKennel, fishTank);
for(let i = 0; i < wholeKennel.length; i++) {
    wholeKennel[i].feed();
    console.log(`Feeding ${wholeKennel[i].name}, Happiness is now ${wholeKennel[i].happiness}.`);
};
//Loop thru all pets an call status() on each pet
for(let i = 0; i < wholeKennel.length; i++) {
    wholeKennel[i].status();
};
console.log(wholeKennel);




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
        },
    }
    return pet;
};
//Create pets with the pet factory
let pet1 = createPet("Sprinkles", "Cat", 100, 100);
let pet2 = createPet("Dennis", "Cat", 50, 50);
let pet3 = createPet("Daisy", "Dog", 50, 100);
let pet4 = createPet("Nellie-P", "Dog", 100, 100);
let pet5 = createPet("Hurley", "Dog", 60, 80);
let pet6 = createPet("Stars", "Hamster", 50, 50);
let pet7 = createPet("Tweetie", "Bird", 80, 80);
let pet8 = createPet("Fluffy", "Cat", 80, 100);
let pet9 = createPet("Buddy", "Dog", 100, 50);
let pet10 = createPet("Luxio", "Cat", 50, 80);
//Create a empty array to store pets
const kennel = [];
//Add 5 pets to kennel w/push() method
kennel.push(pet1);
kennel.push(pet2);
kennel.push(pet3);
kennel.push(pet4);
kennel.push(pet5);
//Test if the pets were created and pushed in the kennel
// console.log(kennel);
//Add the rest of the pets to the kennel with bracket notation
//I had just the number of index but, changed it to find the current length and use that index
kennel[kennel.length] = pet6;
kennel[kennel.length] = pet7;
kennel[kennel.length] = pet8;
kennel[kennel.length] = pet9;
kennel[kennel.length] = pet10;
//Test if the pets were added w/bracket notation in the kennel
console.table(kennel);

//A for loop to play w/ all pets
// kennel.forEach(pet => pet.play());
for(let i=0;i<kennel.length;i++) {
    kennel[i].play();
};
console.table(kennel);

//A for loop that calls rest on all the objects in the array, kennel
kennel.forEach(pet => pet.rest());
// for(let i=0;i<kennel.length; i++) {
//     kennel[i].rest();
// };
console.table(kennel);

       
//A function to manage the pets energy 
//Playing a bunch to get energy levels below 0
kennel.forEach(pet => pet.play());
kennel.forEach(pet => pet.play());
kennel.forEach(pet => pet.play());
kennel.forEach(pet => pet.play());
kennel.forEach(pet => pet.play());
kennel.forEach(pet => pet.play());
// function energyManager() {
    for(let i=0;i<kennel.length;i++){
        if (kennel[i].energy < 0) {
            kennel[i].energy = 0;
        } else if (kennel[i].energy > 100) {
            kennel[i].energy = 100;
        }
     }
 //}
//All energy levels should change from -20 to 0
 console.table(kennel);
 //Rest all pets to get energy back from 0
 kennel.forEach(pet => pet.rest());
 //Feeding to get energy levels over 100
 kennel.forEach(pet => pet.feed());
 kennel.forEach(pet => pet.feed());
 //Energy manager
 for(let i=0;i<kennel.length;i++){
    if (kennel[i].energy < 0) {
        kennel[i].energy = 0;
    } else if (kennel[i].energy > 100) {
        kennel[i].energy = 100;
    }
 }
 //All energy levels should be 100
 console.table(kennel);


function createPet(nameChoice, speciesChoice,) {
    let pet = {
        name: nameChoice,
        species: speciesChoice,
        happiness: 50,
        energy: 100,
        play() {
            this.energy -= 20;
            this.happiness += 10;
            console.log(`You played with ${this.name} their happiness is now ${this.happiness} and energy levels are now ${this.energy}`);
        },
        feed() {
            this.energy += 20;
            this.happiness += 20;
            console.log(`You fed ${this.name} their happiness is now ${this.happiness} and energy levels are now ${this.energy}`);
        },
        status() {
            console.log(`Name: ${this.name} Species: ${this.species} Happiness: ${this.happiness} Energy: ${this.energy}`);
        },
        rest() {
            this.energy = 100;
            console.log(`${this.name} has rested their energy levels has been restored to ${this.energy}`);
        }
    }
    console.log("\nCreated a pet...");
    pet.status();
    return pet;
};
//Pet 1
let pet1 = createPet("Nellie-P", "Dog");
pet1.play();
pet1.feed();
pet1.status();

//Pet 2
let pet2 = createPet("Daisy", "Dog");
pet2.play();
pet2.feed();
pet2.status();

//Pet 3
let pet3 = createPet("Sprinkles", "cat");
pet3.play();
pet3.feed();
pet3.status();

//Pet 4
let pet4 = createPet("Stars", "hamster");
pet4.play();
pet4.feed();
pet4.status();

//Pet 5
let pet5 = createPet("Dennis", "cat");
pet5.play();
pet5.feed();
pet5.status();

//Testing the rest method
console.log("\nTesting the rest function:")
pet1.status();
pet1.play();
pet1.play();
pet1.status();
pet1.rest();
pet1.status();


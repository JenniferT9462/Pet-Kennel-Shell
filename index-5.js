function createPet(name, species) {
    let pet = {
        name: name,
        species: species,
        energy: Math.floor(Math.random() * 101),//Random number 0 to 50
        happiness: 100, //Math.floor(Math.random() * 101),//Random number 0 to 100
        status() {
            console.log(`Name: ${this.name} Species: ${this.species} Energy: ${this.energy} Happiness: ${this.happiness}`);
        },
        feed() {
            this.energy += 20;
            this.happiness += 20;
            console.log(`You fed ${this.name} their happiness is now ${this.happiness} and energy levels are now ${this.energy}`);
        },
        play() { //Update play function to decrease energy by 15 and happiness increase by 10
            this.energy -= 15;
            this.happiness += 10;
            console.log(`You played with ${this.name} their happiness is now ${this.happiness} and energy levels are now ${this.energy}`);
        },
        dogsPlay() {
            this.energy -= 30;
            this.happiness += 15;
            console.log(`You played with ${this.name} their happiness is now ${this.happiness} and energy levels are now ${this.energy}`);  
        },
        bored() {
            this.happiness -= 15;
            console.log(`${this.name} is bored. Their happiness levels are ${this.happiness}.`);
        },
        rest() {
            this.energy = 100;
            console.log(`${this.name} has rested enough. Their energy levels are restored to 100.`);
        }
    }
    return pet;
};
let kennel = [];
kennel.push(createPet('Sammy', 'Dog'));
kennel.push(createPet('Lily', 'Dog'));
kennel.push(createPet('Carl', 'Fish'));
kennel.push(createPet('LeeLu', 'Cat'));
kennel.push(createPet('Oreo', 'Cat'));
kennel.push(createPet('Hurley', 'Dog'));
kennel.push(createPet('Stars', 'Hamster'));
kennel.push(createPet('Luxio', 'Cat'));
// console.log(kennel);
//Play w/pets...for loop...play w/even number pets 3x and odd numbers once
for(let i = 0; i < kennel.length; i++) {
    if(i%2 === 0) {
        kennel[i].play();
        kennel[i].play();
        kennel[i].play();
    }else{
        kennel[i].play();
    }
};
//Log status before feeding
kennel.forEach(pet => pet.status());
//Feed only pets that have 30 and below of energy
//I want to feed until their energy is at 30 or above
//Function to feed pets until their energy is at least 30
function feedPets(kennel) {
    //Loop through each pet in the kennel array
    for (let i=0;i<kennel.length;i++)  {
        // Continue feeding the hungry pet until energy is 30 or above w/a while statement
        while (kennel[i].energy < 30) {
            console.log(`Feeding ${kennel[i].name}. Current energy: ${kennel[i].energy}`);
            kennel[i].feed(); // Feed pet w/feed method
        }//Log that the pet is now well-fed...This will be logged if they start with a energy level above 30
        console.log(`${kennel[i].name} is now well-fed with energy: ${kennel[i].energy}`);
    };
}
//Call feed pets
feedPets(kennel);
//Log status after feeding
kennel.forEach(pet => pet.status());
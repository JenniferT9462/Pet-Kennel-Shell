//Pet Object
const pet = {
    name: "Hurley",
    species: "Dog",
    happiness: 50,
    // this.happiness is put before the console.log so it will add to the count
    play: function() {
        //We get the object(pet) w/'this'...'+= 10' adds 10 to happiness count.
        this.happiness += 10;
        console.log(`${this.name}, loves their pets! Happiness is now ${this.happiness}.`);
    },
    //Add 20 to the happiness count.
    feed: function() {
        this.happiness += 20;
        console.log(`You fed ${this.name}. Happiness is now ${this.happiness}.`);
    },
    // Print out the current status of the pet. 
    status: function() {
        console.log(`Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}.`);
    },
    // Used newName to set it to whatever the user puts in for arguments.
    rename: function(newName) {
        this.name = newName;
        console.log(`Your pet's new name is ${this.name}.`);

    }
};
// Here we can test each method first status(); to see current info
pet.status();
//Add 10 to happiness
pet.play();
//Updated happiness
pet.status();
// Add 20 to happiness
pet.feed();
//Updated happiness
pet.status();
//Rename pet to 'fluffy'
pet.rename("Fluffy");
//Updated name
pet.status();
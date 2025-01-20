class Animal {
    static remainingAnimals = 0; 

    #name; 
    #species; 
    #energy; 

    constructor(name, species, energy) {
        this.#name = name;
        this.#species = species;
        this.#energy = energy;
        Animal.remainingAnimals++;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get species() {
        return this.#species;
    }

    set species(value) {
        this.#species = value;
    }

    get energy() {
        return this.#energy;
    }

    set energy(value) {
        if (value <= 0 && this.#energy > 0) {
            console.log(`${this.#name} is out of energy!`);
            this.#energy = 0;
            Animal.remainingAnimals--;
        } else {
            this.#energy = value;
        }
    }

    attack(target) {
        if (this.energy <= 0) {
            console.log(`${this.name} is too tired to attack.`);
            return;
        }
        console.log(`${this.name} attacks ${target.name}!`);
        this.energy -= 10;
        target.energy -= 10;
    }

    eat() {
        this.energy += 10;
        console.log(`${this.name} eats and gains energy! Energy: ${this.energy}`);
    }
}

class Bird extends Animal {
    #canFly; 

    constructor(name, species, canFly = true) {
        super(name, species, 100); 
        this.#canFly = canFly;
    }

    
    get canFly() {
        return this.#canFly;
    }

    set canFly(value) {
        this.#canFly = value;
    }

    // Overridden Methods
    attack(target) {
        if (this.energy <= 0) {
            console.log(`${this.name} is too tired to attack.`);
            return;
        }
        console.log(`${this.name} swoops in to attack ${target.name}!`);
        this.energy -= 20;
        target.energy -= 20;
    }
}

class Mammal extends Animal {
    #furColor; 

    constructor(name, species, furColor) {
        super(name, species, 200);
        this.#furColor = furColor;
    }

    
    get furColor() {
        return this.#furColor;
    }

    set furColor(value) {
        this.#furColor = value;
    }

    // Overridden Methods
    attack(target) {
        if (this.energy <= 0) {
            console.log(`${this.name} is too tired to attack.`);
            return;
        }
        console.log(`${this.name} lunges to attack ${target.name}!`);
        this.energy -= 50;
        target.energy -= 50;
    }

    eat() {
        this.energy += 20;
        console.log(`${this.name} eats and gains energy! Energy: ${this.energy}`);
    }
}

class Reptile extends Animal {
    #coldBlooded; 

    constructor(name, species, coldBlooded = true) {
        super(name, species, 100); 
        this.#coldBlooded = coldBlooded;
    }

    get coldBlooded() {
        return this.#coldBlooded;
    }

    set coldBlooded(value) {
        this.#coldBlooded = value;
    }

    attack(target) {
        if (this.energy <= 0) {
            console.log(`${this.name} is too tired to attack.`);
            return;
        }
        console.log(`${this.name} strikes to attack ${target.name}!`);
        this.energy -= 30;
        target.energy -= 30;
    }

    eat() {
        this.energy += 15;
        console.log(`${this.name} eats and gains energy! Energy: ${this.energy}`);
    }
}

// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();

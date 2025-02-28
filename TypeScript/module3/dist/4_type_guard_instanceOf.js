"use strict";
{
    // Type guards using instanceof
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("Making Sound");
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBerk() {
            console.log("The dog is Berking");
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMew() {
            console.log("The dog is Mewing");
        }
    }
    const dog = new Dog("German Shephard", "dog");
    const cat = new Cat("Persian cat", "cat");
    const getAnimal1 = (animal) => {
        if (animal instanceof Dog)
            animal.makeBerk();
        else if (animal instanceof Cat)
            animal.makeMew();
        else
            animal.makeSound();
    };
    getAnimal1(dog);
    getAnimal1(cat);
    // Using is function
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal2 = (animal) => {
        if (isDog(animal))
            animal.makeBerk();
        else if (isCat(animal))
            animal.makeMew();
        else
            animal.makeSound();
    };
    console.log("From isFuncton :");
    getAnimal2(dog);
    getAnimal2(cat);
}

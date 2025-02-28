{
// Type guards using instanceof

class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string){
        this.name = name;
        this.species = species;
    }

    makeSound(){
        console.log("Making Sound")
    }
}

class Dog extends Animal{
    constructor(name: string, species: string){
        super(name,species)
    }

    makeBerk(){
        console.log("The dog is Berking")
    }
}

class Cat extends Animal{
    constructor(name: string, species: string){
        super(name,species)
    }

    makeMew(){
        console.log("The dog is Mewing")
    }
}

const dog = new Dog("German Shephard", "dog");
const cat = new Cat("Persian cat","cat");


const getAnimal1 = (animal: Animal) =>{
    if(animal instanceof Dog)
        animal.makeBerk();
    else if(animal instanceof Cat)
        animal.makeMew();
    else 
        animal.makeSound();
}

getAnimal1(dog)
getAnimal1(cat)


// Using is function
const isDog = (animal: Animal): animal is Dog =>{
    return animal instanceof Dog
}
const isCat = (animal: Animal): animal is Cat =>{
    return animal instanceof Cat
}

const getAnimal2 = (animal: Animal) =>{
        if(isDog(animal))
            animal.makeBerk();
        else if(isCat(animal))
            animal.makeMew();
        else 
            animal.makeSound();
}

console.log("From isFuncton :")
getAnimal2(dog)
getAnimal2(cat)

}


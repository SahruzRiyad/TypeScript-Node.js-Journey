{
// Object Oriented Programming -> class

class Animanl {
    // public name: string;
    // public species: string;
    // public sound: string;

    constructor(public name: string, public species: string , public sound: string){
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }

    makeSound(){
        console.log(`This ${this.name} sounds: ${this.sound}`)
    }
}

const dog = new Animanl("German Shephard", "dog", "Ghew Ghew");
const cat = new Animanl("Persian cat","cat","mew mew");

dog.makeSound()
cat.makeSound()

}
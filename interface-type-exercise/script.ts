// creating interface
// interface Pet {
//     type: string,
//     name: string,
//     age: number,
//     weight: number,
//     height?: number,
//     microChipped: boolean,
//     spayedOrNeutered: boolean,
//     breed: string
// }

// interface Dog extends Pet {
//     sporty: boolean,
//     bark: () => void
// }

// interface Cat extends Pet {
//     purr: () => void
// }

// creating type
type Dog = {
    type: string,
    name: string,
    age: number,
    weight: number,
    height?: number,
    microChipped: boolean,
    spayedOrNeutered: boolean,
    breed: string,
    sporty: boolean,
    bark: () => void
}

type Cat = {
    type: string,
    name: string,
    age: number,
    weight: number,
    height?: number,
    microChipped: boolean,
    spayedOrNeutered: boolean,
    breed: string,
    purr: () => void
}

let dog1: Dog = {
    type: 'dog',
    name: 'Rambo',
    age: 10,
    weight: 50,
    height: 40,
    microChipped: false,
    spayedOrNeutered: false,
    breed: 'badass',
    sporty: true,
    bark: () => console.log('graaaah')
}
let dog2: Dog = {
    type: 'dog',
    name: 'Rocky',
    age: 1,
    weight: 10,
    height: 5,
    microChipped: true,
    spayedOrNeutered: false,
    breed: 'boxer',
    sporty: true,
    bark: () => console.log('badampampsh')
}

let cat1: Cat = {
    type: 'cat',
    name: 'Disaster',
    age: 1,
    weight: 150,
    height: 100,
    microChipped: false,
    spayedOrNeutered: false,
    breed: 'tiger',
    purr: () => console.log('graaah')
}
let cat2: Cat = {
    type: 'cat',
    name: 'Hurricane',
    age: 54,
    weight: 60,
    height: 20,
    microChipped: true,
    spayedOrNeutered: true,
    breed: 'fluffy',
    purr: () => console.log('miau')
}

let petArray: Array<Dog|Cat> = [];

function adopt(animal): void {
    let res: string = `We have adopted a ${animal.type} called ${animal.name} who is ${animal.age} years old. ${animal.name} is vaccinated${animal.sporty ? ' and sporty':''}.`
    console.log(res);
}

petArray.push(dog1, dog2, cat1, cat2);

petArray.forEach(animal => {
    adopt(animal)
});
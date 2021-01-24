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
var dog1 = {
    type: 'dog',
    name: 'Rambo',
    age: 10,
    weight: 50,
    height: 40,
    microChipped: false,
    spayedOrNeutered: false,
    breed: 'badass',
    sporty: true,
    bark: function () { return console.log('graaaah'); }
};
var dog2 = {
    type: 'dog',
    name: 'Rocky',
    age: 1,
    weight: 10,
    height: 5,
    microChipped: true,
    spayedOrNeutered: false,
    breed: 'boxer',
    sporty: true,
    bark: function () { return console.log('badampampsh'); }
};
var cat1 = {
    type: 'cat',
    name: 'Disaster',
    age: 1,
    weight: 150,
    height: 100,
    microChipped: false,
    spayedOrNeutered: false,
    breed: 'tiger',
    purr: function () { return console.log('graaah'); }
};
var cat2 = {
    type: 'cat',
    name: 'Hurricane',
    age: 54,
    weight: 60,
    height: 20,
    microChipped: true,
    spayedOrNeutered: true,
    breed: 'fluffy',
    purr: function () { return console.log('miau'); }
};
var petArray = [];
function adopt(animal) {
    var res = "We have adopted a " + animal.type + " called " + animal.name + " who is " + animal.age + " years old. " + animal.name + " is vaccinated" + (animal.sporty ? ' and sporty' : '') + ".";
    console.log(res);
}
petArray.push(dog1, dog2, cat1, cat2);
petArray.forEach(function (animal) {
    adopt(animal);
});

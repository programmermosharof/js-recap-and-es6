const king = {
    name: 'Mufasa',
    title: 'King of the Pride Lands',
    family: ['Simba', 'Nala', 'Scar'],
    kingdom: 'Pride Lands'
};
const key = Object.keys(king);
console.log(key); // ['name', 'title', 'family', 'kingdom']

const value = Object.values(king);
console.log(value); // ['Mufasa', 'King of the Pride Lands', ['Simba', 'Nala', 'Scar'], 'Pride Lands']

const entries = Object.entries(king);
console.log(entries); // [['name', 'Mufasa'], ['title', 'King of the Pride Lands'], ['family', ['Simba', 'Nala', 'Scar']], ['kingdom', 'Pride Lands']]




// ======== delete, seal, freeze ==========
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
};
delete car.year;
car.color = 'Red';
Object.seal(car);
car.model = 'Corolla';
console.log(car); // { make: 'Toyota', model: 'Camry' }
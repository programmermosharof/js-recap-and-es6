const product = {
    name: 'Laptop',
    price: 999,
    features: {
        ram: '8GB',
        storage: '256GB SSD'
    }
}

const price = product.price;
const ram = product.features.ram;
// Using destructuring
// const { price, features: { ram } } = product;
console.log(price); // 999
console.log(ram); // 8GB

const {name, features,rams ='ramValue'}={name: 'Smartphone', price: 499, rams:'50gb', features: {ram: '4GB', storage: '128GB SSD'}};
console.log(rams); 

const [a, b] = [1, 2, 3, 4, 5];
// const [first, second] = arry;
// console.log(first);
console.log(a, b,);

const student ={
    id: 123,
    gpa: 3.5,
    address: "123 Main Street"}

const {id, gpa, address} = student;
console.log('Your ID:',id, 'Your GPA:', gpa, );

const colors = ['Red', 'Green', 'Blue', 'Yellow'];
const [firstColor, secondColor ] = colors;
console.log('First Color:', firstColor , 'Second Color:', secondColor);
const [, , , thirdColor] = colors;
console.log('Third Color:', thirdColor);

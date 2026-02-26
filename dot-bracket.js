// Accessing object data: nested object, dot vs bracket and optional chaining


const user = {
    name: 'John',
    age: 30,
    1: 'one',
}
// Accessing properties using dot notation
console.log(user.name); 
console.log(user.age);  
console.log(user[1]);   
// Accessing properties using bracket notation
console.log(user['name']); 
console.log(user['age']);  
console.log(user['1']);    





// optional chaining
const user2 = {
    name: 'Alice',
    address: {                          
        street: '123 Main St',
        city: 'New York',
        zipCode: '10001'
    }
}
// Accessing nested properties using optional chaining
console.log(user2.address?.street);
console.log(user2.address.country);



// 1. Ecommerce Object 
const ecommerce = {
    product: {
        name: 'Gaming Mouse',
        price: 1500,
        
        seller: {
            shopName: 'Tech BD',
            location: 'Multiplan Center'
        }
    }
};


const shop = ecommerce.product.seller.shopName;
console.log('Shop Name:', shop); D


const p = 'price'; 

const productPrice = ecommerce.product[p]; 
console.log('Product Price:', productPrice); 



const discountAmount = ecommerce.product?.discount?.amount;

console.log('Discount:', discountAmount); 



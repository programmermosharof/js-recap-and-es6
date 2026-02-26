function calculatePrice(price, tex=0, deliveryCharge=50){
 let total = price + tex + deliveryCharge;
 return total;
}

let totalBill = calculatePrice(40)
console.log(totalBill);

function add(num=0 , number = 7){
    const total = num + number;
    return total;
}
let total = add(40)
console.log(total);

function fullName(first , last = 'Hosen'){
    const name = first + " " +last;
    console.log(name);
}
fullName("Mosharof" );

function arr(name = ['pleas Give the your Name'],){
    let nam = name;
    console.log(nam);
}
arr()

function newUser(name , gust = 'Gust'){
    let all = name+ gust;
    console.log(all);
}

newUser('Welcome ')
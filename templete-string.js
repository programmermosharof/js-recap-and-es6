function getCardHTML(name , description , price){
    const div = `
    <div class ="card">
    <h2> ${name} </h2>
    <p>${description}</p>
    <p>${price}</p>
    </div>
    
    `;
    console.log(div);
}

getCardHTML('Readme pro', 'Eta very Expensive PHone', 5000)


const modern = `Ami Mosharof.
Ami Madrasa Student.
Ami Frontend shikch`;
console.log(modern);









function exam(productName ='Samsung Phone', price = 2500,quantity = 2){
    const all = `The product name is ${productName}. Total price is ${price * quantity}.`;
    console.log(all);
}
exam()
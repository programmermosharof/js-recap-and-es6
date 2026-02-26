const odd =(a= 20 , b = 5) => a - b;
console.log(odd(40, 32));

const even = (a, b) => a + b ;
console.log(even(100, 37));

const biog = (a, b) => a *b;
console.log(biog(20, 3));

const fullName = function(frist , last){
    return frist + last;
}
console.log(fullName(50, 50));


const checkLogics = (a, b, c,) => (a + b )*c;
console.log(checkLogics(20, 20, 2));

const  checkLogic = (a, b, c) => {
    const sum = a + b ;
    const result = sum - c;
    return result;
}
console.log(checkLogic(10, 20, 5));
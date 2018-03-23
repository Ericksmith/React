// const square = function (x){
//     return x * x;
// };


// const squareArrow = (x)=> x * x;

// console.log(squareArrow(8));


// const getFistName = (fullName) => fullName.split(' ')[0];

// console.log(getFistName('John Brown'));


//arguement objects - no longer bound with arrow functions

// const add =  (a, b) => {
//     return a + b;
// }

// console.log(add(55, 1));


//this keyword - no longer bound
// const user = {
//     name: 'Jim',
//     cities: ['Los Angeles', 'Culver City', 'New York'],
//     printPlacesLived(){
//         console.log(this.name);
//         console.log(this.cities);
//         return this.cities.map((city) => this.name + ' has lived in ' + city );
//     }
// }

// console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2,3, 4],
    multiplyBy: 100,
    multiply(){
        return this.numbers.map((num)=> this.multiplyBy * num);
    }
}

console.log(multiplier.multiply());

// const person = {

//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// }

// const {name = 'Anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}`);

// const {city, temp: temperature} = person.location;
// console.log(`It's ${temperature} in ${city}.`);

// const book = {
//     title: 'Pillars of earth',
//     author: 'Ken Blah',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
//  array destructuring
// 

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}`);

const item = ['coffee', '$2', '$2.50', '3.50']
const [drink, small, medium, large] = item;
console.log(`A medium ${drink} costs ${medium}`);
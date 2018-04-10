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

const book = {
    title: 'Pillars of earth',
    author: 'Ken Blah',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);
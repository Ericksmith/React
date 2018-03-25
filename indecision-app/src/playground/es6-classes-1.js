
class Person {
    constructor(name="Anonymous", age=0){
        this.name = name;
        this.age = age;
    }
    getDetails (){
        return `${this.name} is ${this.age} year(s) old`
    }
    getGreeting(){
        return `Hi. I am ${this.name}`
    }
}

const me = new Person('Jim Bo', 28);
console.log(me);

console.log(me.getGreeting()); 
console.log(me.getDetails()); 

const other = new Person();
console.log(other);
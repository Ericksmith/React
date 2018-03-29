
class Person {
    constructor(name="Anonymous", age=0){
        this.name = name;
        this.age = age;
    }
    getDescription (){
        return `${this.name} is ${this.age} year(s) old.`
    }
    getGreeting(){
        return `Hi. I am ${this.name}`
    }
}

class Student extends Person {
    constructor(name="Anonymous", age=0, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name="Anonymous", age=0, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getDescription(){
        let description = super.getDescription();
        if(this.homeLocation){
            description += ` I'm visiting from ${this.homeLocation}`
        }
        return description;
    }
}

const me = new Traveler('Jim Bo', 28, 'Computer Science');
// console.log(me.hasMajor());

console.log(me.getGreeting()); 
console.log(me.getDescription()); 

const other = new Traveler();
console.log(other.getDescription());
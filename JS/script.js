// Creating object from variable definition
const person = {
  lastName: "Uchiha",
  givenName: "Sasuke",
  emailAddress: "sasuke@email.com",
  address: {
    city: null,
    province: null
  },
  setAddress: function(city, province) {
    this.address.city = city;
    this.address.province = province;
  },
  introduce: function() {
    return `Hello my name is ${this.givenName} ${this.lastName} from ${this.address.city}, ${this.address.province}.`
  }
};

// Accessing object properties via dot notation
console.log("Person Object: ", person);
console.log(`Person's First Name: ${person.givenName}`);

// Accessing object properties via dot bracket notation
let query = "emailAddress";
console.log(`Person's ${query}:`, person[query]);

// Accessing object methods
person.setAddress("Malolos", "Bulacan");
console.log(person.introduce());

// Create object from a Class definition
import Person from "./Person.js";
const classPerson = new 
  Person("Uzumaki", "Naruto", "naruto@email.com");

console.log("Class Person Object: ", classPerson);
console.log(`Class Person's First Name: ${classPerson.givenName}`);
console.log(`Class Person's ${query}:`, classPerson[query]);

classPerson.setAddress("Guiguinto", "Bulacan");
console.log(classPerson.introduce());
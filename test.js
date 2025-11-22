// const showValue = (value) => console.log('value', value);

// const createValue = () => {
//     const value = 35;
//     showValue(value);
// }

// createValue();

// const listSections = (onlyActive) => {
//     const filter = {};
//     filter.isActive = onlyActive;

//     console.log('Active', filter);
// }

// const listSectionhandler = () => {
//     const all = true;
//     const onlyActive = all ? false : true

//     listSections(onlyActive);
// }

// listSectionhandler();

// console.log('testing')

// const listSections = ({ onlyActive = true } = {}) => {
//   const filter = {};
//   filter.isActive = onlyActive;
//   console.log(filter);
// };

// const listSectionHandler = () => {
//     const all = true;
//     const onlyAcitve = all ? false : true;
//     listSections({onlyAcitve});
// }

// listSectionHandler();

// function constructor => which is now deprecated
// function User(name, email, contact) {
//   this.name = name;
//   this.email = email;
//   this.contact = contact;
// }
// const user1 = new User("pintu", "bhatt", 6540686806);
// console.log("user1", user1.name);

// instead we can use classes => OOPS

// const functions = {
//   getUser: function () {
//     console.log('user');
//   }
// }

// const newUser = {
//   Email: 'hjef'
// }

// // adding Functions as prototype into newUser
// newUser.__proto__ = functions
// // Now, we have a custom prototype in newUser. That can be accessible as newUser.getUser()
// newUser.getUser();

// class User {
//     constructor({name, email, contact, skill} = {}) {
//         console.log('new user has been created')
//         this.name = name
//         this.email = email
//         this.contact = contact
//         this.skill = skill

//         console.log(this.anme)
//     }
// }

// const newUser = new User({
//     name: 'Aayush',
//     email: 'aayushkandhwe3689@gmail.com',
//     contact: 6206570861,
//     skill: 'React, React Native, Node, Express, MongoDb'
// })

// console.log(newUser)

// class Product {
//   constructor(products) {
//     const { jeans, shirts, pant } = products;
//     this.jeans = jeans;
//     this.shirts = shirts;
//     this.pant = pant;
//   }
// }

// class NumOfProducts extends Product {
//     printProduct(){
//         console.log(this.jeans)
//     }
// }

// const product = new NumOfProducts({
//     jeans: 12,
//     shirts: 10,
//     pant: 20
// });

// console.log(product.printProduct())

// console.log(Error)

// class User {
//     constructor() {
//     }
// }

// class Vehicle {
//   constructor(name, plateNumber) {
//     this.name = name;
//     this.platNumber = plateNumber;
//   }

//   info() {
//     return `${this.name} has ${this.platNumber} plate number`;
//   }
// }

// class Car extends Vehicle {
//     constructor(name, platNumber, mialage) {
//         super(name, platNumber);
//         this.mialage = mialage
//     }

//     info(){
//         return `${super.info()} and ${this.mialage} mialage`
//     }
// }

// const audi = new Car('audi', 10, 20);
// console.log(audi.info());

// const err = new Error('no error');
// console.log(err)

import { ApiError } from "#utils/ApiError.js";
throw new ApiError(1000, 'mera error');


// function myFunc(){
//     function newFunc(){
//         console.log('hello world');
//     }
//     return newFunc;
// }
// const ans = myFunc();
// ans();

// let numbers = [3,4,6,2];

// // function square(num){
// //     return num * num;
// // }

// // let squares = numbers.map(num => num * num);

// console.log(squares);

// const users = [
//     {name: "Ruhab",age:22},
//     {name: "Amjad",age:23},
//     {name: "Zain",age:24},
//     {name: "Habibah",age:12},
//     {name: "Azra",age:42}
// ]

// let userName = users.map(user => {
//     return user.name;
// })

// userName.forEach(uname => console.log(uname));

// let numbers = [1,2,3,4,5,6,7,8];

// // let isEven = function(nums){
// //     return nums % 2 === 0;
// // }

// let evens = numbers.filter(function(nums){
//     return nums % 2 === 0;
// });

// console.log(evens);

// const numbers = [1,2,3,4,5,6];

// let totalPrice = numbers.reduce(function(carry, nums){
//     return carry + nums;
// },0)

// console.log(totalPrice);

// let userCart = [
//     {id:1,name:"hands free",price:2300},
//     {id:1,name:"hands free new",price:2600},
//     {id:1,name:"hands free old",price:2300},
//     {id:1,name:"hands free rare",price:2900},
//     {id:1,name:"hands free min",price:2000}
// ]

// let totalPrice = userCart.reduce(function(carry, cart){
//     return carry + cart.price;
// }, 0);

// console.log(totalPrice);

// let numbers = [4,2,8,1,88,66];
// numbers.sort(function(a,b){
//     return a-b;
// });
// console.log(numbers);

// let products = [
//     {id:1,name:"phone 1",price:700},
//     {id:2,name:"phone 2",price:500},
//     {id:3,name:"phone 3",price:900},
//     {id:4,name:"phone 4",price:2000},
//     {id:5,name:"phone 5",price:200},
// ]

// let hightoLow = products.slice(0).sort(function(a,b){
//     return b.price-a.price;
// })

// console.log(hightoLow);

// let names = ["ruhab","ali","amna","aaqib","hamad"];

// let findNames = names.find(function(name){
//     return name.length >= 4;
// });

// console.log(findNames);

// let userCart = [
//     {id:1,name:"phone 1",price:220},
//     {id:1,name:"phone 1",price:210},
//     {id:1,name:"phone 1",price:200},
//     {id:1,name:"phone 1",price:230}
// ];

// let highPrice = userCart.find(function(cart){
//     return cart.price >= 220;
// })

// console.log(highPrice)

// let numbers = [2,4,6,8];

// let allEvens = numbers.every(function(num){
//     return num % 2 === 0;
// });
// console.log(allEvens);

// let userCart = [
//     {id:1,name:"mobile",price:2050},
//     {id:1,name:"lcd",price:2890},
//     {id:1,name:"tc",price:3990}
// ]

// let ans = userCart.every((cart) => (cart.price < 3000));

// console.log(ans);

// const numbers = [3,5,6,9];

// const even = numbers.some(nums => nums % 2 === 0);

// console.log(even);

// const myArray = new Array(20).fill(-1);

// console.log(myArray)

// let myArray = ["item1", "item2","item3"];

// myArray.splice(2,0,"Item 4 Ins");

// console.log(myArray);

// // let nums = new Set([1,2,4,3,4,3,6,5,6]);
// let numbers = [9,1,2,3,2,1,4,5,5,6,7,6];

// let nums = new Set(numbers);

// console.log(nums);

// let person = new Map();
// person.set("id", 1);
// person.set("age", 22);
// person.set("name", "Ruhab");
// person.set(1, "One");

// console.log(person.get(1));
// for(let [key, value] of person){
//     console.log(key, value);
// }

// const obj = {
//     "name": "Ruhab",
//     age: 22
// }
// // const obj2 = {...obj};
// const obj2 = Object.assign({}, obj);

// obj2.gender = "male";

// console.log(obj)
// console.log(obj2)

// let personInfo = {
//     firstName: "Ruhab",
//     age: 22
// }
// function info() {
//     console.log(`Person name is ${this.firstName} and Person age is ${this.age}`);
// }

// let person1 = {
//     firstName: "Ruhab",
//     age: 22,
//     about: info
// }
// let person2 = {
//     firstName: "Amjad",
//     age: 44,
//     about: info
// }
// let person3 = {
//     firstName: "Azra",
//     age: 40,
//     about: info
// }

// // personInfo.info();
// person3.about();

// function about(gender, hobby){
//     console.log(`${this.firstName} ${this.age} ${gender} ${hobby}`);
// }

// let user1 = {
//     firstName: "Ruhab",
//     age: 22,
// }

// let user2 = {
//     firstName: "Amjad",
//     age: 22,
// }

// // about.call(user2, "male", "football");
// // about.apply(user2, ["male", "football"]);
// let aboutInfo = about.bind(user2, "male", "football");
// // console.log(aboutInfo());

// let user = {
//     name: "Ruhab",
//     age: 22,
//     about: function(){
//         console.log(this.name, this.age);
//     }
// }

// let user1 = user.about.bind(user);
// user1();

// let user = {
//     firstName: "Ruhab",
//     lastName: "Amjad",
//     age: 22,
//     gender: "Male",
//     about: function(){
//         console.log(`${this.firstName} is ${this.age} years old.`)
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }

// Function to create objects

// const userMethods = {
//     about: function(){
//         console.log(`${this.firstName} is ${this.age} years old.`);
//     },
//     is18: function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         console.log("toon toon na na la la na na");
//     }
// }

// function createUser(firstName, lastName, age, gender){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.age = age;
//     user.gender = gender;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     user.sing = userMethods.sing;
//     return user;
// }

// let user1 = createUser("Ruhab", "Amjad", 23, "Male");
// let user2 = createUser("Ume", "Amjad", 18, "Female");

// user1.about();
// console.log(user1.is18());
// user1.sing();

// user2.about();
// console.log(user2.is18());
// user2.sing();

// const userMethods = {
//         about: function(){
//             console.log(`${this.firstName} is ${this.age} years old.`);
//         },
//         is18: function(){
//             return this.age >= 18;
//         },
//         sing: function(){
//             console.log("thoon ta na na na na na");
//         }
//     }
    
//     function createUser(firstName, lastName, age, gender){
//         const user = Object.create(userMethods);
//         user.firstName = firstName;
//         user.lastName = lastName;
//         user.age = age;
//         user.gender = gender;
//         return user;
//     }
    
//     let user1 = createUser("Ruhab", "Amjad", 23, "Male");
//     let user2 = createUser("Ume", "Amjad", 18, "Female");
    
//     user1.about();
//     console.log(user1.is18());
//     user1.sing();
    
//     user2.about();
//     console.log(user2.is18());
//     user2.sing();    

// const userMethods = {
    //     about: function(){
    //         console.log(`${this.firstName} is ${this.age} years old.`);
    //     },
    //     is18: function(){
    //         return this.age >= 18;
    //     },
    //     sing: function(){
    //         console.log("toon toon na na la la na na");
    //     }
    // }
    
    // function createUser(firstName, lastName, age, gender){
    //     const user = Object.create(createUser.prototype);
    //     user.firstName = firstName;
    //     user.lastName = lastName;
    //     user.age = age;
    //     user.gender = gender;
    //     return user;
    // }
    
    // createUser.prototype.about = function(){
    //     console.log(`${this.firstName} is ${this.age} years old.`);
    // }
    
    // createUser.prototype.is18 = function(){
    //     return this.age >= 18;
    // }
    
    // createUser.prototype.sing = function(){
    //             console.log("toon toon na na la la na na");
    // }
    
    // let user1 = createUser("Ruhab", "Amjad", 23, "Male");
    // console.log(user1);
    // user1.about();
    // console.log(user1.is18());
    // user1.sing();
    
    // function createUser(name, age){
    //     this.name = name;
    //     this.age = age;
    // }

    // createUser.prototype.about = function(){
    //     console.log(this.name, this.age);
    // }

    // let user1 = new createUser("Ruhab", 22);
    // user1.about();

    //  function createUser(firstName, lastName, age, gender){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.age = age;
    //     this.gender = gender;
    //     return this;
    // }
    
    // createUser.prototype.about = function(){
    //     console.log(`${this.firstName} is ${this.age} years old.`);
    // }
    
    // createUser.prototype.is18 = function(){
    //     return this.age >= 18;
    // }
    
    // createUser.prototype.sing = function(){
    //             console.log("toon toon na na la la na na");
    // }
    
    // let user1 = new createUser("Ruhab", "Amjad", 23, "Male");
    // console.log(user1);
    // user1.about();
    // console.log(user1.is18());
    // user1.sing();

    // class CreateUser {
    //     constructor(name, age, hobby){
    //         this.name = name;
    //         this.age = age;
    //         this.hobby = hobby;
    //     }
        
    //     about(){
    //         console.log(`${this.name} is ${this.age} years old.`);
    //     }
    //     is18(){
    //         return this.age >= 18;
    //     }
    //     sing(){
    //         console.log("la la la la la la");
    //     }
    // }

    // const user1 = new CreateUser("Ruhab", 22, "football");

    // user1.about();
    // console.log(user1.is18());
    // user1.sing();

    // class Animal{
    //     constructor(name, age){
    //         // console.log("Constructor runs.");
    //         this.name = name;
    //         this.age = age;
    //     }
    //     eating(){
    //         console.log(`${this.name} is eating.`);
    //     }
    //     isCute(){
    //         return this.age <=3;
    //     }
    // }

    // // const cat = new Animal("kitty", 3);
    // // cat.eating();
    // // console.log(cat.isCute());

    // class Dog extends Animal{

    // }

    // const tommy = new Dog("tommy", 4);
    // tommy.eating();
    // console.log(tommy.isCute());

    // class Animal{
    //     constructor(name, age){
    //         // console.log("Constructor runs.");
    //         this.name = name;
    //         this.age = age;
    //     }
    //     eating(){
    //         console.log(`${this.name} is eating.`);
    //     }
    //     isCute(){
    //         return this.age <=3;
    //     }
    // }

    // class Dog extends Animal{
    //     constructor(name,age,speed){
    //         super(name,age);
    //         this.speed = speed;
    //     }
    //     eating(){
    //         console.log(`Modified Eat : ${this.name} is eating.`);
    //     }
    //     running(){
    //         console.log(`${this.name} is running at ${this.speed} kmph.`);
    //     }
    // }

    // const tommy = new Dog("tommy", 4, 35);
    // tommy.eating();
    // console.log(tommy.isCute());
    // tommy.running();

//     class Person {
//         constructor(firstName, lastName){
//             this.firstName = firstName;
//             this.lastName = lastName;
//         }
//         static personInfo(){
//             console.log("This is just a person info");
//         }
//         get fullName(){
//             return `${this.firstName} ${this.lastName}`;
//         }
//         set setFullName(fullName){
//             const [firstName, lastName] = fullName.split(" ");
//             this.firstName = firstName;
//             this.lastName = lastName;
//         }
//     }

// const person1 = new Person("Ruhab", "Amjad");
// console.log(person1.fullName);
// person1.setFullName = "Amjad Ghulamrasool";
// console.log(person1.fullName);
// Person.personInfo();

// function sum(num1, num2, onSuccess, onFailure){
//     if(typeof num1 === "number" && typeof num2 === "number"){
//         onSuccess(num1, num2);
//     }else{
//         onFailure();
//     }
// }

// function addNums(num1, num2){
//     console.log(num1 + num2);
// }

// const onFail = () => {
//     console.log("Incorrect Data Type");
//     console.log("Only numbers allwed!");
// }

// sum(23,56, addNums, onFail);

// let bucket = ["salt", "tomato", "rice", "onion", "vegetable"];

// const friedRice = new Promise((resolve, reject) => {
//         if(bucket.includes("rice") && bucket.includes("onion") && bucket.includes("salt")){
//             resolve("Baked Rice");
//         }else{
//             reject("Could'nt fry the Rice.");
//         }
// });

// friedRice.then((rice) => {
//     console.log(rice);
// }
// // (error) => console.log(error)
// ).catch(error => console.log(error));

// for(let i = 0; i <100; i++){
//     console.log(i);
// }

// function ricePromise(){
// let bucket = ["salt", "tomato", "rice", "onion", "vegetable"];

// return new Promise((resolve, reject) => {
//         if(bucket.includes("rice") && bucket.includes("onion") && bucket.includes("salt")){
//             resolve("Baked Rice");
//         }else{
//             reject("Could'nt fry the Rice.");
//         }
// });
// }

// ricePromise()
// .then((rice) => console.log(rice))
// .catch(error => console.log(error))

function myPromise(){
    return new Promise((resolve, reject) => {
        resolve("foo");
    })
}

myPromise().then(value => {
    console.log(value);
    value += " bar";
    return value;
}).then(data => {
    console.log(data);
    data += " baaz";
    return data;
}).then(value => {
    console.log(value);
})
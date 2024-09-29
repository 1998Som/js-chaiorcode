// const symB = Symbol("Key1");

// const obj = {
//   name: "SOmesankar Santra",
//   [symB]: "MyKey1",
//   "age my": 26,
//   group: "abc",
//   email: "somesankarsantra199818@gmail.com",
// };
// console.log(obj.name);
// console.log(obj["age my"]);
// console.log(typeof obj[symB]);

// obj.name = "Som";
// console.log(obj["name"]);
// // Object.freeze(obj);
// obj.name = "Some";
// // console.log(obj);

// obj.greet = function () {
//   console.log("This is JS");
// };
// obj.greetTwo = function () {
//     console.log(`This is JS userNmae ${this.name}`);
//   };
// console.log(obj.greetTwo());
// console.log(obj);


const obj = {};

obj.email = "Somesankarsantra199818@gmail.com";
obj.ahe = 28;
obj.isLoggesIn = true;
// console.log(obj.email);


const RegularUser = {
    nmae: "Somesankar Santra",
    fullName: {
        userFullname :{
        first: "Somesankar",
        last: "Santra"
    }
    
    }
}
// console.log(RegularUser.fullName.userFullname.last);

const bj2 = {1: "q", 2:"w", 3:"e"};
const bj3 = {3: "q", 4:"w", 5:"e"};

const bj4 ={...bj2,...bj3}
// console.log(bj4);
// console.log(Object.keys(obj));
const val = Object.values(obj);
for(let i = 0; i <= val.length; i++){
    console.log(val[i]);
    
}
// console.log(Object.entries(obj));

const {4:hoc} = bj3;
console.log(hoc);
// console.log("Hello World");




const id = {
    name: "Som",
    age: 18
}

console.log(id.age);




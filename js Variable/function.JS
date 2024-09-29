// function Print(){
//     console.log("Hello World");

// }
// // Print();

// function star() {
//     for (let i = 1; i <= 5; i++) {
//         let row = '';
//         for (let j = 1; j <= i; j++) {
//           row += '*';
//         }
//         console.log(row);
//       }
// }
// // star();

// function ADD(num1, num2) {
//     // console.log(typeof num1);
//     return num1+num2;
// }

// console.log(typeof ADD(2,3));

// // console.log(add2);

// // console.log(typeof 3);

// function login(userName) {
//     return `${userName} just Logged In`;
// }
// // console.log(login("som"));

// function InputItemPrice (...price) {
//     price = 0;
//     for(let i = 0; i <= InputItemPrice.length; i++){
//         price+=InputItemPrice[i];
//     }
//     return price;
// }

// console.log(InputItemPrice(200,300,600));


const User = {
    name: "Somesankar Santra",
    price: 199

}

function Print (username) {
        console.log(`The user name is ${username.name} & the price is ${username.price}`);
        
}

Print(User);
const MyArr = [1, 2, 3];
const sum = 0;

const myTotal = MyArr.reduce((acc, currval) => acc + currval, sum);

// console.log(myTotal);


const MyCart = [
    {
        name : "JavaScript",
        price : 2999
    },
    {
        name : "Java",
        price : 2978
    },
    {
        name : "C++",
        price : 3999
    }
]

const total = 0;

const MyTotal = MyCart.reduce( (acc, item) => item.price + acc ,0 )

console.log(MyTotal);

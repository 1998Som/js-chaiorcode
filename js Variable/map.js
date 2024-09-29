const myArr = [1,2,3,4,5,6,7,8,9,10];

const NewArr = myArr.map( nums => nums+10 );
// console.log(NewArr);

// const Newarr = myArr.filter( num => num % 2 == 0 );

// console.log(Newarr);

const map = myArr.map( (nums) => nums*10 ).map( (nums) => nums+2 ).filter( (nums) => nums % 3 == 0 );

console.log(map);



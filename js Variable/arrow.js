const obj = {
    username: "Som",
    price: 999,
    website: function(){
        console.log(`${this.username}, welcome`);
        
    }
}
// obj.website();


// chai();
const chai1 = () => {
    let som = "som";
    console.log(`${this.som},wellcome`);
    
}
chai1();

const addTwo = (num1, num2) => {

    return num1 + num2;

}

console.log (addTwo(3,4));

const ADDTWO = (num1,num2) => num1+num2;

// console.log(ADDTWO(3,4));
(function chai() {
    let som = "Som";
    console.log(`${som},wellcome`);
    
})();

(function coffee (){
    console.log(`shyam Wellcome`);
    
})();

((name) => {
    console.log(`${name} wellcome`);
    
})("hitesh");

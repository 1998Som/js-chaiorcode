const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
//   console.log(i);
}

const greeting = "Hello world!";

for (const i in greeting) {
//   if (i == " ") {
    // console.log(i);
    // break;
//   }
  console.log(greeting[i]);
}

const map = new Map();
map.set(1, "India");
map.set("USA", "United States Of America");
map.set("FR", "France");
// console.log(map);
for (const [key, value] of map) {
  // console.log(key, ":-", value);
}

const myObj = {
  js: "JavaScript",
  cpp: "C++",
  py: "Python",
};

for (const key in myObj) {
    // console.log(`${key} := ${myObj[key]}`);
    
}

const MyArr = ["js", "Java", "py"];
// function PrintMe(item){
//     console.log(item);
    
// }

// MyArr.forEach(PrintMe);

MyArr.forEach((item,index,are) => {
    // console.log(item,index,are);
    
})

const MyCoding = [
    {
        language: "javaScript",
        fileNmae: "js"
    },
    {
        language: "java",
        fileNmae: "java"
    }, 
    {
        language: "cpp",
        fileNmae: "C++"
    }
    
]

MyCoding.forEach(item => {
//    console.log(item.language);
   
})
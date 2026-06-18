//Map
const numbers = [1,2,3,4];

const doubled = numbers.map(num => num * 2);

console.log(doubled);

//Filter
const ages = [15,18,21,25];

const adults = ages.filter(age => age >= 18);

console.log(adults);

//Find
const users = [
    {id:1,name:"Vinay"},
    {id:2,name:"Rahul"}
];

const user = users.find(user => user.id === 1);

console.log(user);

//ForEach
const fruits = ["Apple","Banana","Orange"];

fruits.forEach(fruit => {
    console.log(fruit);
});

//Reduce
const nums = [10,20,30];

const total = nums.reduce(
    (sum,num) => sum + num,
    0
);

console.log(total);
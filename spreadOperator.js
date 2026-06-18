// arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log("Copied Array:", arr2);
const arr3 = [4, 5];
const merged = [...arr1, ...arr3];
console.log("Merged Array:", merged);
// objects
const employee = {
    name: "Vinay",
    department: "IT"
};

const newEmployee = {
    ...employee,
    salary: 50000
};

console.log(newEmployee);
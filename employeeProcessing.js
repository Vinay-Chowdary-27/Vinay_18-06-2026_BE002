const employees = [
    {
        id: 1,
        name: "Vinay",
        salary: 50000
    },
    {
        id: 2,
        name: "Girish",
        salary: 45000
    },
    {
        id: 3,
        name: "Praveen",
        salary: 60000
    }
];

console.log("Employee List");

employees.forEach(emp => {
    console.log(emp);
});

const employee = employees.find(emp => emp.id === 1);

console.log("\nEmployee Found");
console.log(employee);

const totalSalary = employees.reduce(
    (sum, emp) => sum + emp.salary,
    0
);

console.log("\nTotal Salary:", totalSalary);
class Employee {
    constructor(id, name, salary, gender, startDate, hours) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
        this.hours = hours;
    }

    // Arrow function to display employee details
    getDetails = () => 
        `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate}, Hours: ${this.hours}`;
}

// Employee Objects
const emp1 = new Employee(1, "Neha", 50000, "Female", "2024-03-20", 8);
const emp2 = new Employee(2, "Amit", 40000, "Male", "2024-03-18", 4);
const emp3 = new Employee(3, "Riya", 45000, "Female", "2024-03-15", 0);

// Storing Employees in an Array
const employees = [emp1, emp2, emp3];

// UC11 (Object Operations using Arrow Functions)

// a. Calculate Total Salary and Total Hours Worked
const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
const totalHours = employees.reduce((sum, emp) => sum + emp.hours, 0);

// b. Show Full Working Days (Using forEach)
console.log("\nFull Working Days:");
employees.forEach(emp => {
    if (emp.hours === 8) console.log(emp.getDetails());
});

// c. Show Part Working Days (Using Map)
const partTimeDays = employees
    .filter(emp => emp.hours === 4)
    .map(emp => emp.name);
console.log("\nPart Working Days:", partTimeDays);

// d. Show No Working Days (Using Map)
const noWorkDays = employees
    .filter(emp => emp.hours === 0)
    .map(emp => emp.name);
console.log("\nNo Working Days:", noWorkDays);

// UC12 (Extending Employee Payroll Data)

// Printing Employee Details
console.log("\nEmployee Payroll Data:");
employees.forEach(emp => console.log(emp.getDetails()));

// Total Salary & Hours Worked
console.log(`\nTotal Salary Paid = $${totalSalary}`);
console.log(`Total Hours Worked = ${totalHours}`);

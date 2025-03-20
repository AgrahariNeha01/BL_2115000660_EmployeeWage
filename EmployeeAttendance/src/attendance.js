let empHours = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
let wagePerHour = 20;
let dailyWage = 0;

switch (empHours) {
    case 0:
        console.log("Employee is Absent");
        dailyWage = 0;
        break;
    case 1:
        console.log("Employee is Part-Time (4 Hours)");
        dailyWage = 4 * wagePerHour;
        break;
    case 2:
        console.log("Employee is Full-Time (8 Hours)");
        dailyWage = 8 * wagePerHour;
        break;
}

console.log("Daily Employee Wage: $" + dailyWage);

function getWorkHours() {
    let empHours = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
    switch (empHours) {
        case 0: return 0;  // Absent
        case 1: return 4;  // Part-Time
        case 2: return 8;  // Full-Time
    }
}

let wagePerHour = 20;
let totalWage = 0;
let days = 20; // Fixed count loop for 20 days

for (let i = 1; i <= days; i++) {
    let hoursWorked = getWorkHours();
    let dailyWage = hoursWorked * wagePerHour;
    totalWage += dailyWage;
    console.log(`Day ${i}: Work Hours = ${hoursWorked}, Wage = $${dailyWage}`);
}

console.log("Total Wage for 20 Days: $" + totalWage);

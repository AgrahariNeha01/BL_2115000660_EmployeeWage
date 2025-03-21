const FULL_TIME = 8;
const PART_TIME = 4;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS = 20;

// Function to check employee status
function getWorkHours() {
    let empCheck = Math.floor(Math.random() * 3); // 0, 1, 2
    switch (empCheck) {
        case 0: return { hours: 0, status: "Absent" };       // Absent
        case 1: return { hours: PART_TIME, status: "Part-Time" }; // Part Time
        case 2: return { hours: FULL_TIME, status: "Full-Time" }; // Full Time
    }
}

let totalDays = 0, totalWage = 0;

while (totalDays < WORKING_DAYS) {
    let { hours, status } = getWorkHours();  // Getting work hours + status
    let dailyWage = hours * WAGE_PER_HOUR;
    
    totalWage += dailyWage;
    totalDays++;
    
    console.log(`Day ${totalDays}: Status = ${status}, Work Hours = ${hours}, Wage = $${dailyWage}`);
}

console.log(`Total Wage for ${WORKING_DAYS} days = $${totalWage}`);

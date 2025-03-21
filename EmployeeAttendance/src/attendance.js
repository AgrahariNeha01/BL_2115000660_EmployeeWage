const FULL_TIME = 8;
const PART_TIME = 4;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

// Function to get work hours
function getWorkHours() {
    let empCheck = Math.floor(Math.random() * 3); // 0, 1, 2
    switch (empCheck) {
        case 0: return { hours: 0, status: "Absent" };       // Absent
        case 1: return { hours: PART_TIME, status: "Part-Time" }; // Part Time
        case 2: return { hours: FULL_TIME, status: "Full-Time" }; // Full Time
    }
}

let totalDays = 0, totalHours = 0, totalWage = 0;

while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
    let { hours, status } = getWorkHours();  // Getting work hours + status
    
    if (totalHours + hours > MAX_WORKING_HOURS) break; // Stop if adding hours exceeds 160
    
    let dailyWage = hours * WAGE_PER_HOUR;
    
    totalWage += dailyWage;
    totalDays++;
    totalHours += hours;

    console.log(`Day ${totalDays}: Status = ${status}, Work Hours = ${hours}, Wage = $${dailyWage}`);
}

console.log(`\nTotal Days Worked = ${totalDays}`);
console.log(`Total Hours Worked = ${totalHours}`);
console.log(`Total Wage = $${totalWage}`);

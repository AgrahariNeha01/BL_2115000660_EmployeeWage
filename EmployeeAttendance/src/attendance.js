const FULL_TIME = 8;
const PART_TIME = 4;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

// Function to get work hours and status
function getWorkHours() {
    let empCheck = Math.floor(Math.random() * 3); // 0, 1, 2
    switch (empCheck) {
        case 0: return { hours: 0, status: "Absent" };       // Absent
        case 1: return { hours: PART_TIME, status: "Part-Time" }; // Part Time
        case 2: return { hours: FULL_TIME, status: "Full-Time" }; // Full Time
    }
}

let totalDays = 0, totalHours = 0;
let dayWageMap = new Map(); // Map to store Day-wise Wage

while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
    let { hours, status } = getWorkHours();  
    
    if (totalHours + hours > MAX_WORKING_HOURS) break;
    
    let dailyWage = hours * WAGE_PER_HOUR;
    
    totalDays++;
    totalHours += hours;
    
    dayWageMap.set(totalDays, { hours, wage: dailyWage, status }); // Store in Map
}

// **UC8A: Compute Total Wage using Map**
let totalWage = Array.from(dayWageMap.values()).reduce((s, d) => s + d.wage, 0);

// **Printing Results**
console.log("\nUC8: Day-wise Wage using Map:");
dayWageMap.forEach((d, day) => {
    console.log(`Day ${day}: Status = ${d.status}, Work Hours = ${d.hours}, Wage = $${d.wage}`);
});

console.log(`\nTotal Wage = $${totalWage}`);

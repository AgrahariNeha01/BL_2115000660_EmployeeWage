const FULL_TIME = 8;
const PART_TIME = 4;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

// Function to get work hours and status
const getWorkHours = () => {
    let empCheck = Math.floor(Math.random() * 3); // 0, 1, 2
    return empCheck === 0 ? { hours: 0, status: "Absent" } :
           empCheck === 1 ? { hours: PART_TIME, status: "Part-Time" } :
                            { hours: FULL_TIME, status: "Full-Time" };
}

let totalDays = 0, totalHours = 0;
let empDailyData = []; // Array to store objects

while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
    let { hours, status } = getWorkHours();  
    
    if (totalHours + hours > MAX_WORKING_HOURS) break;
    
    let dailyWage = hours * WAGE_PER_HOUR;
    
    totalDays++;
    totalHours += hours;

    // **Store data in an object**
    empDailyData.push({ day: totalDays, hours, wage: dailyWage, status });
}

// **UC 11a: Calculate total wage & total hours using reduce**
const totalWage = empDailyData.reduce((sum, d) => sum + d.wage, 0);
const totalWorkHours = empDailyData.reduce((sum, d) => sum + d.hours, 0);

// **UC 11b: Show full working days using forEach**
console.log("\nFull Working Days:");
empDailyData.forEach(d => { if (d.hours === FULL_TIME) console.log(`Day ${d.day}`); });

// **UC 11c: Show Part working days using Map by reducing to String Array**
const partTimeDays = empDailyData.filter(d => d.hours === PART_TIME).map(d => `Day ${d.day}`);
console.log("\nPart-Time Days:", partTimeDays.join(", "));

// **UC 11d: Show No working days using Map**
const noWorkDays = empDailyData.filter(d => d.hours === 0).map(d => `Day ${d.day}`);
console.log("\nNo Working Days:", noWorkDays.join(", "));

// **Printing Final Summary**
console.log(`\nTotal Wage = $${totalWage}`);
console.log(`Total Hours Worked = ${totalWorkHours}`);

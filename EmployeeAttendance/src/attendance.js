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

// **Printing the Stored Data**
console.log("\nUC10: Employee Daily Data:");
console.table(empDailyData);

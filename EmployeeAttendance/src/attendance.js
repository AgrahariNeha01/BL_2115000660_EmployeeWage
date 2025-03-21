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
let dayWageMap = new Map();
let dayHourMap = new Map();

while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
    let { hours, status } = getWorkHours();  
    
    if (totalHours + hours > MAX_WORKING_HOURS) break;
    
    let dailyWage = hours * WAGE_PER_HOUR;
    
    totalDays++;
    totalHours += hours;
    
    dayWageMap.set(totalDays, dailyWage);
    dayHourMap.set(totalDays, hours);
}

// **UC9A: Compute Total Wage and Total Hours using Arrow Function**
const totalWage = [...dayWageMap.values()].reduce((s, w) => s + w, 0);
const totalHoursWorked = [...dayHourMap.values()].reduce((s, h) => s + h, 0);

// **UC9B: Categorize Full, Part, and No Working Days**
const fullWorkingDays = [...dayHourMap.entries()].filter(d => d[1] === FULL_TIME).map(d => d[0]);
const partWorkingDays = [...dayHourMap.entries()].filter(d => d[1] === PART_TIME).map(d => d[0]);
const noWorkingDays = [...dayHourMap.entries()].filter(d => d[1] === 0).map(d => d[0]);

// **Printing Results**
console.log(`\nUC9A: Total Wage = $${totalWage}, Total Hours Worked = ${totalHoursWorked}`);

console.log(`\nUC9B: Full Working Days: ${fullWorkingDays}`);
console.log(`Part Working Days: ${partWorkingDays}`);
console.log(`No Working Days: ${noWorkingDays}`);

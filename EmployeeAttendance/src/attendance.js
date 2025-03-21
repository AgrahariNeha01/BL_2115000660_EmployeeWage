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
let dailyWages = [];  
let workDetails = []; // UC7: Store day-wise work details

while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
    let { hours, status } = getWorkHours();  
    
    if (totalHours + hours > MAX_WORKING_HOURS) break;
    
    let dailyWage = hours * WAGE_PER_HOUR;
    
    totalDays++;
    totalHours += hours;
    
    dailyWages.push(dailyWage);  
    workDetails.push({ day: totalDays, hours, wage: dailyWage, status }); // Store details
}

// **UC7A: Calculate total Wage using reduce()**
let totalWage = dailyWages.reduce((s, wage) => s + wage, 0);

// **UC7B: Show the Day along with Daily Wage using map()**
let dayWithWage = workDetails.map(d => `Day ${d.day}: Wage = $${d.wage}`);

// **UC7C: Show Days when Full-time wage of 160 was earned using filter()**
let fullTimeDays = workDetails.filter(d => d.wage === 160).map(d => d.day);

// **UC7D: Find the first occurrence when Full Time Wage was earned using find()**
let firstFullTimeDay = workDetails.find(d => d.wage === 160);

// **UC7E: Check if every element of full-time wage array is truly holding full-time wage**
let allFullTime = workDetails.every(d => d.wage !== 0 ? d.wage === 160 : true);

// **UC7F: Check if there is any Part Time Wage using some()**
let hasPartTime = workDetails.some(d => d.wage === 80);

// **UC7G: Find the number of days the Employee Worked**
let daysWorked = workDetails.filter(d => d.wage > 0).length;

// **Printing Results**
console.log(`\nTotal Wage = $${totalWage}`);
console.log(`\nUC7B: Day-wise Wages: \n${dayWithWage.join("\n")}`);
console.log(`\nUC7C: Full-time Wage Days: ${fullTimeDays}`);
console.log(`\nUC7D: First Full-time Wage Day: ${firstFullTimeDay ? firstFullTimeDay.day : "Not Found"}`);
console.log(`\nUC7E: Is every full-time wage really $160? ${allFullTime}`);
console.log(`\nUC7F: Is there any Part-time Wage? ${hasPartTime}`);
console.log(`\nUC7G: Total Days Employee Worked: ${daysWorked}`);

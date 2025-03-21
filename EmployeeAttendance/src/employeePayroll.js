class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = this.validateName(name);
        this.salary = salary;
    }

    validateName(name) {
        let namePattern = /^[A-Z][a-zA-Z]{2,}$/; // Starts with capital, at least 3 letters
        if (!namePattern.test(name)) {
            throw new Error("Invalid Name: Name must start with a capital letter and have at least 3 characters.");
        }
        return name;
    }
}

try {
    let emp1 = new Employee(1, "Neha", 50000);
    console.log(emp1);
    
    let emp2 = new Employee(2, "abhi", 60000); // Invalid name, will throw error
    console.log(emp2);
} catch (error) {
    console.error(error.message);
}

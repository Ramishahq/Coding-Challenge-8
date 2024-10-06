// Task 1 Create an Employee Class
class Employee {constructor(name,salary,position,department) {
    
    this.name = name;
    this.salary = salary;
    this.position= position;
    this.department= department;
}

getDetails() {
    return `The employee's name is ${this.name}. They work as ${this.position} in the ${this.department} department, and makes $${this.salary} salary.`;
    
      }
    
    }
// Task 2 Create a Department Class
// Task 4 Handle Bonuses for Managers 
// Adding task 4 to task 2 as instructed to add method to the department class.
class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee){
        if (employee instanceof Employee)
        this.employees.push(employee)
    };


getDepartmentSalary() {
    return this.employees.reduce((total,employee)=> total + employee.salary,0);
}

// Method to calculate total salary including bonuses for managers
calculateTotalSalaryWithBonus() {
    return this.employees.reduce((total, employee) => {
        if (employee instanceof Manager) {
            return total + employee.salary + employee.bonus;
        }
        return total + employee.salary;
    }, 0);
}
}
// Task 3  
class Manager extends Employee {

     constructor(name, salary, position, department, bonus) {
    
     super(name, salary, position, department); // Call the parent constructor
    
     this.bonus = bonus;
    
      }
      getDetails() {
        console.log(`${this.name} has $${this.salary} salary and works as ${this.position} in this ${this.department} department and has bonus of $${this.bonus}`);

    }
}
// Task 5- 
//Create departments

const humanResource = new Department("Human Resource");

const marketing = new Department("Marketing");

// Create employees

const habil = new Employee("Habil", 80000, "Analyst", "Human Resource");

const sreela = new Employee("Sreela", 75000, "Designer", "Marketing");

const tazrin = new Manager("Tazrin", 120000, "Specialist", "Human Resource", 20000);

const tasfia = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);



// Add employees to departments

humanResource.addEmployee(habil);

humanResource.addEmployee(tazrin);

marketing.addEmployee(sreela);

marketing.addEmployee(tasfia);



// Calculate total salary for each department

console.log(`Total salary for Human Resource: $${humanResource.getDepartmentSalary()}`);

console.log(`Total salary with bonuses for Human Resource: $${humanResource.calculateTotalSalaryWithBonus()}`);

console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);

console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);

// Outputs
//Total salary for Human Resource: $200000
//Total salary with bonuses for Human Resource: $220000
//Total salary for Marketing: $205000
//Total salary with bonuses for Marketing: $230000

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
class department {
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
}
// Task 3  
class Manager extends Employee {

     constructor(name, salary, position, department, bonus) {
    
     super(name, salary, position, department); // Call the parent constructor
    
     this.bonus = bonus;
    
      }
      getDetails() {
        console.log(`${this.name} has $${this.salary} salary and works as ${this.position} in this ${this.department} department and has bonus of $$(this.bonus)`);

    }
}


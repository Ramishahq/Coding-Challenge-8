// Task 1 Create an Employee Class
class Employee {constructor(name, position, salary) {
    
    this.name = name;
    this.salary = salary;
    this.position= position;
    this.department= department;
}

getEmployeeDetails() {
    return `The employee's name is ${this.name}. They work as ${this.position} in the ${this.department} department, and makes $${this.salary} salary.`;
    
      }
    
    }
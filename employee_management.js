// Task 1 Create an Employee Class
class Employee {constructor(name,salary,position,department) {
    
    this.name = name;
    this.salary = salary;
    this.position= position;
    this.department= department;
}

getEmployeeDetails() {
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

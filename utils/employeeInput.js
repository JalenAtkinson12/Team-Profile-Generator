 const inquirer = require('inquirer');
 const {generateHTML} = require('./generateHTML');

 let mARR = [];
 let eARR = [];
 let iARR = [];

 class Employee{
    constructor(name, email, id, role) {
        this.name =name;
        this.email =email;
        this.id =id;
        this.role =role;
    }

    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }

    getId() {
        return this.id;
    }

    getRole() {
        return this.role;
    }
}

 class Manager extends Employee{
     constructor(name, email, id, role, officeNumb) {
         super(name, email, id, role);
         this.officeNumb = officeNumb;
     }
     getRole(){
         return this.role;
     }
     getOfficeNumber(){
         return this.officeNumb;
     }
     getName() {
         return this.name
     }
 }

 class Engineer extends Employee{
     constructor(name, email, id, role, github) {
         super(name, email, id, role);
         this.github = github;
     }
     getRole(){
         return this.role;
     }
     getGithub(){
         return this.github;
     }
 }

 class Intern extends Employee{
     constructor(name, email, id, role, school){
         super(name, email, id, role);
         this.school = school;
     }
     getRole(){
         return this.role;
     }
     getSchool(){
         return this.school;
        }
    }
    
    function userInput(){
        return inquirer.prompt([
            {
                type: 'list',
                message: 'Is this the last entry?',
                name: 'lastEntry',
                choices: ["No","Yes"]
            },
        ])
    }
 

 function employeePrompt(){
     return inquirer.prompt([
         {
             type: 'list',
             name: 'role',
             message: 'please select the type of employee.',
             choices: ["Manager","Engineer","Intern"]
         },
         {
             type: 'input',
             name: 'name',
             message: 'Please enter the employees name.',
         },
         {
             type: 'input',
             name: 'email',
             message: 'Please enter the employees email.',
         },
         {
             type: 'input',
             name: 'id',
             message: 'please enter employees id number.',
         },
     ])
 }


function managerPrompt(){
    return inquirer.prompt([
       {
           type: 'input',
           message: 'What is the office Number?',
           name: 'officeNumb',

       },


    ])
}

function engineerPrompt(){
    return inquirer.prompt ([
        {
            type: 'input',
            message: 'Please enter github username',
            name: 'github',
        },
    ])
}

function internPrompt(){
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Please provide the school attended',
            name: 'school',
        },

    ])
}


async function employeeCycle() {
    let ep = await employeePrompt();
    let employee = new Employee(ep.name, ep.email, ep.id, 'Employee')
    if(ep.role=== 'Manager') {
        let managerInput = await managerPrompt();
        let manager = new Manager(ep.name, ep.email, ep.id, ep.role, managerInput.officeNumb);
        mARR.push(manager);
    } else if(ep.role==='Engineer'){
        let engineerInput = await engineerPrompt();
        let engineer = new Engineer(ep.name, ep.email, ep.id, ep.role, engineerInput.github);
        eARR.push(engineer);
    } else if(ep.role==='Intern'){
        let internInput = await internPrompt();
        let intern = new Intern(ep.name, ep.email, ep.id, ep.role, internInput.school);
        iARR.push(intern);
    }
     
    let empChoices = await userInput();
    if(empChoices.lastEntry === 'No'){
        await employeeCycle();
    } else if ((empChoices.lastEntry === 'Yes') && (mARR.length > 0) && (eARR.length > 0)) {
        generateHTML(mARR,eARR,iARR);
    } else {
        console.log("Make a manager or engineer before continuing.");
        await employeeCycle();
    }

}


module.exports = {
    employeeCycle,
    Employee,
    Manager,
    Engineer,
    Intern,
    mARR,
    eARR,
    iARR
}

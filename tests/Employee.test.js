const {Employee, Manager, Engineer, Intern} = require('../utils/employeeInput');



describe("Employee test", () => {
    it('should be getName().',() => {
        const Jay = new Employee('Jay','Jay123@email.com','999','Employee');
        expect(Jay.getName()).toBe('Jay');
    })

    it('should be getEmail().',() => {
        const Jay = new Employee('Jay','Jay123@email.com','999','Employee');
        expect(Jay.getEmail()).toBe('Jay123@email.com');
    })

    it('should be getId().', () => {
        const Jay = new Employee( 'Jay','Jay123@email.com','999','Employee');
        expect(Jay.getId()).toBe('999');
    })

    it('should be getRole().', () => {
        const Jay = new Employee('Jay','Jay123@email.com','999','Employee');
        expect(Jay.getRole()).toBe('Employee');
    })
})

describe("Manager test", ()=> {
    it('should be getRole().', () =>{
        const Jay = new Manager('Jay','Jay123@gmail.com','999','Manager',4);
        expect(Jay.getRole()).toBe('Manager');
    })

    it('should be getOfficeNumber', ()=> {
        const Jay = new Manager('Jay','Jay123@email.com', '999','Manager', 4);
        expect(Jay.getOfficeNumber()).toBe(4);
    })
})

describe("Engineer test", () => {
    it('should be getRole().', () => {
        const Jay = new Engineer ('Jay','Jay123@email.com','999','Engineer','Jay222');
        expect(Jay.getRole()).toBe('Engineer');
    })

    it('should be getGithub().', () => {
        const Jay = new Engineer ('Jay','Jay123@email.com', '999','Engineer', 'Jay222');
        expect(Jay.getGithub()).toBe('Jay222');
    })
})

describe("Intern test", () => {
    it('should be getRole().', () => {
        const Jay = new Intern ('Jay','Jay123@email.com','999','Intern', 'Georgia Tech');
        expect(Jay.getRole()).toBe('Intern');
    })

    it('should be getSchool().', () => {
        const Jay = new Intern ('Jay','Jay123@email.com', '999','Intern', 'Georgia Tech');
        expect(Jay.getSchool()).toBe('Georgia Tech');
    })
})
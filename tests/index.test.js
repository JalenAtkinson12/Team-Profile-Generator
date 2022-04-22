const {generateManagers, generateEngineers, generateInterns} = require('../utils/generateHTML');


describe('Manager Card Test', () =>{
    it('should display info for Manager.', ()=>{
        const man = ({name: 'Jay', email: 'Jay123@email.com', id: '999', role: 'Manager', officeNumb: 4});
        expect(generateManagers(man)).toBe(`<div class ="card" style= "width: 18rem;"><div class="card-header">Manager</div><ul class="list-group list-group flush"><li class="list-group-item">Name: Jay</li><li class="list-group-item">Email: <a href="mailto:Jay123@email.com">Jay123@email.com</a></ali><li class= "list-group-item">Employee ID: 999</li><li class= "list-group-item">Office Number:4</li></ul></div><br />`)
    })
})

describe('Engineer Card Test', () => {
    it('should display info for Engineer.',()=>{
        const eng = ({name:'Jay', email: 'Jay123@email.com', id: '999', role: 'Engineer', github: 'Jay222'});
        expect(generateEngineers(eng)).toEqual(`<div class ="card" style= "width: 18rem;"><div class="card-header">Engineer</div><ul class="list-group list-group flush"><li class="list-group-item">Name: Jay</li><li class="list-group-item">Email: <a href="mailto:Jay123@email.com">Jay123@email.com</a></ali><li class= "list-group-item">Employee ID: 999</li><li class= "list-group-item">Github:<a href="https://github.com/Jay222" target="_blank" rel="noopener noreferrer">Jay Github Account</a></li></ul></div><br />`)
    })
})

describe('Intern Card Test', () => {
    it('should display info for Intern.',()=>{
        const int = ({name:'Jay', email: 'Jay123@email.com', id: '999', role: 'Intern', school: 'Georgia Tech'});
        expect(generateInterns(int)).toEqual(`<div class ="card" style= "width: 18rem;"><div class="card-header">Intern</div><ul class="list-group list-group flush"><li class="list-group-item">Name: Jay</li><li class="list-group-item">Email: <a href="mailto:Jay123@email.com">Jay123@email.com</a></ali><li class= "list-group-item">Employee ID: 999</li><li class= "list-group-item">School: Georgia Tech</li></ul></div><br />`)
    })
})
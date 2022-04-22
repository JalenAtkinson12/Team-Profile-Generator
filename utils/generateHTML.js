function generateManagers(manager) {
    return `<div class ="card" style= "width: 18rem;"><div class="card-header">${manager.role}</div><ul class="list-group list-group flush"><li class="list-group-item">Name: ${manager.name}</li><li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></ali><li class= "list-group-item">Employee ID: ${manager.id}</li><li class= "list-group-item">Office Number:${manager.officeNumb}</li></ul></div><br />`
}
function generateEngineers(engineer) {
    return `<div class ="card" style= "width: 18rem;"><div class="card-header">${engineer.role}</div><ul class="list-group list-group flush"><li class="list-group-item">Name: ${engineer.name}</li><li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></ali><li class= "list-group-item">Employee ID: ${engineer.id}</li><li class= "list-group-item">Github:<a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.name} Github Account</a></li></ul></div><br />`
}
function generateInterns(intern) {
    return `<div class ="card" style= "width: 18rem;"><div class="card-header">${intern.role}</div><ul class="list-group list-group flush"><li class="list-group-item">Name: ${intern.name}</li><li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></ali><li class= "list-group-item">Employee ID: ${intern.id}</li><li class= "list-group-item">School: ${intern.school}</li></ul></div><br />`
}

function generateHTML(managers, engineers, interns) {
    return `<!DOCTYPE html>
             <html lang="en">
             <head>
               <meta charset="UTF-8">
               <meta http-equiv="X-UA-Compatible" content="IE=edge">
               <meta name= "viewport" content="width=device-width, initial-scale=1.0">
               <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
               <link rel="stylesheet" type="text/css" href="./assets/style.css"/>
               <title>Team Cards</title>
             </head>
             <body>
             <header>
                  <h1>Team Profiles</h1>
             </header>
             <div class="container">
                    <div class="row">
                       <div class="col">
                       <h2>Managers</h2>
                       <hr>
                       ${managers.map(generateManagers).join('\n')}
                       </div>
                       <div class= "col">
                       <h2>Engineers</h2>
                       <hr>
                       ${engineers.map(generateEngineers).join('\n')}
                       </div>
                       <div class= "col">
                       <h2>Interns</h2>
                       <hr>
                       ${interns.map(generateInterns).join('\n')} 
                       </div>
                   </div>
                </div>   
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
                </body>
                </html>`;
}

module.exports = {
    generateManagers,
    generateEngineers,
    generateInterns,
    generateHTML

}
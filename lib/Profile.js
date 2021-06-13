const writeFile = require('../utils/generate-site');

indexArray = [];
//card templates
const generateEmployee = templateArray => {
    templateArray.forEach(element => {
        if(element.role === "Intern") {
            var varIcon = '<i class="fas fa-user-graduate"></i>';
            var varData = 'School';
            var elementVar = element.intern
        } else if(element.role === "Manager") {
            var varIcon = '<i class="fas fa-mug-hot"></i>';
            var varData = 'Office Number';
            var elementVar = element.number
        } else {
            var varIcon = '<i class="fas fa-glasses"></i>';
            var varData = 'GitHub';
            var elementVar = element.Github
        }
        
        
        return `
        <div class="card">
        <div class="card w-20"    
            <div class= "card-header text-white bg-primary">
                <h5>${element.name}</h5>
                <div>${varIcon}${element.role}</div>
            </div>
            <div class = "card-body">
                <p class = "card-body" >ID: ${element.id}</p>
                <p class = "card-body" >Email: ${element.email}</p>
                <p class = "card-body" >${varData}: ${elementVar}</p>
            </div>
        </div>`
    });
};

const generateIndex = (templateArray) => {

    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet">
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
        <title>Team Profile Generator</title>
    </head>
    <body> 
    <header class = "row col-12 bg-color-danger text-color-light">My Team</header>    
    ${generateEmployee(templateArray)}
    </body>
    </html>
    `
        
}


module.exports = generateIndex






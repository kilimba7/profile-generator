// export function to generate entire page
  module.exports = teamData => {
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    </head>
    
    <body>
      <main>
      <h1 class="text-center text-white bg-danger ">My Team</h1>
      <section class="container" >
      <div class="card-deck mt-3" style="width: 18rem;">

          <h4 class="card-title bg-primary text-white">${teamData[0]?.name} 
          <br></br>
          ${teamData[0]?.getRole()}</h4>
          
          <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${teamData[0]?.id}</li>
          <li class="list-group-item">Email: <a href= "mailto:${teamData[0]?.email}">${teamData[0]?.email}</a> </li>
          <li class="list-group-item">Office Number: ${teamData[0]?.officeNumber}</li>
          </ul>
        </div>



      <div class="card-deck mt-3" style="width: 18rem;">

      <h4 class="card-title bg-primary text-white">${teamData[1]?.name} 
      <br></br>
      ${teamData[1]?.getRole()}</h4>
      
      <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${teamData[1]?.id}</li>
      <li class="list-group-item">Email: <a href= "mailto:${teamData[1]?.email}">${teamData[1]?.email}</a> </li>
      <li class="list-group-item">Github: <a href= "https://github.com/${teamData[1]?.github}">${teamData[1]?.github}</a></li>
      </ul>
    </div>



    <div class="card-deck mt-3" style="width: 18rem;">

    <h4 class="card-title bg-primary text-white">${teamData[2]?.name} 
    <br></br>
    ${teamData[2]?.getRole()}</h4>
    
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${teamData[2]?.id}</li>
    <li class="list-group-item">Email: <a href= "mailto:${teamData[2]?.email}">${teamData[2]?.email}</a> </li>
    <li class="list-group-item">School: ${teamData[2]?.school}</li>
    </ul>
    </div>

    
      
    
      </main>
    </body>
    </html>
    `;
  };
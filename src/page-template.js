// create the projects section
// const generateTeam = managerArr => {
//     return `
//       <section class="card">
//         <ul class="flex-row justify-space-between">
//         ${managerArr
//           .map({ name, manager, id, email, officeNumber }) => {
//             return `
//             <li class="card>${name}</li>
//             <li class="card><${manager}/li>
//             <li class="card>${id}</li>
//             <li class="card>${email}</li>
//             <li class="card>${officeNumber}</li>
              
//             </ul>
//           `;
//          };




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
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>

      <main class="container my-5">
      <h1>My Team</h1>
        ${teamData.name}
      </main>

    </body>
    </html>
    `;
  };
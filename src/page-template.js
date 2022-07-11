// export function to generate entire page
module.exports = teamData => {

    console.log(teamData[0]);
    console.log(teamData[1]);
    console.log(teamData[2]);

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
    
    <body>

      <main>
        <section class="card">
            <h1 class="text-justify">My Team</h1>
            <ul class="card">
                <li>${teamData[0].name}</li>
                <li>${teamData[0].id}</li>
                <li>${teamData[0].email}</li>
                <li>${teamData[0].officeNumber}</li>
            </ul>

            <ul class="card">
            
                <li>${teamData[1].name}</li>
                <li>${teamData[1].id}</li>
                <li>${teamData[1].email}</li>
                <li>${teamData[1].github}</li>
            
            </ul>

            <ul class="card">

                <li>${teamData[2].name}</li>
                <li>${teamData[2].id}</li>
                <li>${teamData[2].email}</li>
                <li>${teamData[2].school}</li>
            
            </ul> 
        </section>
      </main>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </body>
    </html>
    `;
  };
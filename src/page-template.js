// Creating the page structure where data is going to be displayed
function generatePage(team) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profiles</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
</head>
<body>
    <header>
       <h1 class="text-justify"> My Team </h1>
    </header>
    <main>
        <section class=card>
        <h2>
        ${team.name}
        ${team.name}
        </h2>
        <p> ${team.id}
        </p>

        <p> Email: <a href="${team.email}">${team.email}</a>
            ${team.officeNumber}
        </p>
        </section>


        <section class=card>
        <h2>
        ${team.engineer}
        ${team.nameE}
        </h2>
        <p> Github: <a href="https://github.com/${team.github}">${team.github}</a>
        </p>

        <p> Email: <a href="${team.emailE}">${team.emailE}</a>
        
        </p>
        </section>


        <section class=card>
        <h2>
        ${team.intern}
        ${team.nameI}
        </h2>
        <p> School: ${team.school}
        </p>

        <p> Email: <a href="${team.emailI}">${team.emailI}</a>
        
        </p>
        </section>
    </main>
        
</body>
</html>
    `;
}


module.exports = generatePage;
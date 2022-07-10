// Creating the page structure where data is going to be displayed
function generatePage(data) {
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
       <h1 bg-red> My Team </h1>
    </header>
    <main>
        <section>
        <h2>${data.employee}</h2>
        <p> Github: <a href="https://github.com/${data.github}">${data.github}</a>
        </p>

        <p> Email: <a href="${data.email}">${data.email}</a>
        </p>
        </section>
    </main>
        
</body>
</html>
    `;
}


module.exports = generatePage;
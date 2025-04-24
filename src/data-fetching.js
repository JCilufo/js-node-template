fetch('https://www.swapi.tech/api//people/2')
    .then(response => response.json())
    .then((data) => {
        console.log(data);
    })

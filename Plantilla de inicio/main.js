const city = "tijuana";
const apiKey = "API KEY";
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        const formattedData = JSON.stringify(data, null, 2);
        console.log(formattedData);
    })
    .catch((error) => {
        console.log(error)
    });

// Tu puedes amor, muaaak
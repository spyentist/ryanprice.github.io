const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=d371a45960fcec8ac86717a7368063eb';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });
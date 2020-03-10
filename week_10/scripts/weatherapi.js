const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=d371a45960fcec8ac86717a7368063eb&units=imperial';
    
    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);
            document.getElementById('current-temp').textContent = jsObject.main.temp;
    
            const imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.weather[0].icon + '.png';  // note the concatenation
            const desc = jsObject.weather[0].description;  // note how we reference the weather array
            document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
            document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
            document.getElementById('icon').setAttribute('alt', desc);
        });



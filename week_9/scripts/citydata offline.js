fetch('/week_9/scripts/towndata.json')
    .then(result => {
        return result.json();
    })
    .then(resultJSON => {
        let towns = resultJSON.towns;

        towns.forEach(
            town => {
                if(town.name === 'Fish Haven') {
                    buildCards(town);
                } else if (town.name === 'Preston') {
                    buildCards(town);
                } else if (town.name === 'Soda Springs') {
                    buildCards(town);
                }
            }
        )
        function buildCards(town) {
            let card = document.createElement('article');
            let h1 = document.createElement('h1');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let image = document.createElement('img');
        
            h1.textContent = town.name;
            h3.textContent = town.motto;
            p.textContent = 'Year Founded: ' + town.yearFounded;
            p2.textContent = 'Population: ' + town.population;
            p3.textContent = 'Average Rainfall: ' + town.averageRainfall;
            image.setAttribute('src', "images/" + town.photo);
            image.setAttribute('alt', town.name + " Photo");

        
            card.appendChild(h1);
            card.appendChild(h3);
            card.appendChild(p);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(image);

            card.setAttribute('class', 'city_card');

            document.querySelector('#citysummary').appendChild(card);

        
        }



    })
    .catch(

    )


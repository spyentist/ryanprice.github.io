function getTemples() {
    
    fetch('json/temples.json')
        .then(response => response.json())
        .then(
            temples => {
                console.log(temples)
                temples.forEach(
                    temple => {
                        buildSummary(temple);

                    }
                );
            }
         );
}

function adaptiveMenu() {
    let links = document.getElementById("navigation");
    if (links.className === "navigation") {
        links.className += ".responsive";
    } else {
        links.className = "navigation";
    }
}


 function buildSummary(temple) {
            
            let card = document.createElement('article');
            let h1 = document.createElement('h1');
            let p = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let image = document.createElement('img');
        
            h1.textContent = temple.Name + " Temple";
            p.textContent =  'Phone number:' + temple.Telephone;
            p2.textContent = 'Email: ' + temple.Email;
            // p3.textContent = '' + temples. + '"';
            image.setAttribute('src', "images/" + temple.Photo);
            image.setAttribute('alt', temple.Name + " Photo");

        
            card.appendChild(h1);
            card.appendChild(image);
            card.appendChild(p);
            card.appendChild(p2);
            card.appendChild(p3);
            

            card.setAttribute('class', 'temple_card');

            document.querySelector('#templesummary').appendChild(card);
            
 }
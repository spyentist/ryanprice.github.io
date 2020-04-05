function doInputOutput (page) {
    switch (page) {
        case 'home':
            getTempleSummary();
            footer();
            break;
        case 'contact':
            footer();
            break;
        case 'temples':
            getTempleFull();
            footer();
            break;
    } 
}

function getTempleSummary() {
    
    fetch('json/temples.json')
        .then(response => response.json())
        .then(
            temples => {
                console.log(temples);
                let home = temples.slice(0,3);
                home.forEach(
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


function getTempleFull() {
    
    fetch('json/temples.json')
        .then(response => response.json())
        .then(
            temples => {
                console.log(temples);
                temples.forEach(
                    temple2 => {
                        buildFull(temple2);
                    }   
                );
            }
        );
}


 function buildSummary(temple) {

    let card = document.createElement('article');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let image = document.createElement('img');

    h1.textContent = temple.Name + " Temple";
    p.textContent =  temple.History[0].Milestone + ": " + temple.History[0].Date;
    p2.textContent = temple.History[2].Milestone + ": " + temple.History[2].Date;
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


function buildFull(temple) {

    let card = document.createElement('article');
    let subcard = document.createElement('section');
    let h1 = document.createElement('h1');
    let announce = document.createElement('p');
    let dedicated = document.createElement('p');
    let stradd1 = document.createElement('p');
    let stradd2 = document.createElement('p');
    let country = document.createElement('p');
    let image = document.createElement('img');
    let br = document.createElement('br');

    h1.textContent = temple.Name + " Temple";
    announce.textContent =  temple.History[0].Milestone + ": " + temple.History[0].Date;
    dedicated.textContent = temple.History[2].Milestone + ": " + temple.History[2].Date;
    country.textContent =  temple.Country;
    image.setAttribute('src', "images/" + temple.Photo);
    image.setAttribute('alt', temple.Name + " Photo");


    card.appendChild(h1);
    card.appendChild(image);
    card.appendChild(announce);
    card.appendChild(dedicated);
    // card.appendChild(br);
    card.appendChild(country);

    card.setAttribute('class', 'temple_card');
    card.setAttribute('id', temple.Photo + "_card");

    document.querySelector('#templefull').appendChild(card);
}

function footer() {
let date = new Date();
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
let weekDay = weekDays[date.getDay()];
let dayNum = date.getDate();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[date.getMonth()];
let year = date.getUTCFullYear();
let display = weekDay + ", " + dayNum + " " + month + " " + year;

    // Footer declarations
    document.getElementById("curdate").innerHTML = display;
    document.getElementById("year").innerHTML = year;

}



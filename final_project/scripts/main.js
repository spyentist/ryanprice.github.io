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

    // let br = document.createElement('br');

    let card = document.createElement('article');
    let info = document.createElement('section');
    let address = document.createElement('section');
    let weather = document.createElement('section');
    let ordinances = document.createElement('section');
    let h1 = document.createElement('h1');
    let infoh3 = document.createElement("h3");
    let announce = document.createElement('p');
    let groundbreaking = document.createElement('p');
    let dedicated = document.createElement('p');
    let addressp = document.createElement('p');
    let addressphn = document.createElement('p');
    let reded1 = document.createElement('p');
    let reded2 = document.createElement('p');
    let addressh3 = document.createElement('h3');
    let stradd1 = document.createElement('p');
    let stradd2 = document.createElement('p');
    let addr3 = document.createElement('p');
    let country = document.createElement('p');
    let image = document.createElement('img');
    let phonenum = document.createElement('p');
    let addresseml = document.createElement('p');
    let email = document.createElement('p');
    let services = document.createElement('p');
    let service1 = document.createElement('p');
    let service2 = document.createElement('p');
    let service3 = document.createElement('p');
    let service4 = document.createElement('p');
    let schedules = document.createElement('p');
    let schedule1 = document.createElement('p');
    let schedule2 = document.createElement('p');
    let schedule3 = document.createElement('p');
    let schedule4 = document.createElement('p');
    let closing = document.createElement('section');
    let closures = document.createElement('p');
    let closure1 = document.createElement('p');
    let closure2 = document.createElement('p');
    let closure3 = document.createElement('p');
    let closure4 = document.createElement('p');
    let closure5 = document.createElement('p');
    let closure6 = document.createElement('p');
    let closure7 = document.createElement('p');
    let closure8 = document.createElement('p');
    let closure9 = document.createElement('p');
    let closure10 = document.createElement('p');


    h1.textContent = temple.Name + " Temple";
    announce.textContent =  temple.History[0].Milestone + temple.History[0].Date;
    groundbreaking.textContent = temple.History[1].Milestone + temple.History[1].Date;
    dedicated.textContent = temple.History[2].Milestone + temple.History[2].Date;
    reded1.textContent = temple.History[3].Milestone + temple.History[3].Date;
    reded2.textContent = temple.History[4].Milestone + temple.History[4].Date;
    stradd1.textContent = temple.StreetLine1;
    stradd2.textContent = temple.StreetLine2;
    addr3.textContent = temple.City + ", " + temple.State + " " +  temple.Zip;
    country.textContent =  temple.Country;
    phonenum.textContent = temple.Telephone;
    email.textContent = temple.Email;
    image.setAttribute('src', "images/" + temple.Photo);
    image.setAttribute('alt', temple.Name + " Photo");
    infoh3.textContent = 'History';
    addressh3.textContent = 'Information';
    addressp.textContent = "Address:";
    addressphn.textContent = "Phone number:";
    addresseml.textContent = "Email:";
    services.textContent = 'Services:';
    service1.textContent = temple.Services[0];
    service2.textContent = temple.Services[1];
    service3.textContent = temple.Services[2];
    service4.textContent = temple.Services[3];
    schedules.textContent = 'Ordinance schedule: ';
    schedule1.textContent = 'Baptistry: ' + temple.Schedule.Baptistry;
    schedule2.textContent = 'Initiatory: ' + temple.Schedule.Initiatory;
    schedule3.textContent = 'Endowment: ' + temple.Schedule.Endowment;
    schedule4.textContent = 'Sealing: ' + temple.Schedule.Sealings;
    closures.textContent = 'Closures:';
    closure1.textContent = temple.Closures[0];
    closure2.textContent = temple.Closures[1];
    closure3.textContent = temple.Closures[2];
    closure4.textContent = temple.Closures[3];
    closure5.textContent = temple.Closures[4];
    closure6.textContent = temple.Closures[5];
    closure7.textContent = temple.Closures[6];
    closure8.textContent = temple.Closures[7];
    closure9.textContent = temple.Closures[8];


        // assigning html position
    card.appendChild(h1);
    card.appendChild(image);
    card.appendChild(info);
        info.appendChild(infoh3);
        info.appendChild(announce);
        info.appendChild(groundbreaking);
        info.appendChild(dedicated);
        info.appendChild(reded1);
        info.appendChild(reded2);
    card.appendChild(address);
        address.appendChild(addressh3);
        address.appendChild(addressp);
        address.appendChild(stradd1);
        address.appendChild(stradd2);
        address.appendChild(addr3);
        address.appendChild(country);
        address.appendChild(addressphn);
        address.appendChild(phonenum);
        address.appendChild(addresseml);
        address.appendChild(email);
    card.appendChild(ordinances);
        ordinances.appendChild(services);
        ordinances.appendChild(service1);
        ordinances.appendChild(service2);
        ordinances.appendChild(service3);
        ordinances.appendChild(service4);
        ordinances.appendChild(schedules);
        ordinances.appendChild(schedule1);
        ordinances.appendChild(schedule2);
        ordinances.appendChild(schedule3);
        ordinances.appendChild(schedule4);
    card.appendChild(closing);
        closing.appendChild(closures);
        closing.appendChild(closure1);
        closing.appendChild(closure2);
        closing.appendChild(closure3);
        closing.appendChild(closure4);
        closing.appendChild(closure5);
        closing.appendChild(closure6);
        closing.appendChild(closure7);
        closing.appendChild(closure8);
        closing.appendChild(closure9);
        


        // Setting attributes for styling
    card.setAttribute('class', 'temple_card');
    card.setAttribute('id', temple.Photo + "_card");
        info.setAttribute("class", 'information');
        address.setAttribute('class', 'address');
            addresseml.setAttribute('class', 'bold');
            addressphn.setAttribute('class', 'bold');
            addressp.setAttribute('class', 'bold');
        ordinances.setAttribute('class', 'ordinances')
            services.setAttribute('class', 'bold');
            schedules.setAttribute('class', 'bold');
        closing.setAttribute('class', 'closing');
            closures.setAttribute('class', 'bold');
        weather.setAttribute('class', 'weather');
    

    
        // Adding all the cards to the webpage
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



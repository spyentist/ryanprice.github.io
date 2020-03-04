let date = new Date();
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
let weekDay = weekDays[date.getDay()];
let dayNum = date.getDate();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[date.getMonth()];
let year = date.getUTCFullYear();
let today = weekDay;
let today_1 = weekDays[date.getDay()+1];
let today_2  = weekDays[date.getDay()+2];
let today_3 = weekDays[date.getDay()+3]; 
let today_4 = weekDays[date.getDay()+4];

const aside  = document.querySelector("aside"); 
const forecast = document.querySelector("fore-contain")

function doInputOutput() {

    // Checks to see if the pancakes aside is in the document.
    if (aside != null){
        pancakes();
    }

    if (forecast != null) {
        weatherConditions();
    }




}

function pancakes() {
    if (weekDay === "Friday") {
        aside.style.display ="block";
    } else {
        aside.style.display = "none";
    }
}


   
    
    let display = weekDay + ", " + dayNum + " " + month + " " + year;

    document.getElementById("curdate").innerHTML = display;
    document.getElementById("year").innerHTML = year;
    document.getElementById("day1").innerHTML = today;
    document.getElementById("day2").innerHTML = today_1;
    document.getElementById("day3").innerHTML = today_2;
    document.getElementById("day4").innerHTML = today_3;
    document.getElementById("day5").innerHTML = today_4;
    document.getElementById("tempH1").innerHTML = parseInt(Math.random() * 100);
    document.getElementById("tempH2").innerHTML = parseInt(Math.random() * 100);
    document.getElementById("tempH3").innerHTML = parseInt(Math.random() * 100);
    document.getElementById("tempH4").innerHTML = parseInt(Math.random() * 100);
    document.getElementById("tempH5").innerHTML = parseInt(Math.random() * 100);
    document.getElementById("tempL1").innerHTML = parseInt(Math.random() * 10);
    document.getElementById("tempL2").innerHTML = parseInt(Math.random() * 10);
    document.getElementById("tempL3").innerHTML = parseInt(Math.random() * 10);
    document.getElementById("tempL4").innerHTML = parseInt(Math.random() * 10);
    document.getElementById("tempL5").innerHTML = parseInt(Math.random() * 10);



function weatherConditions() {
    let temp, wind, humid, windchill;

    temp =parseInt(Math.random()*100);
    wind = parseInt(Math.random()*10);
    tempdeg = temp + "&deg;";
    windspeed = wind + "mph";
    humid = "15" + "&percnt;";
    
    
    if(temp <= 50 && wind >= 3) {
        windchill = 35.74 +  0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
        windchilldisplay = windchill.toFixed(0) + '&deg;'
    } else {
        // document.querySelector("#winddiv").style.display="none";
        windchilldisplay = tempdeg;
    }
    
    document.getElementById("curTemp").innerHTML = tempdeg;
    document.getElementById("windSpeed").innerHTML = windspeed;
    document.getElementById("humidity").innerHTML = humid;
    document.getElementById("windchill").innerHTML = windchilldisplay;
}

function adaptiveMenu() {
    let links = document.getElementById("navigation");
    if (links.className === "navigation") {
        links.className += ".responsive";
    } else {
        links.className = "navigation";
    }
    
}

WebFont.load({
    google: {
      families: [
         'Bebas Neue',
         'Lato',
         'Yanone Kaffeesatz'
      ]
    }
  });
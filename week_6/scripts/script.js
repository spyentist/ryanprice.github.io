function doInputOutput() {
    var date = new Date();
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
    var weekDay = weekDays[date.getDay()];
    var dayNum = date.getDate();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = months[date.getMonth()];
    var year = date.getUTCFullYear();
    var today = weekDay;
    var today_1 = weekDays[date.getDay()+1];
    var today_2  = weekDays[date.getDay()+2];
    var today_3 = weekDays[date.getDay()+3]; 
    var today_4 = weekDays[date.getDay()+4];


    const aside = document.querySelector("aside"); 

    if (date === 5) {
        aside.style.display ="block";
    } else {
        aside.style.display ="none";
    }



    var random = parseInt(Math.random() * 100);    
    
    var display = weekDay + ", " + dayNum + " " + month + " " + year;

    document.getElementById("curdate").innerHTML = display;
    document.getElementById("year").innerHTML = year;
    document.getElementById("day1").innerHTML = today;
    document.getElementById("day2").innerHTML = today_1;
    document.getElementById("day3").innerHTML = today_2;
    document.getElementById("day4").innerHTML = today_3;
    document.getElementById("day5").innerHTML = today_4;
    document.getElementById("tempH1").innerHTML = random;
    document.getElementById("tempH2").innerHTML = parseInt(Math.random() * 100);
    document.getElementById("tempH3").innerHTML = parseInt(Math.random() * 100);
    document.getElementById("tempH4").innerHTML = parseInt(Math.random() * 100);
    document.getElementById("tempH5").innerHTML = parseInt(Math.random() * 100);
    document.getElementById("tempL1").innerHTML = parseInt(Math.random() * 10);
    document.getElementById("tempL2").innerHTML = parseInt(Math.random() * 10);
    document.getElementById("tempL3").innerHTML = parseInt(Math.random() * 10);
    document.getElementById("tempL4").innerHTML = parseInt(Math.random() * 10);
    document.getElementById("tempL5").innerHTML = parseInt(Math.random() * 10);
}


function weatherConditions() {
    var temp, wind, humid, windchill;

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
    var links = document.getElementById("navigation");
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
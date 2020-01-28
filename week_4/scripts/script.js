function doInputOutput() {
    var date = new Date;
    var week = date.getDay();
    var dayNum = date.getDate();
    var mon = date.getMonth();
    var year = date.getUTCFullYear();
    var weekday, month;

    switch (week) {
        case 0: weekday ="Sunday";
        break;

        case 1: weekday ="Monday";
        break;

        case 2: weekday ="Tuesday";
        break;

        case 3: weekday ="Wednesday";
        break;

        case 4: weekday ="Thursday";
        break;

        case 5: weekday ="Friday";
        break;

        case 6: weekday ="Saturday";
        break;

        default: weekday ="Unknown Day";
        break;
    }

    switch (mon) {
        case 0: month ="January";
        break;

        case 1: month ="February";
        break;

        case 2: month ="March";
        break;

        case 3: month ="April";
        break;

        case 4: month ="May";
        break;

        case 5: month ="June";
        break;

        case 6: month ="July";
        break;

        case 7: month ="August";
        break;

        case 8: month ="September";
        break;

        case 9: month ="October";
        break;

        case 10: month ="November";
        break;

        case 11: month ="December";
        break;

        default: month = "Unknown Month";
    }

    var display = weekday + ", " + dayNum + " " + month + " " + year;

    document.getElementById("curdate").innerHTML = display;
    document.getElementById("year").innerHTML = year;
}

function adaptiveMenu() {
    var links = document.getElementById("navigation");
    if (links.className === "topnav") {
        links.className += ".responsive";
    } else {
        links.className = "topnav";
    }
    
}
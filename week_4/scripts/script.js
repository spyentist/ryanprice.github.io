function doInputOutput() {
    var date = new Date;
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var weekDay = weekDays[date.getDay()];
    var dayNum = date.getDate();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var month = months[date.getMonth()];
    var year = date.getUTCFullYear();
    var weekday, month;
    
    var display = weekDay + ", " + dayNum + " " + month + " " + year;

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
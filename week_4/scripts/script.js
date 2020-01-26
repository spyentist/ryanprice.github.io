function doInputOutput() {
    var date = new Date;
    var weekday = date.getDay;
    var dayNum = date.getDate;
    var month = date.getMonth + 1;
    var year = date.getUTCFullYear;

    var display = weekday + ", " + dayNum + " " + month + " " + year;

    document.getElementById("curdate").innerHTML = display;
}
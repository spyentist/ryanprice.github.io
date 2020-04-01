function getTemples() {
fetch('json/temples.json')
    .then(response => response.json())
    .then(
        response => {
            console.log(response);

            
        }
    )
}

function adaptiveMenu() {
    let links = document.getElementById("navigation");
    if (links.className === "navigation") {
        links.className += ".responsive";
    } else {
        links.className = "navigation";
    }
}
const apiKey = "ee9f00a6ba766bc509db6794b890fdd5"; // Vervang dit met je eigen API-sleutel

function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (city === "") {
        alert("Voer een stad in!");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=nl`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("Stad niet gevonden!");
                return;
            }

            document.getElementById("cityName").innerText = `Weer in ${data.name}`;
            document.getElementById("temperature").innerText = `Temperatuur: ${data.main.temp}°C`;
            document.getElementById("description").innerText = data.weather[0].description;
            document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            document.getElementById("weatherResult").style.display = "block";
        })
        .catch(error => {
            console.error("Er is een fout opgetreden:", error);
            alert("Er is een probleem met het ophalen van het weer.");
        });
}fetch(apiUrl)
.then(response => response.json())
.then(data => {
    console.log("API-respons:", data); // Logt de volledige respons
})
.catch(error => console.error("Fout:", error));

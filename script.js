
        const apiKey = "4500da6cda6493e2e7ba26012e09b0f6";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcons = document.querySelector(".weather-icon");
        async function checkWeather(city){
            const response= await fetch (`${apiUrl}${city}&appid=${apiKey}`);
            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
            else{
                var data = await response.json();
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temperature").innerHTML=Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
            document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";

            if(data.weather[0].main == "Clouds"){
                weatherIcons.src="images/clouds.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcons.src="images/rain.png";
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcons.src="images/clear.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcons.src="images/drizzle.png";
            }
            else if(data.weather[0].main =="Mist"){
                weatherIcons.src="images/mist.png";
            }
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
            }
        }

        searchBtn.addEventListener("click", ()=>
    {
        checkWeather(searchBox.value);
    })
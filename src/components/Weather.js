import SearchIcon from '@mui/icons-material/Search';
import { Card, CardContent } from '@mui/material';

const city = 'sofia';
const apiKey = '220a196d1f8f2d816187734bc89e1a59';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(){
    const response = await fetch(apiUrl + `q=` + city + `&units=metric&appid=`+ apiKey);
    let data = await response.json();


    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) +  '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind['speed'] + ' km/h';
    console.log(data)
}

searchBtn.addEventListener('click', () => checkWeather(searchBox.value));
export default function Weather() {

    return (
<div className="card">
    <div className="search">
        <input type="text" placeholder="Въведете името на града" spellCheck="false"></input>
        <button><SearchIcon alt="Button to search"></SearchIcon></button>
    </div>
    <Card className="weather-card" sx={{ minWidth: 275, maxWidth: 500 }}>
        <CardContent>
            <img className='weather-icon' src="images/weather/rainy.svg" alt="weather"></img>
            <h1 className="temp">22*C</h1>
            <h2 className="city">New York</h2>
            <div className="weather-details">
                <div className="col">
                    <img src="images/weather/humidity.png" alt='humidity'></img>
                    <div>
                        <p className="humidity">50%</p>
                        <p>Влажност</p>
                    </div>
                </div>
                <div className="col">
                    <img src="images/weather/wind.png" alt='wind'></img>
                    <div>
                        <p className="wind">15 km/h</p>
                        <p>Скорост на вятъра</p>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
</div>
    );
}
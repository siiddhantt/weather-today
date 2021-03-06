# WeatherToday - ReactJS Weather App
---
### Deployed site : 


https://user-images.githubusercontent.com/47355538/167668252-661af953-ea3a-40c8-aab9-2f330308eb43.mp4


https://lucky-fenglisu-93f506.netlify.app/

https://siiddhantt.github.io/weather-today/
                
>Note : You might have to disable secure content/connection in your browser for this page. Works in desktop browsers.


![Screenshot from 2022-05-10 21-16-27](https://user-images.githubusercontent.com/47355538/167669837-10dba694-6bf8-45ea-99d9-7b663088a674.png)


### APIs used :

**One Call API 1.0 : https://openweathermap.org/api/one-call-api**

*API Info :*

The One Call API 1.0 provides the following weather data for any geographical coordinates:

    Current weather
    Minute forecast for 1 hour
    Hourly forecast for 48 hours
    Daily forecast for 7 days
    National weather alerts
    Historical weather data for the previous 5 days
    
*API Call :*

`$https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`

**Geocoding API : https://openweathermap.org/api/geocoding-api**

*API Info :*

Geocoding is the process of transformation of any location name into geographical coordinates, and the other way around (reverse geocoding). OpenWeather’s Geocoding API supports both the direct and reverse methods, working at the level of city names, areas and districts, countries and states:

    Direct geocoding converts the specified name of a location or zip/post code into the exact geographical coordinates;
    Reverse geocoding converts the geographical coordinates into the names of the nearby locations.

*API Call :*

`$http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}` (Direct geocoding)

`$http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}` (Reverse geocoding)

### Framework Used :

Tailwind CSS

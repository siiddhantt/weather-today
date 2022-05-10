import React, { useState, useEffect } from 'react'
const API_KEY = '368d3bb235c625628fa868ed2b2c797e';

function Navbar(props) {
    const [city, setCity] = useState(null);
    const submit = (e) => {
        e.preventDefault();
        async function getWeatherSearch() {
            let data = await getWeather(city)
            props.parentCallback(data)
        }
        getWeatherSearch()
    }
    return (
        <>
            <header className="navbar">
                <div
                    className="flex items-center justify-between h-16  px-1 mx-auto"
                >


                    <div className="logo">
                        <span className="logo  px-2 py-2 rounded" style={{ color: "white" }}>WeatherToday</span>
                    </div>

                    <nav
                        className="items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0"
                    >
                    </nav>

                        <div className="items-center hidden space-x-4 lg:flex">
                            <form className="hidden mb-0 lg:flex" onSubmit={submit}>
                                <div className="relative" onSubmit={submit}>
                                    <input
                                        className="h-10 pr-10 text-sm placeholder-gray-300 border-gray-200 rounded-lg focus:z-10 position-relative"
                                        placeholder="  Search city..."
                                        type="text"
                                        onChange={(e) => setCity(e.target.value)}
                                    />

                                    <button
                                        className="absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg"
                                        type="submit"
                                        onSubmit={submit}
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                clipRule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                fillRule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    
                </div>

            </header>

        </>
    )
}

async function getGeocode(cityName) {
    let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`);
    let data = await response.json();
    let lat1 = `${data[0].lat}`;
    let lon1 = `${data[0].lon}`;
    let name1 = `${data[0].name}`;
    let country1 = `${data[0].country}`;
    let lst = []
    lst.push(lat1)
    lst.push(lon1)
    lst.push(name1)
    lst.push(country1)
    return lst
}

async function getWeather(cityName1) {
    let tmp = await getGeocode(cityName1);
    let lat = tmp[0]
    let lon = tmp[1]
    let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&units=metric&appid=${API_KEY}`);
    let data = await response.json();
    return data

}

export default Navbar

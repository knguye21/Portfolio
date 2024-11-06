import { useEffect, useState } from 'react';

const WeatherTile = ({ city, description }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!city) {
                setError('City parameter is required');
                return;
            }

            try {
                const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setWeatherData(data);
            } catch (err) {
                setError(err.message);
            }
        };
        
        fetchData();
    }, [city]); // Add city to dependency array to refetch if city changes

    if (error) {
        return <p>Error fetching weather data: {error}</p>;
    }

    return (
        <div className='group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100'>
            <div className="relative isolate h-full w-full shadow-xl">
                <div className='flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-400'>
                    <span className='py-1.5'>
                        Weather
                        &nbsp;•&nbsp; {description}
                    </span>
                </div>
                    
                <div className='flex flex-col bg-outerSpaceGray text-white px-4 py-7 m-2 rounded-lg transition-transform group-hover:scale-105'>
                    <div className='text-sm font-bold flex justify-between'>
                        <h1>{weatherData ? weatherData.realtime.location.name : 'Loading...'}</h1>
                        <p>{weatherData ? weatherData.realtime.current.condition.text : 'Loading...'}</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='grid grid-rows-2'>
                            <div>
                                <h2 className='text-2xl font-bold'>{weatherData ? weatherData.realtime.current.temp_c : 'Loading...'}°C</h2>
                                <div className='flex items-center'>
                                    <span className='text-sm'>Feels like:</span>
                                    <p className='font-medium'>&nbsp;{weatherData ? weatherData.realtime.current.feelslike_c : 'Loading...'}</p>
                                </div>
                            </div>
                            <div className='flex flex-row text-xs pb-1.5 items-center'>
                                <img src='/icons/sunrise.png' alt='sunrise' className='w-6 h-6 pr-2'/>
                                <div>
                                    <p>Sunrise</p>
                                    <p>{weatherData ? weatherData.forecast.forecast.forecastday[0].astro.sunrise : 'Loading...'}</p>
                                </div>
                            </div>
                            <div className='flex flex-row text-xs gap-2 items-center'>
                                <img src='/icons/sunset.png' alt='sunset' className='w-6 h-6 pr-2'/>
                                <div>
                                    <p>Sunset</p>
                                    <p>{weatherData ? weatherData.forecast.forecast.forecastday[0].astro.sunset : 'Loading...'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 grid-rows-2 gap-2 pt-8 gap-y-4'>
                            <div className='flex flex-col items-center'>
                                <img src='/icons/humidity.png' alt='humidity' className='w-6 h-6 pb-1'/>
                                <p className='text-xs font-medium'>{weatherData ? weatherData.realtime.current.humidity : 'Loading...'}</p>
                                <p className='text-xs'>Humidity</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <img src='/icons/wind.png' alt='wind speed' className='w-6 h-6 pb-1'/>
                                <p className='text-xs font-medium'>{weatherData ? weatherData.realtime.current.wind_mph : 'Loading...'}&nbsp;mph</p>
                                <p className='text-xs'>Wind</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <img src='/icons/pressure.png' alt='pressure' className='w-6 h-6 pb-1'/>
                                <p className='text-xs font-medium'>{weatherData ? weatherData.realtime.current.pressure_mb : 'Loading...'}&nbsp;mb</p>
                                <p className='text-xs'>Pressure</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <img src='/icons/uv.png' alt='uv' className='w-6 h-6 pb-1'/>
                                <p className='text-xs font-medium'>{weatherData ? weatherData.realtime.current.uv : 'Loading...'}</p>
                                <p className='text-xs'>UV</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherTile;

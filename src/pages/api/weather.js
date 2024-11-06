// pages/api/weather.js
export default async function handler(req, res) {
    const { city } = req.query; // Get the city from the query parameters

    // Check if city is provided
    if (!city) {
        return res.status(400).json({ error: 'City parameter is required' });
    }

    // Get the API key from environment variables
    const apiKey = process.env.WEATHER_API_KEY; 
    if (!apiKey) {
        return res.status(500).json({ error: 'API key is not defined in environment variables' });
    }

    try {
        const realtimeResponse = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        const forecastResponse = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`);

        console.log('Realtime response status:', realtimeResponse.status);
        console.log('Forecast response status:', forecastResponse.status);

        if (!realtimeResponse.ok || !forecastResponse.ok) {
            throw new Error('Failed to fetch data from the weather API');
        }

        const currentWeather = await realtimeResponse.json();
        const forecastWeather = await forecastResponse.json();

        res.status(200).json({ realtime: currentWeather, forecast: forecastWeather });
    } catch (error) {
        console.error('Error in fetching weather data:', error);
        res.status(500).json({ error: 'Failed to retrieve data: ' + error.message });
    }
}

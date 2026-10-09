import 'dotenv/config';
import express from 'express';
import axios from 'axios';
import path from 'node:path';

const app = express();
const PORT = 3000;
const weatherURL = "https://api.openweathermap.org/data/4.0/onecall/current";
const unitsType = "metric";

app.use(express.static(path.join(import.meta.dirname, 'public')));

app.get('/', async (req, res) => {
  //const clientIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  //temp test with know ip 
  const clientIP = '8.8.8.8';
  try {
    //ip-api call to get user's geo-location using their ip
    const addressResponse = await axios.get(`http://ip-api.com/json/${clientIP}`);
    const location = addressResponse.data;
    //openweather call to get weather data for the address
    const weatherResponse = await axios.get(`${weatherURL}?lat=${location.lat}&lon=${location.lon}&units=${unitsType}&appid=${process.env.WEATHER_API_KEY}`);
    const weather = weatherResponse.data;
    console.log(weather.data[0]);
    res.render('index.ejs', {weather: weather.data[0]});
  } catch (error) {
    console.log(error.response?.data || error.message);
    res.render('index.ejs');
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
})
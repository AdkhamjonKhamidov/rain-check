import express from 'express';
import axios from 'axios';
import path from 'node:path';

const app = express();
const PORT = 3000;

app.use(express.static(path.join(import.meta.dirname, 'public')));

app.get('/', async (req, res) => {
  //const clientIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  //temp test with know ip
  const clientIP = '8.8.8.8';
  try {
    const response = await axios.get(`https://ipapi.co/${clientIP}/json/`);
    const location = response.data;
    console.log(location);
  } catch (error) {
    console.log(error.response?.data || error.message);
    return res.sendStatus(500);
  }
  res.render('index.ejs');
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
})
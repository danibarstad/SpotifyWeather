// const http = require('http');
// const fs = require('fs');
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html')
//     fs.readFile('index.html', function(error, data) {
//         if (error) {
//             res.writeHead(404);
//             res.write('Error: File Not Found');
//         } else {
//             res.write(data);
//         }
//         res.end();
//     })
// })

// server.listen(port, function(error) {
//     if (error) {
//         console.log('Something went wrong', error);
//     } else {
//         console.log('Server is listening on port ' + port);
//     }
// })


const express = require('express');
require('dotenv').config();
const app = express();
app.listen(3000, () => console.log('listening at 3000'))
app.use(express.static('public'));

// app.get('/weather/', async (request, response) => {
//     const api_key = process.env.WEATHER_KEY;
//     const city = 'GET CITY NAME HERE';
//     const state = 'GET STATE NAME HERE';
//     const url = 'https://api.openweathermap.org/data/2.5/weather';
//     const api_url = `${url}?q=${city},${state},US&units=imperial&appid=${api_key}`;

//     const api_response = await fetch(api_url);
//     const api_data = await api_response.json();

//     const data = {
//         // PUT DATA HERE
//     };
//     response.json(data);
// });

// app.get('/auth/spotify', passport.authenticate('spotify', { showDialog: true }));

// app.get(
//     '/auth/spotify/callback',
//     passport.authenticate('spotify', { failureRedirect: '/login' }),
//     function(req, res) {
//         // Successful authentication, redirect home.
//         res.redirect('/');
//     }
// );
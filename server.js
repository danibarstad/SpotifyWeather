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
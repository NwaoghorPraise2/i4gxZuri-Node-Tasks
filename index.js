const http = require('http');
const fs = require('fs').promises;
const path = require('path');

//Definig Port
const port = 4000;
const server = http.createServer( (req, res) =>{
    if (req.url === '/') {
    let filePath = path.join(__dirname, 'views', 'home.html'); 
    fileReader (filePath, res);
    }
    
    if (req.url === '/about') {
        let filePath = path.join(__dirname, 'views', 'about.html'); 
        fileReader (filePath, res);
    }
    
    if (req.url === '/contact') {
        let filePath = path.join(__dirname, 'views', 'contact.html'); 
        fileReader (filePath, res);
        }
    
    if (req.url === '/home') {
         let filePath = path.join(__dirname, 'views', 'home.html'); 
        fileReader (filePath, res);
        }
});


const fileReader =  (filePath, res)  => {
    fs.readFile(filePath)
    .then ( contents => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(contents);
    })
    .catch (err => {
        res.writeHead(500);
        res.end(err);
        console.log(err);
        return;
    });
};

server.listen(port, () => {
    console.log ('Yes, Server is Live');
});

const express = require('express');
const app = express();
const port = 3000;

const songs = require('./models/songs.js');
const movies = require('./models/movies.js');
const plants = require('./models/plants.js');
const sports = require('./models/sports.js');
const cars = require('./models/cars.js');

//middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//routes
app.get('/', (req, res) => {
    res.render('home/Index');
});

app.get('/', function(req, res){
    res.render('home/Index');
});   

app.get('/songs', (req, res) => {
    res.render('songs/Index', { songs: songs });
});

app.get('/movies', (req, res) => {
    res.render('movies/Index', { movies: movies });
});

app.get('/plants', (req, res) => {
    res.render('plants/Index', { plants: plants });
});

app.get('/sports', (req, res) => {
    res.render('sports/Index', { sports: sports });
});

app.get('/cars', (req, res) => {
    res.render('cars/Index', { cars: cars });
});

app.get('/songs/:indexOfSongsArray', (req, res)=>{
    res.render('songs/Show', {
        song: song[req.params.indexOfSongsArray]
    });
});  

app.get('/movies/:indexOfMoviesArray', (req, res)=>{
    res.render('movies/Show', {
        movie: movie[req.params.indexOfMoviesArray]
    });
}); 

app.get('/plants/:indexOfPlantsArray', (req, res)=>{
    res.render('plants/Show', {
        plant: plant[req.params.indexOfPlantsArray]
    });
}); 

app.get('/sports/:indexOfSportsArray', (req, res)=>{
    res.render('sports/Show', {
        sport: sport[req.params.indexOfSportsArray]
    });
}); 

app.get('/cars/:indexOfCarsArray', (req, res)=>{
    res.render('cars/Show', {
        car: car[req.params.indexOfCarsArray]
    });
}); 

app.listen(port, () => {
    console.log(`Listening on ${port}`)
});



// {
//     "song": "Litte Red Corvette",
//     "artist": "Prince",
//     "readyToJam": true
//     },
//     {
//     "song": "Enter the 36 Chambers",
//     "artist": "Green Day",
//     "readyToJam": false
//     },
//     {
//     "song": "John Redcorn",
//     "artist": "SiR",
//     "readyToJam": true
//     },
//     {
//     "song": "Binz",
//     "artist": "Solange",
//     "readyToJam": true
//     },
//     {
//     "song": "Over",
//     "artist": "Outkast",
//     "readyToJam": false
//     },
//     {
//     "song": "Like I Want You",
//     "artist": "GIVEON",
//     "readyToJam": true
//     },
//     {
//     "song": "Ex Calling",
//     "artist": "6lack",
//     "readyToJam": true
//     },
//     {
//     "song": "Cherry Hill",
//     "artist": "Russ",
//     "readyToJam": true
//     },
//     {
//     "song": "Navajo",
//     "artist": "Masego",
//     "readyToJam": true
//     },
//     {
//     "song": "Fading in C# Minor",
//     "artist": "UNA",
//     "readyToJam": true
//     }
    
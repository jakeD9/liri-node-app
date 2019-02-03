// node packages
var env = require('dotenv').config()
var keys = require("./keys.js");
var axios = require("axios");
var fs = require("fs");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var moment = require('moment');
moment().format();



// search functions
// OMDB search
var movieSearch = function(movieInquiry) {
    var queryUrl = "http://www.omdbapi.com/?t=" + movieInquiry + "&y=&plot=short&apikey=trilogy";

    if (movieInquiry === undefined) {
        movieInquiry = "Mr Nobody";
    }

    axios.get(queryUrl).then(
        function(response) {
            console.log(movieInquiry);
            console.log("\n -------------------- \n");
            console.log("Title : " + response.data.Title);
            console.log("Year : " + response.data.Year);
            console.log("IMDB Rating : " + response.data.Rated);
            console.log("RottenTomatoes Rating : " + response.data.Ratings[1].Value);
            console.log("Country : " + response.data.Country);
            console.log("Language : " + response.data.Language);
            console.log("Plot : " + response.data.Plot);
            console.log("Actors : " + response.data.Actors);
            console.log("\n -------------------- \n");
        }
    )
}

// bandsintown search
var concertSearch = function(concertInquiry) {
    var queryUrl = "https://rest.bandsintown.com/artists/" + concertInquiry + "/events?app_id=codingbootcamp";

    if (concertInquiry === undefined) {
        concertInquiry = "Drake";
    }

    axios.get(queryUrl).then(
        function(response) {
            for (i = 1; i < 8; i++) {
                console.log("Concert " + [i])
                console.log("Venue Name : " + response.data[i].venue.name)
                console.log("Venue Location : " + response.data[i].venue.city + ", " + response.data[i].venue.country);
                var date = response.data[i].datetime;
                console.log("Date : " + moment(date).format("dddd, MMMM Do YYYY"));
                console.log("\n ---------------- \n");
            }
        }
    )
}

// spotify search
var spotifySearch = function(songInquiry) {
    if (songInquiry === undefined) {
        songInquiry = "Don't Stop Me Now";
    }

    spotify.search(
        {
            type: "track",
            query: songInquiry
        },
    ).then(function(response) {
        // console.log(response[2]);
        console.log(response.tracks.items.length + " results found, displaying top 10");
        for (i = 0; i < 11; i++) {
            console.log("Result : " + i);
            console.log("Artist : " + response.tracks.items[i].album.artists[0].name);
            console.log("Song Name : " + response.tracks.items[i].album.name)
            console.log("Album Name : " + response.tracks.items[i].name);
            console.log("Preview : " + response.tracks.items[i].preview_url);
            console.log("\n-----------------------\n");
        }
    }).catch(function(err) {
        console.log("Error : " + err);
    })
}

// random.txt search
var searchAuto = function() {

    fs.readFile("random.txt", "utf8", function(err, response) {
        console.log("Running command : " + response)
        var responseParsed = response.split(",");
        // console.log(responseParsed);
        // // console.log(responseParsed[0]);
        // // console.log(responseParsed[1]);
        grab(responseParsed[0], responseParsed[1]);
    })
}


// switch/case loop for functions
var run = function(caseEntered, inquiryEntered) {
    switch (caseEntered) {
        case "concert-this": concertSearch(inquiryEntered);
            break;
        case "spotify-this-song": spotifySearch(inquiryEntered);
            break;
        case "movie-this": movieSearch(inquiryEntered);
            break;
        case "do-what-it-says": searchAuto();
            break;
        default: console.log("invalid command");
    }
};

// grabs entered data
var grab = function(argvOne, argvTwo) {
    // argvOne = [process.argv[2]];
    // argvTwo = [process.argv[3]];
    run(argvOne, argvTwo);
}

grab(process.argv[2], process.argv[3]);
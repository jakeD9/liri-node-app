# Liri-Node-App

This is a CLI app to retreive music and movie data using nodeJS packages.

## Getting Started

You will need to supply your own .env file containing both a spotify key and a spotify app ID in order to use the node-spotify-api package. You can sign up for those here: 

[Spotify-Dev-Center](https://developer.spotify.com/)

cd into the repository location and create a blank .env file, where you can provide your spotify information in the following format:

```
# Spotify API keys

SPOTIFY_ID=YOUR_APP_ID_HERE
SPOTIFY_SECRET=YOUR_SECRET_HERE
```

These get referenced in the app using the keys.js file.


### Installing

Once you've set up your .env to contain your spotify keys, cd into the root of the repo and run

```
npm install
```

Verify you've installed the following packages:

* fs
* axios
* node-spotify-api
* moment
* dotenv

### Running the Program

Run the app in your terminal using `node liri.js + command`

The application accepts 4 commands as of now:
* concert-this : searches for a list of upcoming concerts on a particular artist and displays locations and dates
* spotify-this-song : searches spotify for top 10 results of a song title search
* movie-this : searches imdb and displays information for a movie title
* do-what-it-says : reads a preset .txt file and applies it to the console automatically


## Built With These APIs

* Spotify
* BandsInTown
* OMBD/IMBD


## Versioning

Version 1.0


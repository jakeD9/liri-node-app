# liri-node-app
nodeJS application for retrieving music and movie data

this application uses multiple npm packages, including
    fs
    axios
    node-spotify-api
    moment
    dotenv

this application uses multiple apis, including
    spotify
    bandsintown
    omdb/imdb

you will need to supply your own .env file containing a spotify key and secret in order to use the application properly, put together in the following format:

`# Spotify API keys

SPOTIFY_ID=YOUR_APP_ID_HERE
SPOTIFY_SECRET=YOUR_SECRET_HERE`

the application accepts 4 commands as of now - just enter your search inquiry after typing the command in console
concert-this : searches for a list of upcoming concerts on a particular artist and displays locations and dates
spotify-this-song : searches spotify for top 10 results of a song title search
movie-this : searches imdb and displays information for a movie title
do-what-it-says : reads a preset .txt file and applies it to the console automatically


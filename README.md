# liri-node-app
## Overview of the app
Liri is the command line node app which takes in user input parameters and gives us back the data about movies, songs and concert events . The command that user has to enter is:
* movie-this
* concert-this
* spotify-this-song
* do-what-it-says

#### Demo of the app can be found in :https://drive.google.com/open?id=1-buzXBkyjTEHBqmToS9LAvmLFLA4TY9w

### node liri movie-this < movie name >
This command makes the request to the OMDB API via the axious packages. IT gives us back the result like:
* Title of the Movie
* Director of the Movie
* Released year
* Released Date
* Name of Actors
* Movie Language
* Country
* Summary
* Rating
* Rotten Tomatoes Rating

If the user does not specify the movie name , it will print information of the movie "The Matrix" 

### node liri concert this < concert name >

This command makes the request to the Bands In Town API. It gives us back the result like:
* Venue Name and the city Name
* Venue Name
* Event Date

### node liri spotify-this-song < song name >

This command makes the request to the Spotify API via the node-spotify-api packages. IT gives us back the result like:
* Name of Artist(s)
* Name of the Album
* Name of the Song
* URL

If the user does not specify the movie name , it will print information of the song name " When I Die " by " DJ King Assassin "

### node liri do-what-it-says

This command reads the information from the random.txt file which is created as a separate file and gives us the result like:
* Name of Artist(s)
* Name of the Album
* Name of the Song
* URL

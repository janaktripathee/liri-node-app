# liri-node-app
## Overview of the app
Liri is the command line node app which takes in user input parameters and gives us back the data about movies, songs and concert events . The command that user has to enter is:
* movie-this
* concert-this
* spotify-this-song
* do-what-it-says

# Demo of the app can be found in :

### movie-this <movie name>
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
require('dotenv').config();
var fs = require('fs');
var request = require('request');
var moment = require('moment')
var Spotify = require('node-spotify-api');
var axios = require('axios');
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify);

function spotifyThis(flag, str){
	var songTitle = process.argv.slice(3).join(' ').trim();
	
	if(songTitle==''){
		songTitle = "And when i Die";
	}
	if (flag){
		songTitle = str;
	}

	spotify.search(
	{
		type:'track',
		query:songTitle
	},function(error, resp){
		if(error){
			return console.log("Error Message :" + error);
		}
		var artists = '';
		for(var i =0; i <resp.tracks.items[0].artists.length; i++ ){
			artists += resp.tracks.items[0].artists[i].name;
		}
		console.log("Name of Artist(s) :"+artists);
		console.log("Name of the Album :" +resp.tracks.items[0].album.name);
		console.log("Name of the Song :"+ resp.tracks.items[0].name);
		console.log("Name of URL:" + resp.tracks.items[0].preview_url);
		fs.appendFileSync('log.txt',nameOfArtist);
	})
}
function concertThis(flag, str){
	//ameOfBand= process.argv

	console.log('function concertThis triggered')

}
function movieThis(flag, str){
	var movieName = process.argv.slice('3').join(' ').trim();
	if(movieName == ''){
		movieName = "The Matrix";
	}
	if(flag){
		movieName = str;
	}
	axios({
		method:'get',
		url:"https://www.omdbapi.com/?t="+movieName+"&apikey=5466a398",
	}).then(function(resp){
		var rottenTomatoesRating = resp.data.Ratings.find(
			item = function(){
				item.Source ==="Rotten Tomatoes";
			})
		if(rottenTomatoesRating == undefined){
			rottenTomatoesRating = "Rating Not Found"
		}else{
			rottenTomatoesRating = rottenTomatoesRating.Value;
		}

		console.log("Title of the Movie: " + resp.data.Title);
		console.log("Director of the Movie: " + resp.data.Director);
		console.log("Released year: " + resp.data.Year);
		console.log("Released Date: " + resp.data.Released);
		console.log("Name of Actors: " + resp.data.Actors);
		console.log("Movie Language: " + resp.data.Language);
		console.log("Country: " + resp.data.Country);
		console.log("Summary: " + resp.data.Plot);
		console.log("Rating: " + resp.data.imdbRating);
		console.log("Rotten Tomatoes Rating: "+ rottenTomatoesRating);
		
	})
	

}
function doIt(){
	console.log('function doIt triggered')

}

switch(process.argv[2].toLowerCase()){
	case 'movie-this':
	movieThis();
	break;

	case 'spotify-this-song':
	spotifyThis();
	break;

	case 'concert-this':
	concertThis();
	break;

	case 'do-what-it-says':
	doIt();
	break;

}

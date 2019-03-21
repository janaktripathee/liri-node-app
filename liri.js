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
	nameOfBand= process.argv.slice('3').join(' ').trim();
	var url = "https://rest.bandsintown.com/artists/"+ nameOfBand + "/events?app_id=codingbootcamp";
	request(url, function(error, resp, body){
		if(JSON.parse(body).length==0){
			console.log('There is no events for '+ nameOfBand);
		}
		for (var i=0;i<JSON.parse(body).length;i++){
			var location= JSON.parse(body)[i].venue.country;
			var venue = JSON.parse(body)[i].venue.name;
			var date=moment(JSON.parse(body)[i].datetime).format("MM/DD/YYYY");
			console.log("Venue location is in " + location +','+ JSON.parse(body)[i].venue.city+"is the city");
			console.log("Venue Name is : "+ venue);
			console.log("Event is on : "+ date);
		}
	})

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

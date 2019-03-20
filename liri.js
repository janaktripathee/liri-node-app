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
		//fs.appendFileSync('log.txt',nameOfArtist);
	})
}
function concertThis(flag, str){
	//ameOfBand= process.argv

	console.log('function concertThis triggered')

}
function movieThis(){
	console.log('function movieThis triggered')

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

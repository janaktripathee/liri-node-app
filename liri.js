require('dotenv').config();
var fs = require('fs');
var request = require('request');
var moment = require('moment')
var Spotify = require('node-spotify-api');
var axios = require('axios');
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify);

function spotifyThis(flag, str){
	console.log(str);
	var songTitle = process.argv.slice(3).join(' ').trim();
	console.log(songTitle, 'song');
	if (flag){
		songTitle = str;
	}
	if(songTitle==''){
		songTitle = "And when i Die";
	}

	spotify.search(
	{
		type:'track',
		query:songTitle
	},function(error, resp){
		console.log(resp);
		if(error){
			return console.log("Error Message" + error);
		}
		var nameOfArtist = '';
		for(var i =0; i <resp.tracks.items[0].nameOfArtist.length; i++ ){
			nameOfArtist += resp.tracks.items[0].nameOfArtist[i].name;
		}
		console.log(nameOfArtist);
		//fs.appendFileSync('log.txt',nameOfArtist);
	})
}
function concertThis(flag, str){

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

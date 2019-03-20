require('dotenv').config();
var fs = require('fs');
var request = require('request');
var Spotify = require('node-spotify-api');
var keys = require('./keys.js');

var spotify = new Spotify(keys.spotify);


console.log(keys);
var request = require('request')
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var keys = require("./keys.js");
var fs = require('fs');
console.log("here",keys)

if (process.argv[2] ==='my-tweets'){
	console.log('use twitter')
	var client = new Twitter({
	  consumer_key: keys.consumer_key,
	  consumer_secret: keys.consumer_secret,
	  access_token_key: keys.access_token_key,
	  access_token_secret: keys.access_token_secret
	});
	 
	var params = {screen_name: 'nodejs'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	    console.log(tweets);
	  }
	});

}else if(process.argv[2] ==='spotify'){
	console.log('use spotify')
	var spotify = new Spotify({
	  id: "b9cec06cc4394af1850e82c52d504a15",
	  secret: "5361daacabef4b11accd473e70cb09cc"
	});
	 
	spotify.search({ type: 'track', query: process.argv[3] }, function(err, data) {
	  if (err) {
	    return console.log('Error occurred: ' + err);
	  }
	 
	console.log(data.tracks); 
	});
}else if(process.argv[2] ==='movie-this'){
	console.log("do the movie stuff");
	var urlHit = "http://www.omdbapi.com/?t=" + process.argv[3] + "&y=&plot=full&tomatoes=true&apikey=40e9cece";

  	request(urlHit, function(error, response, body) {
  		var cleanData = JSON.parse(body)
  		console.log('Title:', cleanData.Title)
  		console.log('Year:', cleanData.Year)
  		console.log('Rated:', cleanData.Rated)
  		console.log('tomatoRating:', cleanData.tomatoRating)
  		console.log('Country:', cleanData.Country)
  		console.log('Language:', cleanData.Language)
  		console.log('Plot:', cleanData.Plot)
  		console.log('Actors', cleanData.Actors)
	})

}else if(process.argv[2] === 'do-what-it-says'){
	console.log("do what is says")
	fs.readFile("random.txt",'utf8', function(err,data){
		console.log(data)		
	})
}


 



 

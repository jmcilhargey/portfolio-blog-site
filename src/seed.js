"use strict";

var Projects = require("./models/projects");

var projects = [
	{
		"title": "Local Nightlife",
		"link": "https://local-nightlife.herokuapp.com/",		
		"pic": "https://dl.dropboxusercontent.com/u/63260308/Portfolio/Images/nightlife_app.png",
		"desc": "Uses Yelp's API and Google OAuth to allow users to search for events by city. Authenticated users can to RSVP for events and see a list of other attendees. Built on the MEAN stack."
	},
	{
		"title": "Gold Medals",
		"link": "https://olympic-medals.herokuapp.com/",		
		"pic": "https://dl.dropboxusercontent.com/u/63260308/Portfolio/Images/olympics.png",
		"desc": "Olympic medal tracker built with the MEAN stack that stores gold medal winners by event. A d3.js graph breaks down the winners by country and date as the games develop"
	},
	{
		"title": "Easy Polls",
		"link": "https://voting-polling-app.herokuapp.com/",		
		"pic": "https://dl.dropboxusercontent.com/u/63260308/Portfolio/Images/votingapp.png",
		"desc": "An app to create, vote, and share polls on any topic. A d3.js bar chart that gives a breakdown of votes for each poll. Users can also randomly generate polls Built on the MEAN stack with authentication through Github."
	},
	{
		"title": "Simon",
		"link": "http://codepen.io/jmcilhargey/pen/VexKqo",		
		"pic": "https://dl.dropboxusercontent.com/u/63260308/Portfolio/Images/simon.png",
		"desc": "The classic game where the player must replicate the computer's turn. Make it to 15 turns to win! Built with HTML/CSS, Javascript."		
	},
	{
		"title": "Tic Tac Toe",
		"link": "http://codepen.io/jmcilhargey/pen/XXebga",		
		"pic": "https://dl.dropboxusercontent.com/u/63260308/Portfolio/Images/tic-tac-toe.png",
		"desc": "An unbeatable version of tic-tac-toe that uses the minimax algorithm to calculate the best move. Try it! Built with HTML/CSS, Javascript."		
	},	
	{
		"title": "Stories",
		"link": "https://stories-railsapp.herokuapp.com/",		
		"pic": "https://dl.dropboxusercontent.com/u/63260308/Portfolio/Images/stories-screen.jpeg",
		"desc": "A travel journal app built on Rails that stores sign ups in a database."
	},
	{
		"title": "Bass Music",
		"link": "https://bassmusic-railsapp.herokuapp.com/",		
		"pic": "https://dl.dropboxusercontent.com/u/63260308/portfolio/images/bass-music-screen.jpeg",
		"desc": "A music catalog built on Rails that uses associations to show albums and tracks."		
	},
	{
		"title": "Newstand",
		"link": "https://newstand-railsapp.herokuapp.com/",		
		"pic": "https://dl.dropboxusercontent.com/u/63260308/Portfolio/Images/newsapp-screen.jpeg",
		"desc": "A news posting project built in Rails with sign up, login, and role based authorization for posting and editing articles."		
	},
	{
		"title": "Calculator",
		"link": "http://codepen.io/jmcilhargey/pen/yegaao",		
		"pic": "https://dl.dropboxusercontent.com/u/63260308/Portfolio/Images/calculator.png",
		"desc": "A simple calculator that stores values and uses a switch statement. Built with HTML/CSS, Javascript (jQuery)."		
	},
	{
		"title": "Pomodoro Timer",
		"link": "http://codepen.io/jmcilhargey/full/dGNWOM/",		
		"pic": "https://dl.dropboxusercontent.com/u/63260308/Portfolio/Images/pomodoro.png",
		"desc": "Work in intervals with the pomodoro technique. Built on HTML/CSS, Javascript (AngularJS)."		
	},
	{
		"title": "Bookmarks",
		"link": "https://bookmarks-railsapp.herokuapp.com/",		
		"pic": "https://dl.dropboxusercontent.com/u/63260308/Portfolio/Images/bookmarks-screen.jpeg",
		"desc": "A book review site built on Rails that pulls reviews based on book associations."		
	},
	{
		"title": "Twitch Coder Stream",
		"link": "http://codepen.io/jmcilhargey/full/zrzWOb/",		
		"pic": "https://dl.dropboxusercontent.com/u/63260308/Portfolio/Images/twitch-stream.png",
		"desc": "An app that uses the Twitch API to list and link programming streamers. Built with HTML/CSS, Javscript (AngularJS)."
	},
		{
		"title": "Image Search Tool",
		"link": "https://image-search-tool.herokuapp.com/",		
		"pic": "https://dl.dropboxusercontent.com/u/63260308/Portfolio/Images/imagesearchtool.png",
		"desc": "A microservice using Google Image Search API to return images, paginate, and save history to MongoDB."
	},
		{
		"title": "URL Shortener",
		"link": "https://url-service.herokuapp.com/",		
		"pic": "https://dl.dropboxusercontent.com/u/63260308/Portfolio/Images/urlshortener.png",
		"desc": "A microservice that shortens URLs using a random character generator and saves new URL route to MongoDB."
	},
		{
		"title": "Check File Size",
		"link": "https://filesize-service.herokuapp.com/",		
		"pic": "https://dl.dropboxusercontent.com/u/63260308/Portfolio/Images/filesizeservice.png",
		"desc": "A microservice that checks the size of a file upload and returns JSON."
	},
		{
		"title": "Convert Time Stamp",
		"link": "https://timestamp-service-api.herokuapp.com/",		
		"pic": "https://dl.dropboxusercontent.com/u/63260308/Portfolio/Images/timestampservice.png",
		"desc": "A microservice that accepts date in standard or UNIX format and returns JSON with both."
	},	{
		"title": "Request Header",
		"link": "https://header-parser-microservice.herokuapp.com/",		
		"pic": "https://dl.dropboxusercontent.com/u/63260308/Portfolio/Images/requestheaderservice.png",
		"desc": "A microservice that returns JSON with client header information."
	}
];

projects.forEach(function(project, index) {
	Projects.find({ "title": project.title }, function(err, projects) {
		if (!err && !projects.length) {
			Projects.create(project);
		}
	});
});
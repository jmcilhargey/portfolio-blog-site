"use strict";

var Projects = require("./models/projects");

var projects = [
	{
		"title": "Textbook Trader",
		"link": "https://book-trader.herokuapp.com",
		"pic": "../images/book-trader.png",
		"desc": "A web app built from the ground up that allows authenticated users to search and share books found with the Google Books API. Users can search and sort the book library and propose trades. Users can customize settings to edit personal details and review, accept, decline, and cancel trades. Books are swapped in-app and users receive notice. Signup and login via JWT based hash/salt authentication and Passport Facebook authentication. HTML/CSS, Javascript, React, React Router, Node, Express, Mongoose, MongoDB, OAuth, HTTPS APIs, Webpack, Babel, Jest, Mocha."
	},
	{
		"title": "Stock Tracker w/ Twitter Stream",
		"link": "https://stock-charts.herokuapp.com/",
		"pic": "../images/stock-tracker.png",
		"desc": "A company tracking app that requests stock data from the Quandl Financial API and displays interactive charts and graphs generated with d3.js and HTML5 canvas. Users can overlay Twitter streaming data to explore relationship between company performance and Twitter sentiment over a period. HTML/CSS, Javascript, React, Node, Express, MongoDB, d3, Jest, Mocha."
	},
	{
		"title": "A Talented Slack Bot",
		"link": "https://www.joemcilhargey.com/articles/programming-a-talented-slack-bot-in-node/",
		"pic": "../images/slack-bot.png",
		"desc": "A Slack bot assistant that can fetch current news and stock prices, calculate distances and estimated travel times, get the local forecast, and call an Uber to pick you up. Node, WebSockets, HTTP/HTTPS, Google, Quandl, OpenWeather, and Uber APIs"
	},
	{
		"title": "Local Nightlife",
		"link": "https://local-nightlife.herokuapp.com/",
		"pic": "../images/nightlife_app.png",
		"desc": "An event finding app where users search for events by city with the Yelp API. Users can authenticate with Google to sign up for events and see other users who are going. Users can select events and most efficient route for walking or driving via the Google Directions API. HTML/CSS, Bootstrap, Javascript, Angular 1, Node, Express, MongoDB, Mongoose, OAuth1."
	},
	{
		"title": "Gold Medals",
		"link": "https://olympic-medals.herokuapp.com/",
		"pic": "../images/olympics.png",
		"desc": "Olympic medal tracker that stores gold medal winners by event. Users can break down the winners by country and event to see graphical results as the games develop. HTML/CSS, Javascript-ES6, d3, Angular 1, Node, Express, MongoDB, Mongoose, Redis."
	},
	{
		"title": "Tracking Leicester's Victory",
		"link": "https://www.joemcilhargey.com/articles/pathfinding-with-yelp-and-google-directions-apis/",
		"pic": "../images/epl-project.png",
		"desc": "A research project and tutorial built with d3.js tracks how Leicester City FC won the 2015-2016 Premier League. Interactive graphs show the relationship between goals, points, and goal differential over the course of the season. HTML/CSS, Javascript, d3"
	},
	{
		"title": "Easy Polls",
		"link": "https://voting-polling-app.herokuapp.com/",
		"pic": "../images/votingapp.png",
		"desc": "A polling app that allows authenticated users to create, vote, and share polls on any topic. Each poll can be voted on once and results can be viewed in graph format. Users can also randomly generate polls on a topic of choice. HTML/CSS, Bootstrap, Javascript, Angular, Node, Express, MongoDB."
	},
	{
		"title": "Image Search Tool",
		"link": "https://image-search-tool.herokuapp.com/",
		"pic": "../images/imagesearchtool.png",
		"desc": "A microservice API that allows users to access the Google Image Search API by keyword and view top images. Results are paginated and search history stored in DB. HTML/CSS, Bootstrap, Javascript, Node, Express, MongoDB."
	},
	{
		"title": "URL Shortener",
		"link": "https://url-service.herokuapp.com/",
		"pic": "../images/urlshortener.png",
		"desc": "A microservice API that shortens URLs via random character generation and stores route and original address in DB. HTML/CSS, Bootstrap, Javascript, Node, Express, MongoDB."
	},
	{
		"title": "Simon",
		"link": "http://codepen.io/jmcilhargey/pen/VexKqo",
		"pic": "../images/simon.png",
		"desc": "A replica of the classic game where the player must replicate the computer's turn. HTML/CSS, Bootstrap, Javascript, jQuery"
	},
	{
		"title": "Tic-Tac-Toe",
		"link": "http://codepen.io/jmcilhargey/pen/XXebga",
		"pic": "../images/tic-tac-toe.png",
		"desc": "An unbeatable version of tic-tac-toe that uses the minimax algorithm to calculate the best move. HTML/CSS, Bootstrap, Javascript, jQuery."
	},
	{
		"title": "Check File Size",
		"link": "https://filesize-service.herokuapp.com/",
		"pic": "../images/filesizeservice.png",
		"desc": "A microservice API that checks upload file size and returns JSON results. HTML/CSS, Bootstrap, Javascript, Node, Express, MongoDB."
	},
	{
		"title": "Convert Time Stamp",
		"link": "https://timestamp-service-api.herokuapp.com/",
		"pic": "../images/timestampservice.png",
		"desc": "A microservice API that accepts date in standard or UNIX format and returns JSON with both. HTML/CSS, Bootstrap, Javascript, Node, Express, MongoDB."
	},
	{
		"title": "Request Header",
		"link": "https://header-parser-microservice.herokuapp.com/",
		"pic": "../images/requestheaderservice.png",
		"desc": "A microservice API that returns JSON with client header information. HTML/CSS, Bootstrap, Javascript, Node, Express, MongoDB."
	},
	{
		"title": "Calculator",
		"link": "http://codepen.io/jmcilhargey/pen/yegaao",
		"pic": "../images/calculator.png",
		"desc": "A simple in-browser calculator that performs basic math operations. HTML/CSS, Javascript, jQuery."
	},
	{
		"title": "Pomodoro Timer",
		"link": "http://codepen.io/jmcilhargey/full/dGNWOM/",
		"pic": "../images/pomodoro.png",
		"desc": "A timer where users can set intervals for work and break times. HTML/CSS, Javascript, AngularJS."
	},
	{
		"title": "Stories",
		"link": "https://stories-railsapp.herokuapp.com/",
		"pic": "../images/stories-screen.jpeg",
		"desc": "A travel journal app that stores sign ups in a database. HTML/CSS, Javascript, jQuery, Ruby on Rails."
	},
	{
		"title": "Bass Music",
		"link": "https://bassmusic-railsapp.herokuapp.com/",
		"pic": "../images/bass-music-screen.jpeg",
		"desc": "A music catalog built on Rails that uses associations to show albums and tracks. HTML/CSS, Javascript, jQuery, Ruby on Rails."
	},
	{
		"title": "Newstand",
		"link": "https://newstand-railsapp.herokuapp.com/",
		"pic": "../images/newsapp-screen.jpeg",
		"desc": "A news posting project built in Rails with sign up, login, and role based authorization for posting and editing articles. HTML/CSS, Javascript, jQuery, Ruby on Rails."
	},
	{
		"title": "Bookmarks",
		"link": "https://bookmarks-railsapp.herokuapp.com/",
		"pic": "../images/bookmarks-screen.jpeg",
		"desc": "A book review site built on Rails that pulls reviews based on book associations. HTML/CSS, Javascript, jQuery, Ruby on Rails."
	},
	{
		"title": "Twitch Coder Stream",
		"link": "http://codepen.io/jmcilhargey/full/zrzWOb/",
		"pic": "../images/twitch-stream.png",
		"desc": "An app that uses the Twitch.tv API to list and link programming streamers. HTML/CSS, Javascript, AngularJS."
	}
];

projects.forEach(function(project, index) {
	Projects.find({ "title": project.title }, function(err, projects) {
		if (!err && !projects.length) {
			Projects.create(project);
		}
	});
});

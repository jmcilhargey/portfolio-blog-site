"Building Space Invaders in C++"

Like many kids, I spent many hours and much of my spare change chasing high scores on classic games like Pacman, Donkey Kong, and Space Invaders. 

Space Invaders was released in 1978 and became one of the most popular games of all time. Recently Google exposed it's neural network DeepMind to a number of classic games including Space Invaders. It wasn't long before the software learned to play the game better than any human player.

The process of building a game can be really fun and instructive. We know the action and features of the game, but we don't know the code under the hood. Let's try to reverse engineer the game and build a functional version using C++.

We'll start by making a list of the essential features needed to create a functional game. It's important to scope out the elements of the game so that we understand what we're building and also what we're not building. This will help us stay focused and select the right structure and function for our program.

Map - A predefined area with x and y coordinates where all game action takes place.

Player - A ship at the bottom of the screen that can move horizontally.

Bullet - Fired by the player. Can hit destroy the alien with a hit. One shot at a time allowed.

Aliens - A set number of aliens that move horizontally and move down one row each time they hit a border. With each defeated alien, the group speeds up.

Defense bunkers - Protect the player from alien hit. Destroyed if struck by a bullet.

Win/Lose/Exit condition - If we defeat the aliens, we win. If the aliens reach the bottom, we lose. We can also leave the game.




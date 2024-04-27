import kaboom from "kaboom"

// initialize context
kaboom();

// load assets
loadSprite("bird", "sprites/bird.png");
loadSprite("bg", "sprites/bg.png");
loadSprite("pipe", "sprites/pipe.png");

// load sounds
loadSound("jump", "sounds/jump.mp3");
loadSound("bruh", "sounds/bruh.mp3");
loadSound("pass", "sounds/pass.mp3");

screen("game", () => {
	const PIPE_GAP = 140;
	let score = 0;
	setGravity(1600);

	add([
		sprite("bg", {
			width: width(),
			height: height()
		})
	]);

	const scoreText = add([text(score), pos(12, 12)]);
	
	const player = add([
		sprite("bird"),
		scale(1.2),
		pos(100, 50),
		area(),
		body(),
	]);

});

scene("gameover", () => {});

go("game");
let x;
let y;

let xspeed;
let yspeed;

let fly;

function preload() {
    fly = loadImage("../imgs/butterfly.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    x = 400;
    y = 300;
    xspeed = 10;
    yspeed = 10;
}

function draw() {
    background(0);

    image(fly, x, y)
    console.log('im so tired')
    
    if (x == windowWidth || x <= 0){
        xspeed = -xspeed;
    }
    if (y == windowHeight || y <= 0){
        yspeed = -yspeed;
    }

    x = x + xspeed;
    y = y + yspeed;
}

function randomLetters() {
    line = ""
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    for (let i = 1; i <= 11; i++) {
        line += chars.charAt(Math.floor(Math.random() * 52));
    }
    return line
}

for (let i = 0; i < 6; i++){
    console.log(randomLetters())
}
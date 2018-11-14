// write your code here: http://www.dukelearntoprogram.com/course1/example/index.php

//The green screen algorithm
var fgImage = new SimpleImage("drewRobert.png");
var bgImage = new SimpleImage("dinos.png");
var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
for (var pixel of fgImage.values()){
    if (pixel.getGreen() === 255){
        var x = pixel.getX();
        var y = pixel.getY();
        var bgPixel = bgImage.getPixel(x,y);
        output.setPixel(x, y, bgPixel);
    }
    else {var x = pixel.getX();
        var y = pixel.getY();
        var bgPixel = fgImage.getPixel(x,y);
        output.setPixel(x, y, bgPixel);
    }
}
print (fgImage);
print (bgImage);
print (output);

//  A program that draws a square 200 pixels by 200 pixels and that looks like this square with colors red (red value 255), green (green value 255), blue (blue value 255) and magenta (red value 255 and blue value 255). All other RGB values are set to 0.
var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth()/2){
    px.setRed(255);
  }
  if (y>img.getHeight()/2){
    px.setBlue(255);
  }
  if (x > img.getWidth()/2 && y<img.getHeight()/2)
    {px.setGreen(255);
  }
}
print (img);

// Returning pixel with its red, green, and blue components changed so that the pixel’s color is black.
var image = new SimpleImage("usain.jpg");
for ( var pixel of image.values()) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
print(image);

// A function named setBlack2 that has one parameter image (representing a single image) and returns all pixerls of the image with its red, green, and blue components changed so that the image’s color is black.
function setBlack2(name)
{
var image = new SimpleImage(name);
for ( var pixel of image.values()) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
print(image);
}
setBlack2("usain.jpg");

//A function to change a single pixel to black
function setBlack(pixel){
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
    return false;
}

// A function named addBorder2. This function will add a black border to an image (using setBlack function)
function addBorder2 (imageWithBorder, thicknessOfBorder){
var image = new SimpleImage(imageWithBorder);
for ( var pixel of image.values())
{
  var x = pixel.getX();
  var y = pixel.getY();
    if (x <= thicknessOfBorder || y<= thicknessOfBorder || x >= image.getWidth() - thicknessOfBorder || y>= image.getHeight() - thicknessOfBorder)
    {
        setBlack(pixel)
    }
}
print(image);
}
addBorder2 ("rodger.png", 20)

// Adding a black border to an image
var img = new SimpleImage("hilton.jpg");
for ( var pixel of img.values())
{
  var x = pixel.getX();
  var y = pixel.getY();
    if (x <= 10 || y<= 10 || x >= img.getWidth() - 10 || y>= img.getHeight() - 10)
    {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
}
print (img);

// A function named addBorder. This function will add a black border to an image
function addBorder (imageWithBorder, thicknessOfBorder){
var image = new SimpleImage(imageWithBorder);
for ( var pixel of image.values())
{
  var x = pixel.getX();
  var y = pixel.getY();
    if (x <= thicknessOfBorder || y<= thicknessOfBorder || x >= image.getWidth() - thicknessOfBorder || y>= image.getHeight() - thicknessOfBorder)
    {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
}
print(image);
}
addBorder ("rodger.png", 20)


var x = 3;
var y = 4;
var z = x + 2*y;

var x = 3;
var y = 2;
y = x;
print (x);
print (y);

var image = new SimpleImage("smallhands.png");
print (image);

print (image.getWidth());
print (image.getHeight());
print (image.getPixel(0, 0));
print (image.getRed(0,0), image.getGreen(0,0), image.getBlue(0,0));
for ( var pixel of image.values()) {
    if (pixel.getX() < image.getWidth()/3) {
        pixel.setRed(255);
    }
    if (pixel.getX() > image.getWidth()/3*2) {
        pixel.setBlue(255);
    }
        if (pixel.getX() > image.getWidth()/3 && pixel.getX() < image.getWidth()/3*2) {
        pixel.setGreen(255);
    }
 
}
print(image);


var image = new SimpleImage("smallpanda.png");
print (image);

print (image.getWidth());
print (image.getHeight());
print (image.getPixel(0, 0));
print (image.getRed(0,0), image.getGreen(0,0), image.getBlue(0,0));
for ( var pixel of image.values()) {
    if (pixel.getX() <= image.getWidth()/3) {
        pixel.setRed(255);
    }
    if (pixel.getX() >= image.getWidth()/3*2) {
        pixel.setBlue(255);
    }
        if (pixel.getX() >= image.getWidth()/3 && pixel.getX() <= image.getWidth()/3*2) {
        pixel.setGreen(255);
    }
 
}
print(image);


function square(x){
	var ans = x*x;
	return ans;
}


function cube(x){
	var anscube = x*x*x;
	return anscube;
}

print (square(5), cube(10));

var y1 = square(11);
var y2 = cube(11);

print (y1, y2);

var img = new SimpleImage (200,200);
print (img.getRed(0,0), img.getGreen(0,0), img.getBlue(0,0));
print(img);
for ( var pixel of img.values()) {
    var newG = 255 - pixel.getGreen();
    var newR = 255 - pixel.getRed();
    pixel.setGreen(newG);
    pixel.setRed(newR);
}
print (img.getRed(0,0), img.getGreen(0,0), img.getBlue(0,0));
print(img);


var image = new SimpleImage("usain.jpg");
print (image);

for ( var pixel of image.values()) {
    y = pixel.getGreen();
        pixel.setGreen(pixel.getRed);
        pixel.setRed(y);
    }

print(image);

var image = new SimpleImage("duke_blue_devil.png");
for ( var pixel of image.values()) {
    if (pixel.getRed() < 200) {
        pixel.setRed(0);
        pixel.setGreen(255);
        pixel.setBlue(100);
    }
}
print(image);

var image = new SimpleImage("duke_blue_devil.png");
for ( var pixel of image.values()) {
    if (pixel.getRed() === 0) {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
}
print(image);
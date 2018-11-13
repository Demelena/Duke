// write your code here
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


// Declare variables
var treePos_x
var cloudPos_x 
var cloudPos_y 
var cloudScale
var sunPos_x 


// Initialise variables
    treePos_x = 270
    cloudPos_x = 100
    cloudPos_y = 90
    cloudScale = 1.5
    sunPos_x = 430



function setup() 
{
    createCanvas(512,512);
    
}

function draw()
{
    background(150,150,255);
    
    //sun
    //here below i use the variables i created in to create the shape's attributes.

    noStroke();
    fill(255,150,0);
    ellipse(sunPos_x,150,100,100);
    
    //tree
    //here below i use the variables i created in to create the shape's attributes.

    stroke(0);
    fill(180,80,0);
    ellipse(treePos_x,360,40,100);
    fill(0,150,0);
    ellipse(treePos_x,300,120,120);
    
    //cloud
    noStroke();
    fill(255);
    //here below i use the variables i created in to create the shape's attributes.
    ellipse(cloudPos_x ,cloudPos_y, 50 * cloudScale, 50 * cloudScale);
    ellipse( cloudPos_x + 30 * cloudScale,cloudPos_y,30 * cloudScale,30 * cloudScale);
    ellipse(cloudPos_x + 50 * cloudScale,cloudPos_y ,20 * cloudScale,20 * cloudScale );
    
    //ground
    fill(200,130,0);
    rect(0,400,width,112);
    

}



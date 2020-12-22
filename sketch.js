var fr, mr;

function setup() {
 createCanvas(1200,800);

  fr = createSprite(200, 200, 50, 50);
  fr.shapeColor ="green";
  fr.debug = true;

  mr = createSprite(500, 200, 70, 70);
  mr.shapeColor ="green"; 
  mr.debug = true; 
}

function draw() {
 background(255,255,255);

 mr.x = World.mouseX;
 mr.y = World.mouseY;

 if(mr.x - fr.x <= mr.width/2 + fr.width/2 && fr.x - mr.x <= fr.width/2 + mr.width/2 && mr.y - fr.y <= mr.height/2 + fr.height/2 &&  fr.y - mr.y <= fr.height/2 + mr.height/2 ){
   fr.shapeColor ="red";
    mr.shapeColor ="red";
   } 
 else { 
   fr.shapeColor ="green";
   mr.shapeColor ="green";
   } 
               
 drawSprites(); }


  var player;
   var nonPlayer;
  var maze1;







function preload(){
bgImage = loadImage("Bg.jpg");
}



function setup(){
    createCanvas(1400, 800);
     maze1= createSprite(50, 470,500,20);
    maze1.shapeColor="brown";
     maze2 = createSprite(300,525,20,130);
    maze2.shapeColor="brown";
     maze3 = createSprite(644,440,20,160);
    maze3.shapeColor="brown";
     maze4 = createSprite(634,480,200,20);
    maze4.shapeColor="brown";
      maze5 = createSprite(760,545,250,20);
    maze5.shapeColor="yellow";
      maze6 = createSprite(875, 590,20,100);
    maze6.shapeColor="blue";
      maze7 = createSprite(995,630,230,20);
    maze7.shapeColor="red";
      maze9 = createSprite(1300,780,20,100);
    maze9.shapeColor="black";
      maze10 = createSprite(950,800,20,70);
    maze10.shapeColor="purple";
      maze11 = createSprite(910,755,100,20);
    maze11.shapeColor="pink";
      maze12 = createSprite(524, 535,20,130);
    maze12.shapeColor="white";
      maze13 = createSprite(370,680,550,20);
    maze13.shapeColor="violet";
      maze14 = createSprite(100,720,20,100);
    maze14.shapeColor="magenta";
      maze15= createSprite(1100,730,420,20);
    maze15.shapeColor="lightblue";

      maze17= createSprite(405, 590,230,20);
    maze17.shapeColor="brown";
      maze18= createSprite(795,510,20,50);
    maze18.shapeColor="brown";
      maze19= createSprite(570,750 ,20,50);
    maze19.shapeColor="brown";
      maze20= createSprite(685,720,20,70);
    maze20.shapeColor="brown";
      maze21 = createSprite(1100,675,20,90);
    maze21.shapeColor="brown";
     maze22= createSprite(725,625,20,50);
     maze22.shapeColor = "brown";


     player = createSprite(80, 450, 20, 20);

     nonPlayer = createSprite(20, 450, 20, 20);
     nonPlayer2 = createSprite(582, 545, 20, 20);
     nonPlayer3 = createSprite(1170, 700, 20, 20);


}



function draw(){
background(bgImage);
drawSprites();
}




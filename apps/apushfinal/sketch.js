var w = window.innerWidth-20;
var h = window.innerHeight-20;

//Status bar
window.launching = 0;
var statusHeight = 200;
var statusWidth = 70;

var indicatorHeight = 100;
var indicatorWidth = statusWidth;

var temp = 0;
var wind = 0;

var changeSpeed = 0.006;

var count1 = 0;
var count2 = 230;

var redNoise;
var blueNoise

//Diaglogue area
window.dialogue="Preparing to launch..."
window.altitude = 0;

var button;// = createButton('LAUNCH');

let zekton;

//shuttle variables
let img;
let reagan;

let imgURL1 = "https://raw.githubusercontent.com/JP-Vela/homeworkApp/master/shuttle2.png?token=AGASEBX4NAJAMM2PHCW7JRTAUK24M";
let imgURL2 = "https://image.flaticon.com/icons/png/512/124/124584.png";
let imgURL3 = "https://raw.githubusercontent.com/JP-Vela/homeworkApp/master/shuttle3.png?token=AGASEBV2I7CYPQMACDNSXI3AUK3HC";

let imgURL4 = "https://raw.githubusercontent.com/JP-Vela/jp-vela.github.io/master/apps/apushfinal/assets/8bit%20shuttle2.png";
//8bit

let reaganURL = "https://toppng.com/uploads/preview/ronald-reagan-11549009525umxpyjjn7l.png";

var rocketSize = 250;
//var rocketSize = 190; //8bit
var rocketTail = 26;


var shuttleCoords = {


shuttleX: 0,
shuttleY: 0,
speed:8
}


//var backgroundImgUrl = "https://i0.wp.com/www.tokkoro.com/picsup/5709841-cosmos-wallpapers.jpg";
var backgroundImgUrl = "https://2.bp.blogspot.com/-af7h99sy1Wc/UwJGw_6yoaI/AAAAAAAAFBw/Dpra4P5Pgq4/s1600/MAC_Space_Background.jpg";
//var backgroundImgUrl = "https://earthsky.org/upl/2020/01/Earth-atmosphere-space-e1578380239539.jpg";

var backgroundIMG;

function preload() {
  img = loadImage(imgURL3);
  reagan = loadImage(reaganURL);
  zektonUrl = "https://jp-vela.github.io/apps/apushfinal/assets/zekton.ttf";
  //zektonUrl = "http://db.onlinewebfonts.com/t/e96bcdc01bcbbb755b76df5a8a0b3e08.ttf";
  zekton = loadFont(zektonUrl);


  backgroundIMG = loadImage(backgroundImgUrl);
}



















//--------------------------------------------------------
var settings = {
  meteor: {
     elements: [],
     size: 13,
     theta: Math.PI/7, //45 deg (0 is down)
     randomTheta: Math.PI/60, //±3 deg
     speed: 20,
     trail: {
        show: true, //Enable trails
        initial: 16, //How wide the trail is
        length: 90, //How long the trail is
        opacity: 128
     },
     create: function(c) {
        settings.meteor.elements.push(new Meteor(c));
     },
     draw: function() {
        for(var i = 0; i < settings.meteor.elements.length; i++) {
           settings.meteor.elements[i].move();
           if(settings.meteor.elements[i].remove) {
              settings.meteor.elements.splice(i, 1);
           }
        }
     }
  },
  general: { /*C&P from old project*/
     default: "white",
     colors: {
        "red": {
           fill:[216,51,74],
           stroke:[191,38,60]
        },
        "blue": {
           fill:[93,156,236],
           stroke:[74,137,220]
        },
        "yellow": {
           fill:[255,206,84],
           stroke:[246,187,66]
        },
        "green": {
           fill:[46,204,113],
           stroke:[42,186,102]
        },
        "white": {
           fill:[245,247,250],
           stroke:[230,233,237]
        }
     }
  }
}

function Meteor(_c) {
  this.x = random(-1*windowHeight,windowWidth);
  this.y = settings.meteor.size * -0.5;
  this.px = this.x;
  this.py = this.y;
  this.c = _c == "default" ? settings.general.default : _c;
  
  //Randomness so it's more interesting
  this.r = settings.meteor.theta + random(-10 * settings.meteor.randomTheta, 10 * settings.meteor.randomTheta)/10;
  this.d = 0;
  this.remove = false; //request object removal
  
  this.move = function(){
     //Location of the meteor
     this.px = this.x + Math.sin(this.r)*this.d;
     this.py = this.y + Math.cos(this.r)*this.d;
     
     stroke(0,0,0,0);
     //Trail
     if(settings.meteor.trail.show) {
        fill(settings.general.colors[this.c].fill[0],settings.general.colors[this.c].fill[1],settings.general.colors[this.c].fill[2], settings.meteor.trail.opacity);
        beginShape();
        vertex(this.x + Math.sin(this.r)*(this.d-settings.meteor.trail.length), this.y + Math.cos(this.r)*(this.d-settings.meteor.trail.length));
        var i_r = 90 + this.r;
        vertex(this.px + Math.sin(i_r)*settings.meteor.trail.initial/2, this.py + Math.cos(i_r)*settings.meteor.trail.initial/2);
        vertex(this.px - Math.sin(i_r)*settings.meteor.trail.initial/2, this.py - Math.cos(i_r)*settings.meteor.trail.initial/2);
        endShape();
     }
     
     //Meteor body
     fill(settings.general.colors[this.c].fill[0],settings.general.colors[this.c].fill[1],settings.general.colors[this.c].fill[2]);
     //stroke(settings.general.colors[this.c].stroke[0],settings.general.colors[this.c].stroke[1],settings.general.colors[this.c].stroke[2]);
     ellipse(this.px, this.py, settings.meteor.size, settings.meteor.size);
     
     // View this.d
     /*
     stroke(0,255,0);
     line(this.x, this.y, this.px, this.py);
     /**/
     //Progression
     this.d += settings.meteor.speed;
     this.remove = (this.py > windowHeight + settings.meteor.trail.length*2);
  }
}





//----------------------------------------------------


function setup() {

    createCanvas(w, h);
    noSmooth();
    setInterval(function(){
       settings.meteor.create("default"); //Can change this to a colour in settings.general.colours plus default
    }, 100);


    
    button = createButton('LAUNCH');
    
    button.position(width/2-button.width, 10);
    button.mousePressed(launch);
    button.style('font-size', 30 + 'px');
    button.style('font-family',"Verdana");
    button.style('background-color',color(0,90,255));
    button.style('border-color',color(255));
    button.style('color', color(255,255,255));

    setShuttleY(height-rocketSize+rocketTail);
    setShuttleX(width/2-rocketSize/2);

    frameRate(30);

  }
  
function draw() {
    
    //background(color(20,20,30));
    //image(backgroundIMG,0,0,w,h);
    background(backgroundIMG);
    settings.meteor.draw();
    
   // img.resize(window.rocketSize,window.rocketSize);

    updateStatus();

    updateShuttle();

    updateDiaglogue();

    window.altitude = Math.round((height-getShuttleY()) - rocketSize + rocketTail);
  }


  function launch(){
    var tempLaunch = 0;
    var tempDiag = "";

      if(redNoise>128 && greenNoise>128){
        tempLaunch=1;
        //good
        console.log("Perfect launch");
        window.dialogue="Perfect launch!";

      } else if(redNoise>128 && !(greenNoise>128)){
        tempLaunch=2;
        //Wind too bad
        console.log("Take off angle too high");
        window.dialogue="Take off angle too high!";

      } else if(!(redNoise>128) && greenNoise>128){
        tempLaunch=3;
        //Temperature too bad
        console.log("O-ring shattered");
        window.dialogue="An o-ring shattered!";
      }
      
      else {
        tempLaunch=4;
        console.log("Shuttle exploded on the platform");
        window.dialogue="Shuttle exploded on the platform!";
      }

      window.launching = tempLaunch;
  }


  function updateReagan(){
    reagan.resize(40,40);
    image(reagan,40,40);
  }


  function updateShuttle(){
    img.resize(window.rocketSize,window.rocketSize);
    //shuttleCoords.shuttleX=width/2-rocketSize/2;

    

    //Launch animation
    if(launching==1 && (getShuttleY()) > (-rocketSize) ){
      setShuttleY(getShuttleY()-shuttleCoords.speed);
    }

    if(launching==3 && (getShuttleY()) < (height+rocketSize)){
      setShuttleY(getShuttleY()-shuttleCoords.speed);
      shuttleCoords.speed-=0.1;
    }

    if(launching==2 && (getShuttleY()) < (height+rocketSize)){
      setShuttleY(getShuttleY()-shuttleCoords.speed);
      setShuttleX(getShuttleX()-shuttleCoords.speed);
      shuttleCoords.speed-=0.1;
    }


    image(img, getShuttleX(),getShuttleY());
    //console.log(shuttleCoords.shuttleY);
  }


  function updateDiaglogue(){
    //textFont(zekton);
    fill(255);
    text(window.dialogue,30,30);
    
    textSize(25);



    text(window.altitude,width-100,30);

    textSize(25);
    //textFont();
  }

  function updateStatus(){
    //console.log(this.launching);

    count1+=changeSpeed;

    count1%=100;
    
    count2+=changeSpeed;
    count2%=100;

    if(window.launching==0){
      redNoise = noise(count1) * 255;
      greenNoise = noise(count2) * 255;

    } /*else if (window.launching==1 && window.rocketSize>250){

      window.rocketSize=250;
      img.resize(window.rocketSize,window.rocketSize);

    }*/

    fill( redNoise,0,0);
    stroke(255);
    rect(10,h-statusHeight-20, indicatorWidth, indicatorHeight,10);


    fill(0,greenNoise,0);
    stroke(255);
    rect(10,h-statusHeight+indicatorHeight-10, indicatorWidth, indicatorHeight,10);

 

    stroke(0, 0, 150);
    fill(0);

    text("Temperature: "+Math.round(greenNoise/255*100)+"%", indicatorWidth+indicatorWidth/2, height-statusHeight+indicatorHeight*1.5);
    textSize(25);
    textFont(zekton);

    
    text("Wind: "+Math.round(redNoise/255*100)+"%", indicatorWidth+indicatorWidth/2, height-statusHeight+indicatorHeight/2);
    textSize(25);
    textFont(zekton);


  }


  function getShuttleY(){
    return shuttleCoords.shuttleY;
  }

  function getShuttleX(){
    return shuttleCoords.shuttleX;
  }

  function setShuttleY(val){
    shuttleCoords.shuttleY=val;
  }

  function setShuttleX(val){
    shuttleCoords.shuttleX=val;
  }














  //------------------------------------
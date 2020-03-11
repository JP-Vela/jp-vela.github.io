var p = document.getElementsByTagName('P');//.className ="darkMode";
var body = document.getElementsByTagName('BODY');//.className ="darkMode";

var colorMode = "light";
const dark="dark";
const light = "light";

function toggleMode(){
  if(colorMode==light){
    colorMode=dark;
  } else {
    colorMode=light;
  }
  console.log(colorMode);
  if(colorMode==light) {
    for(i =0; i<p.length;i++){
      p[i].classList.remove("darkMode");
      p[i].classList.add("lightMode");
    }

    for(i =0; i<body.length;i++){
      body[i].classList.remove("darkModeB");
      body[i].classList.add("lightModeB");
    }

  } else {
    for(i =0; i<p.length;i++){
      p[i].classList.remove("lightMode");
      p[i].classList.add("darkMode");
    }

    for(i =0; i<body.length;i++){
      body[i].classList.remove("lightModeB");
      body[i].className=("darkModeB");
    }

  }
}

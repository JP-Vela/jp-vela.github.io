dark = -1;
light = 1;
mode = dark;//set cookie default later


//Foreground and background mode ids
modeBackgroundId = "lightDarkB";
modeForegroundId = "lightDarkF" ;


//Corresponding styles for forground and background  of light mode and dark mode
darkBackgroundStyle = "rgb(30,30,38)";
lightBackgroundStyle = "rgb(255,255,255)";
darkForegroundStyle = "rgb(240,240,250)"
lightForegroundStyle = "rgb(30,30,40)";


toggleButton = document.getElementById("toggler");

//Toggle between light mode and dark mode
function toggleMode(){
    toggleButton = document.getElementById("toggler");
    if(mode == dark){
        mode = light;
        lightMode();
    } else {
        mode = dark;
        darkMode();
    }
}

toggleMode()
//Make the page light mode
function lightMode(){
    document.getElementById(modeBackgroundId).style.backgroundColor=lightBackgroundStyle;
    document.getElementById(modeForegroundId).style.color=lightForegroundStyle;

    toggleButton.className="fas fa-moon";
}

//Make the page dark mode
function darkMode(){
    document.getElementById(modeBackgroundId).style.backgroundColor=darkBackgroundStyle;
    document.getElementById(modeForegroundId).style.color=darkForegroundStyle;

    toggleButton.className="far fa-moon";
}
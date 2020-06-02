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
    try {
        document.getElementById(modeBackgroundId).style.backgroundColor=lightBackgroundStyle;
    } catch (err) { console.log(err);}
    
    try {
        document.getElementById(modeForegroundId).style.color=lightForegroundStyle;
    } catch (err) { console.log(err);}

    toggleButton.className="fas fa-moon";
}

//Make the page dark mode
function darkMode(){
    try {
        document.getElementById(modeBackgroundId).style.backgroundColor=darkBackgroundStyle;
    } catch (err) { console.log(err);}
    
    try {
        document.getElementById(modeForegroundId).style.color=darkForegroundStyle;
    } catch (err) { console.log(err);}

    toggleButton.className="far fa-moon";
}
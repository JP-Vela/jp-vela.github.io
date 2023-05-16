# OpenLight
An Open source Javascript library for easily adding dark mode to websites

### This guide is for version 1.2 the usage varies between 1.1 and 1.2 

# Installation Offline
#### Add the following line to your HTML file
```html
<script src="openLight.js"></script>
```
# Installation Online
#### Add the folling line to your HTML file
```html
<script src="https://codepen.io/jp-vela/pen/KKdLaax.js"></script>
```

# Usage In Manual Mode
Star by creating an instance of OpenLight with the following
```javascript
openLight = new OpenLight("manual");
```
Within the HTML you may change the default color schemes with the following
```javascript
//Changing the default colors
openLightColors = {
    darkBackgroundStyle: "rgb(30,30,38)",
    lightBackgroundStyle: "rgb(255,255,255)",
    darkForegroundStyle: "rgb(240,240,250)",
    lightForegroundStyle: "rgb(30,30,40)"
}
```

Run the initialization function with the following
```javascript
openLight.init();
```

To add dark/light mode to elements, add the prefered classes to the element.
Add dark mode to the the text foreground of an element with the following HTML
```html
<p class="lightDarkF light">Some text</p>
```

```html
<p class="lightDarkB light">Some text</p>
```

```html
<p class="lightDarkF dark">Some text</p>
```

```html
<p class="lightDarkB dark">Some text</p>
```

The lightDarkF class can be changed to lightDarkB or it could be added to add dark mode to the background.
The light class can be changed dark to change the color when in light mode.

To toggle between dark and light mode, run the toggleMode() with a button.
```html
<button onclick="toggleMode();">Toggle</button>
```

# Usage In Auto Mode
Star by creating an instance of OpenLight with the following
```javascript
openLight = new OpenLight("manual");
```
Within the HTML you may change the default color schemes with the following
```javascript
//Changing the default colors
openLightColors = {
    darkBackgroundStyle: "rgb(30,30,38)",
    lightBackgroundStyle: "rgb(255,255,255)",
    darkForegroundStyle: "rgb(240,240,250)",
    lightForegroundStyle: "rgb(30,30,40)"
}
```
You may use the following to use currently unsupported tags with OpenLight
```javascript
openLight.addBackgroundTag("some tag")//used for background
openLight.addForegroundTag("some tag")//used for foreground
```

You may use the following to make certain classes override OpenLight and not be changed with dark/light mode
```javascript
openLight.addOverrideByClassName("some class name");
```
Run the initialization function with the following
```javascript
openLight.init();
```
To toggle between dark and light mode, run the toggleMode() with a button.
```html
<button onclick="toggleMode();">Toggle</button>
```

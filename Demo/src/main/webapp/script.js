var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

var text = document.querySelector("p");

var body = document.querySelector(".bg");

const generateRandNum = () => Math.floor(Math.random() * Math.floor(255)).toString(16);

function RGBhex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;
  
    return "#" + r + g + b;
}

function changeGradient() {
    body.style.background ="linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    text.textContent = body.style.background + ";";
}

function Generate(){
    color1.value = RGBhex(generateRandNum(),generateRandNum(),generateRandNum());
    color2.value = RGBhex(generateRandNum(),generateRandNum(),generateRandNum());
    body.style.background ="linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    text.textContent = body.style.background + ";";
}

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){

	body.style.background = "linear-gradient(to right, "
	 + color1.value 
	 + "," 
	 + color2.value
	 + ")";

	 css.textContent = body.style.background + ";";

}

// function random_color() {
// 	var letters = '0123456789ABCDEF'.split('');
// 	var color = '#';
// 	for (var i = 0; i < 6; i++ ) {
// 		color += letters[Math.round(Math.random() * 15)];
// 	}
// 	return color;
// }

// function insertColor(){
// 	var randomColor = random_color();
// 	var randomColor1 = random_color();
// 	console.log(randomColor1);


// 	body.style.background = "linear-gradient(to right, "
// 	 + randomColor
// 	 + "," 
// 	 + randomColor1
// 	 + ")";

// 	 css.textContent = body.style.background + ";";

// }

// generateButton = document.createElement("button");
// body.appendChild(generateButton);
// generateButton.style.width = "50px";
// generateButton.style.height = "27px";
// generateButton.onclick = insertColor;


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


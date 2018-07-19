// onmouseover with EventListener and an anonymous function
var submitButton = document.getElementById("submit");
var resetButton = document.getElementById("reset");

submitButton.addEventListener("mouseover", function(){
	submitButton.style.textDecoration = "underline";
});

resetButton.addEventListener("mouseover", function(){
	resetButton.style.textDecoration = "underline";
});

// onmouseout without adding an eventListener. (much shorter :))
function mouseOut(obj){
	obj.style.textDecoration = "none";
}

// Media query for the submit and reset buttons - on smaller screen the text should get shorter
function shorterText(m) {
	if(m.matches){
		submitButton.setAttribute("value", "Send");
		resetButton.setAttribute("value", "Reset");
	} else {
		submitButton.setAttribute("value", "Send your choice");
		resetButton.setAttribute("value","Reset form");
	}
}

var x = window.matchMedia("(max-width: 1100px)"); // Media query
shorterText(x); // Call listener function with the media query
x.addListener(shorterText); // Attach listener at run time

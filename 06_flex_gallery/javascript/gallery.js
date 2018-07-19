
// Adding white border and changing the color to black on mouseover 
var innerDiv = document.getElementsByClassName("inner-div");

function mouseOver(d){  
	var i;
	for(i=0; i<innerDiv.length; i++) {
		if(innerDiv[i] == d){ //kogato v masiva e nameren konkretniq div this
			innerDiv[i].style.borderColor = "white";
			innerDiv[i].style.color = "black";
		} else {
			innerDiv[i].style.borderColor = "rgba(0,0,0,0.1)"; //vsi4ki ostanali el v masiva zapazvat default borderColor
		}
	}
}

function mouseOut(d) {
	var i;
	for(i=0; i<innerDiv.length; i++){
		innerDiv[i].style.borderColor = "rgba(0,0,0,0.1)";
		innerDiv[i].style.color = "gray";
	}
}

// // If an image is clicked it gets full width
// var myImages = document.getElementsByTagName("img");

// function clickImage(d){  
	// var i;
	// for(i=0; i<myImages.length; i++) {
		// if(myImages[i] == d){ //kogato v masiva e nameren konkretniq div this
			// myImages[i].style.width = "1000px";
			// myImages[i].style.zIndex = "2"; 
		// }
		// // } else {
			// // myImages[i].style.width = "100%";
			// // myImages[i].style.zIndex = "0"; //vsi4ki ostanali el v masiva zapazvat default borderColor
		// // }
	// }
// }
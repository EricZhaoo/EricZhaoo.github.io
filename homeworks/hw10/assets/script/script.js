// s1 outfit
let s1 = document.querySelector("#s1");/* get #s1 outfit */
/* the process: */
s1.onclick = function() {
	/* 1. hide #body (set display to none)
	/* 2. call the function you created to hide all the outfits 
	(remember: get the list of .outfit elements and use a for loop to hide each outfit)
	/* 3. show #o1 outfit (set display to block)*/
	document.querySelector("#body").style.display = "none";
	hideOutfits();
  	document.querySelector("#o1").style.display = "block";
};

let s2 = document.querySelector("#s2");
s2.onclick = function() {
  document.querySelector("#body").style.display = "none";
  hideOutfits();
  document.querySelector("#o2").style.display = "block";
};

let s3 = document.querySelector("#s3");
s3.onclick = function() {
  document.querySelector("#body").style.display = "none";
  hideOutfits();
  document.querySelector("#o3").style.display = "block";
};

let s4 = document.querySelector("#s4");
s4.onclick = function() {
  document.querySelector("#body").style.display = "none";
  hideOutfits();
  document.querySelector("#o4").style.display = "block";
};

let s5 = document.querySelector("#s5");
s5.onclick = function() {
  document.querySelector("#body").style.display = "none";
  hideOutfits();
  document.querySelector("#o5").style.display = "block";
};

// strip outfit
let strip = document.querySelector("#strip-button");/* get #strip-button */
strip.onclick = function() {
	/* call the function you created to hide all the outfits */
	/* show #body */
	hideOutfits();
  	document.querySelector("#body").style.display = "block";
};
function hideOutfits() {
	let outfits = document.getElementsByClassName("outfit");
	for (let i = 0; i < outfits.length; i++) {
	  outfits[i].style.display = "none";
	}
}
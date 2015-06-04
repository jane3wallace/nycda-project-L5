// L5 Week Three Lecture 1 Homework, 3 JS Functions

function nelsonFunction(){
    var meanArray = ["Ha Ha!", "Made", "you", "look!"];
    var text = "";
    var i;
    for (i = 0; i < meanArray.length; i++) {
        text += meanArray[i] + " ";
    }

    document.getElementById("silly");
    console.log(text);
}

function sadAlert(){
	alert("SadAlert is sad because nobody likes an alert. :(");
}

function oddEven(){
	num = document.getElementById('number').value;
	num = parseInt(num);
	if (isNaN(num)) {
	   console.log("What the what? That's not a number! Try again.");
	} else {
	  if (num === 0) {
	   	 console.log("Your number is zero. *Jazz hands*");
	  } else if (num%2) {
	     console.log("Your number is odd. Boom.");
	  } else {
	     console.log("Your number is even. Pow.");
	  }
	}
}
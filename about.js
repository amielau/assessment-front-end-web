let image = "https://images.unsplash.com/photo-1620447789324-fd300c136721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert("form submitted")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);




let img = document.querySelector("img");
img.src = image;

function complimentUser(event) {

	alert("you are so good at using our website!")
}

img.addEventListener('mouseover', complimentUser);
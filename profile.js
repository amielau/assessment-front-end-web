const color = document.querySelector('#color');
const place = document.querySelector('#place');
const ritual = document.querySelector('#ritual');

 function myFavColor(event) {
     
    alert('my favortie color is perriwinkle')
}

 color.addEventListener('click', myFavColor);



function myFavPlace(event) {

    alert("My favorite place is at home");
}

place.addEventListener('click', myFavPlace);




function myFavRitual(event) {

    alert("My favorite ritual is my bedtime routine")
}

ritual.addEventListener('click', myFavRitual);


// document.getElementById('#color').classList.add('colorClass');
// place.classList.add('placeClass');
// ritual.classList.add('ritualClass');

//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'




//resolve // QUESTION 1 here
const newHtml = document.createElement('div');
const divA_1 = document.querySelector('#a-1');
divA_1.appendChild(newHtml);

newHtml.classList.add("square");

newHtml.addEventListener("click", () => {
  if (newHtml.textContent == 'X') {
    newHtml.textContent = 'O';
  } else {
    newHtml.textContent = 'X';
  }
})



//------------------------Question 2 ---------------------------
//Write a JavaScript program to remove items from a dropdown list.
//In order to create the list we are providing you with the array bellow, those items are the ones you need to add to the dropdown list as the select options
//you also need to create a button that makes the remove action of the element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];


//resolve // QUESTION 2 here

const newList = document.createElement('select');
const divA_2 = document.getElementById('a-2');
divA_2.appendChild(newList);

for(let i = 0; i < colors.length; i++) {
  let option = document.createElement('option');
  option.value = colors[i];
  option.label = colors[i];
  newList.appendChild(option);
}

const removeButton = document.createElement('button');
removeButton.textContent = 'Remove'

divA_2.appendChild(removeButton);

removeButton.addEventListener('click', () => {
  const changeSectionOption = newList.remove(newList.selectedIndex)
})






//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)


const calculate_sphere = (e) => {
  e.preventDefault()
  const radius = document.querySelector('#radius').value;
  const volume = ((4/3) * Math.PI * Math.pow(radius, 3));
  const area = (4 * Math.PI * Math.pow(radius, 2));
  document.querySelector('#volume').value = volume;
  document.querySelector('#area').value = area;
 }

 
 window.onload = document.getElementById('MyForm').onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked

//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer. 


//resolve // QUESTION 4 here
const divA_4  = document.getElementById('a-4');

const q1 = document.querySelectorAll('.question-item')[0];
const q2 = document.querySelectorAll('.question-item')[1];
const q3 = document.querySelectorAll('.question-item')[2];

const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');

button1.textContent = "Hide Question 1";
button2.textContent = "Hide Question 2";
button3.textContent = "Hide Question 3";

divA_4.appendChild(button1)
divA_4.appendChild(button2)
divA_4.appendChild(button3)


button1.addEventListener('click', () => {
  if(q1.style.display == 'block') {
    button1.textContent = "Show Question 1";
    q1.style.display = 'none';
  } else {
    button1.textContent = "Hide Question 1";
    q1.style.display = 'block';
  }

})

button2.addEventListener('click', () => {
  if(q2.style.display == 'block') {
    button2.textContent = "Show Question 2";
    q2.style.display = 'none';
  } else {
    button2.textContent = "Hide Question 2";
    q2.style.display = 'block';
  }

})

button3.addEventListener('click', (e) => {
  e.preventDefault();
  if(q3.style.display == 'block') {
    button3.textContent = "Show Question 3";
    q3.style.display = 'none';
  } else {
    button3.textContent = "Hide Question 3";
    q3.style.display = 'block';
  }

})

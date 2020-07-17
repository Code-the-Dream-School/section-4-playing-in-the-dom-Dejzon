//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// all right our new element needs style. For that, assign to the new element the className 'square'!. Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'




//resolve // QUESTION 1 here
const newHtml = document.createElement('div');        //create new div element
const divA_1 = document.querySelector('#a-1');        //select div element with #a-1
divA_1.appendChild(newHtml);                          //add new element to HTML as a child of #a-1

newHtml.classList.add("square");                      //add some css class to newHtml
newHtml.classList.add("pointer");

newHtml.addEventListener("click", () => {             //on click event listener will check textContent of the new div
  if (newHtml.textContent == 'X') {                   // if is 'X' change it to 'O'
    newHtml.textContent = 'O';
  } else {                                            //if not 'X' change it to 'X'
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

const newList = document.createElement('select');            //create new select element
const divA_2 = document.getElementById('a-2');               //select div element with #a-2
divA_2.appendChild(newList);                                 //add new element to HTML as child of #a-2

for(let i = 0; i < colors.length; i++) {                    // loop through colors array
  let option = document.createElement('option');            //create new option element
  option.value = colors[i];                                 //add element of array as option element
  option.label = colors[i];
  newList.appendChild(option);                              //add option to selecet(dropdown)
}

const removeButton = document.createElement('button');      //create button element
removeButton.textContent = 'Remove';

divA_2.appendChild(removeButton);                           //add button to HTML

removeButton.addEventListener('click', () => {              //onclick button remove selected option element from dropdown 
  newList.remove(newList.selectedIndex)
})






//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)


const calculate_sphere = (e) => {
  e.preventDefault()              //had some strange behave from form; prevented with this line
  let radius = parseInt(document.querySelector('#radius').value);  //take value from input
  // console.log(radius, typeof(radius))
  if(!isNaN(radius)) {            //check if value is number; if true:
    const volume = ((4/3) * Math.PI * Math.pow(radius, 3));       //calculate volume
    const area = (4 * Math.PI * Math.pow(radius, 2));             //calculate sphere
    document.querySelector('#volume').value = volume.toFixed(2);  //change values of input fields with calculated results
    document.querySelector('#area').value = area.toFixed(2);
  }
  else {            //change values of input fields with the strings below
    document.querySelector('#volume').value = 'Radius must be NUMBER'   
    document.querySelector('#area').value = 'Radius must be NUMBER'
  }
 }

 
 document.getElementById('MyForm').onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked

//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer. 


//resolve // QUESTION 4 here
const divA_4  = document.getElementById('a-4');     //select div #a-4


for (let i = 0; i < 3; i++) {         //loop make 3 buttons
  let button = document.createElement('button');
  button.innerText = `Hide Question ${i + 1}`;        //add innerText to buttons
  button.addEventListener('click', () => {          //onclick button check if display of selected div is 'none'; if yes:
      if (document.getElementById(`a-${i + 1}`).parentNode.style.display === 'none') {
          document.getElementById(`a-${i + 1}`).parentNode.style.display  = 'block'         //change display to 'block'
          button.innerText = `Hide Question ${i + 1}`;                                      //change innerText to Hide...
      } else {                                                                              // if display = 'block'
          document.getElementById(`a-${i + 1}`).parentNode.style.display  = 'none'          //change display to 'none'
          button.innerText = `Show Question ${i + 1}`;                                      //change innerText to Show...
      }
   })

   divA_4.appendChild(button)       //add buttons to HTML
}
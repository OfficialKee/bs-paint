/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */
const gridWidth = 20;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/


let colors = document.querySelectorAll('.palette div')

let paintBrush = document.querySelector('.current-brush')

//console.log(paintBrush)

let paintCanvas = document.querySelectorAll('.canvas div');
//console.log(canvas)


let currentColor = document.querySelector('.current-brush');

// stretch goals-------------------------------

let webPage = document.querySelector('.app');

let darkMode = document.querySelector('.dark');

let background = document.querySelector('body');

let title = document.querySelector('.headings')

//alternate colors-------------------------------

let color1 = document.querySelector('.color-1')

let clear = document.querySelector('.clear');








// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)



/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.

 let mouseDown = false;
 let dark = false;

function chooseColors(){
  //loop, to cycle through the array of colors as they are clicked 
  //variable that always removes last element in replace function.
  
 //made the color replacement dynamic with string interpolation.
  
 //have boolean for dark  mode to determine which colors to pull from

  for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click',function(){
  
      let pbColor = paintBrush.classList[paintBrush.classList.length-1];
      
      if(dark === false){ 
          paintBrush.classList.replace(pbColor,`color-${i+1}`) 
      }else if(dark === true){
        paintBrush.classList.replace(pbColor,`color-${i+5}`) 

      }
  
    });
  };
};
function clickPaint(){
    //loop to add chosen  colors to grid as it is clicked.
     //canvas element/grid  replace color in index 1 with color in index 1 of paintbursh
  for (let i = 0; i < paintCanvas.length; i++) {
    paintCanvas[i].addEventListener('click',function(){

    paintCanvas[i].classList.replace(paintCanvas[i].classList[1],paintBrush.classList[1]) ;
    
  
   });
  
};
};
function dragPaint(){
for (let i = 0; i < paintCanvas.length; i++) {//loop to add chosen  colors to grid as it is clicked.
  
  paintCanvas[i].addEventListener('mouseenter',function(){

    
    //canvas element/grid  replace color in index 1 with color in index 1 of paintbursh
    if(mouseDown === true){
    paintCanvas[i].classList.replace(paintCanvas[i].classList[1],paintBrush.classList[1])

    
    console.log(paintCanvas[i].classList)



    }
  })
}
  
};
function makeDark(){ 
  darkMode.addEventListener('click',function(){
  
  if(background.style.backgroundImage === 'url("https://mcdn.wallpapersafari.com/medium/86/32/Rl3DNT.jpg")'){
    background.style.backgroundImage = ''
    title.style.color = ''
    for (let i = 0; i < colors.length; i++) {
    
      colors[i].classList.replace(colors[i].classList[1],`color-${i+1}`)
      console.log(colors[i])
    }

    dark = false;
  }else{


  background.style.backgroundImage = 'url("https://mcdn.wallpapersafari.com/medium/86/32/Rl3DNT.jpg")';
  title.style.color = 'white'

  for (let i = 0; i < colors.length; i++) {
    
    colors[i].classList.replace(colors[i].classList[1],`color-${i+5}`)
    console.log(colors[i])
  }
  dark = true; 
  }
    

})
};

function clearBoard(){
  for (let i = 0; i < paintCanvas.length; i++) {
    clear.addEventListener('click',function(){

      paintCanvas[i].classList.replace(paintCanvas[i].classList[1],'color-5') ;
    
    })
  }

};
  

webPage.addEventListener('mousedown',function(){
  mouseDown = true;
});
webPage.addEventListener('mouseup',function(){
  mouseDown = false;
});


SS








/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.

chooseColors()
clickPaint()
dragPaint()
makeDark()
clearBoard()


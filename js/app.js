//Mine
// 'use strict';

// function Product(name, imgURL, votes, timesShown) {
//   this.name = name;
//   this.imgURL = imgURL;
//   if (votes) {
//     this.votes = votes;
//   } else {
//     this.votes = 0;
//   }
//   if (timesShown) {
//     this.timesShown = timesShown;
//   } else {
//     this.timesShown = 0;
//   }
//   allProducts.push(this);
// }

// var allProducts = [];

// function initialProducts() {
//   new Product('Bag', './img/bag.jpg');
//   new Product('Banana', './img/banana.jpg');
//   new Product('Bathroom', './img/bathroom.jpg');
//   new Product('Boots', './img/boots.jpg');
//   new Product('Breakfast', './img/breakfast.jpg');
//   new Product('Bubblegum', './img/bubblegum.jpg');
//   new Product('Chair', './img/chair.jpg');
//   new Product('Cthulhu', './img/cthulhu.jpg');
//   new Product('Dog-Duck', './img/dog-duck.jpg');
//   new Product('Dragon', './img/dragon.jpg');
//   new Product('Pen', './img/pen.jpg');
//   new Product('Pet-Sweep', './img/pet-sweep.jpg');
//   new Product('Scissors', './img/scissors.jpg');
//   new Product('Shark', './img/shark.jpg');
//   new Product('Sweep', './img/sweep.png');
//   new Product('Tauntaun', './img/tauntaun.jpg');
//   new Product('Unicorn', './img/unicorn.jpg');
//   new Product('USB', './img/usb.gif');
//   new Product('Water-Can', './img/water-can.jpg');
//   new Product('Wine-Glass', './img/wine-glass.jpg');
// }

// //image generation. 
// var images = document.getElementsByTagName('img');
// var imageIndexOne   = -1;
// var imageIndexTwo   = -1;
// var imageIndexThree = -1;

// function randomImages() {
//   // Generate random numbers from image index numbers.
//   var nextIndexOne    = Math.floor(Math.random() * allProducts.length);
//   var nextIndexTwo    = Math.floor(Math.random() * allProducts.length);
//   var nextIndexThree  = Math.floor(Math.random() * allProducts.length);

//   while (
//     nextIndexOne === imageIndexOne ||
//     nextIndexOne === imageIndexTwo ||
//     nextIndexOne === imageIndexThree
//   ) {
//     nextIndexOne = Math.floor(Math.random() * allProducts.length);
//   }
//   while (
//     nextIndexTwo === imageIndexOne   ||
//     nextIndexTwo === imageIndexTwo   ||
//     nextIndexTwo === imageIndexThree ||
//     nextIndexTwo === nextIndexOne
//   ) {
//     nextIndexTwo = Math.floor(Math.random() * allProducts.length);
//   }
//   while (
//     nextIndexThree === imageIndexOne    ||
//     nextIndexThree === imageIndexTwo    ||
//     nextIndexThree === imageIndexThree  ||
//     nextIndexThree === nextIndexOne     ||
//     nextIndexThree === nextIndexTwo
//   ) {
//     nextIndexThree = Math.floor(Math.random() * allProducts.length);
//   }

//   // Assign random images to 'next image' indexes.
//   imageIndexOne   = nextIndexOne;
//   imageIndexTwo   = nextIndexTwo;
//   imageIndexThree = nextIndexThree;

//   images[0].src = allProducts[imageIndexOne].imgURL;
//   allProducts[imageIndexOne].timesShown++;
//   images[1].src = allProducts[imageIndexTwo].imgURL;
//   allProducts[imageIndexTwo].timesShown++;
//   images[2].src = allProducts[imageIndexThree].imgURL;
//   allProducts[imageIndexThree].timesShown++;
// }

// //Voting
// var clickCount = 0;

// function clickVote(e) {
//   // Increase total vote count.
//   clickCount++;
//   if (e.srcElement.id === 'image-one') {
//     allProducts[imageIndexOne].votes++;
//   } else if (e.srcElement.id === 'image-two') {
//     allProducts[imageIndexTwo].votes++;
//   } else {
//     allProducts[imageIndexThree].votes++;
//   }
// }

// //Display results.
// function votingOver() {
//   if (clickCount === 25) {
//     // Generate 'li' elements and display in Results section.
//     let resultsList = document.getElementById('results-list');
//     for (let i = 0; i < allProducts.length; i++) {
//       var newResultItem = document.createElement('li');
//       newResultItem.textContent = `${allProducts[i].name} had ${allProducts[i].votes} votes, and was shown ${allProducts[i].timesShown} times.`;
//       resultsList.appendChild(newResultItem);
//     }
//     for (let i = 0; i < images.length; i++) {
//       images[i].removeEventListener('click', randomImages);
//     }

//     // Call productsStringifyLocal to store Product data locally.
//     //productsStringifyLocal();

//     let imageSection   = document.getElementById('images');
//     let resultsSection = document.getElementById('results');
//     let infoSection    = document.getElementById('info');
//     imageSection.style = 'display: none';
//     infoSection.classList.toggle('hidden');
//     resultsSection.classList.toggle('hidden');
//   }
// }


// let imgContainerElement=document.getElementById('images');

// imgContainerElement.addEventListener('click', handleUserClick);

// function handleUserClick(event){
//     console.log(event.target.id);
//     clickCount++;
//     console.log(clickCount);

//     if (clickCount <= 25) {

//         if (event.target.id ==='img-one') {
//           Bus.allProducts[imageIndexOne].votes++;
//         }else if(event.target.id==='img-three'){
//           Bus.allProducts[imageIndexThree].votes++;
//         } else{
//           Bus.allProducts[imageIndexTwo].votes++
//         }
//         console.log(Bus.allProducts);
//         renderImg();
//     }else{
//         let button=document.getElementById('result-btn');
//         button.addEventListener('click', resultBtn);

//         function resultBtn(event){
//             let list=document.getElementById('result-list');
//             let busResult;
// console.log(`rrom btn ${event.target.id}`)
//             for (let i = 0; i < Bus.allBuses.length; i++) {
//                 busResult=document.createElement('li');
//                 list.appendChild(busResult);
//                 //banana had 3 votes, and was seen 5 times
//                 busResult.textContent=`${Bus.allBuses[i].name} had ${Bus.allBuses[i].votes} votes, and was seen ${Bus.allBuses[i].shown} times`;
                
//               }

//         }imgContainerElement.removeEventListener('click', handleUserClick);


// }
// }


// Trying my colleague code.
'use strict';

let imageOne     = document.getElementById('img-one');
let imageTwo     = document.getElementById('img-two');
let imageThree   = document.getElementById('img-three');

let firstImgIndex;
let secondImgIndex;
let thirdImgIndex;

let maxAttempts=25;
let clickCounter=0;

function Product (name, imgURL){
    this.name   = name;
    this.imgURL = imgURL;
    this.votes = 0;
    this.timesShown = 0;

    Product.allProducts.push(this);
}

Product.allProducts=[];

new Product('bag','img/bag.jpg');
new Product('banana','img/banana.jpg');
new Product('bathroom','img/bathroom.jpg');
new Product('boots','img/boots.jpg');
new Product('breakfast','img/breakfast.jpg');
new Product('bubblegum','img/bubblegum.jpg');
new Product('chair','img/chair.jpg');
new Product('cthulhu','img/cthulhu.jpg');
new Product('dog-duck','img/dog-duck.jpg');
new Product('dragon','img/dragon.jpg');
new Product('pen','img/pen.jpg');
new Product('pet-sweep','img/pet-sweep.jpg');
new Product('scissors','img/scissors.jpg');
new Product('shark','img/shark.jpg');
new Product('sweep','img/sweep.png');
new Product('tauntaun','img/tauntaun.jpg');
new Product('unicorn','img/unicorn.jpg');
new Product('usb','img/usb.gif');
new Product('water-can','img/water-can.jpg');
new Product('wine-glass','img/wine-glass.jpg');


console.log(Product.allProducts)


function generateRandomIndex() {
    return Math.floor(Math.random() * Product.allProducts.length);
}
  
console.log(generateRandomIndex());

function renderImg() {

    firstImgIndex  = generateRandomIndex();
    secondImgIndex = generateRandomIndex();
    thirdImgIndex  = generateRandomIndex();

    Product.allProducts[firstImgIndex].shown++;
    Product.allProducts[thirdImgIndex].shown++;
    Product.allProducts[secondImgIndex].shown++;
  
    while(
      firstImgIndex    ===  secondImgIndex   ||
      firstImgIndex    ===  thirdImgIndex    ||
      secondImgIndex   ===  thirdImgIndex
      )
  {

firstImgIndex  = generateRandomIndex();
secondImgIndex = generateRandomIndex();
}

//to show the img in the screan 
firstImageElement.src  = Product.allProducts[firstImgIndex].source;
secondImageElement.src = Product.allProducts[secondImgIndex].source;
thirdImageElement.src  = Product.allProducts[thirdImgIndex].source;

}

renderImg();

let imgContainerElement=document.getElementById('images');
imgContainerElement.addEventListener('click', handleUserClick);

function handleUserClick(event){
    console.log(event.target.id);

    clickCounter++;
    console.log(clickCounter);

    if (clickCounter<=maxAttempts) {

        if (event.target.id ==='img-one') {
          Product.allProducts[firstImgIndex].votes++;
        }else if(event.target.id==='img-three'){
          Product.allProducts[thirdImgIndex].votes++;
        } else{
          Product.allProducts[secondImgIndex].votes++
        }
        console.log(Product.allProducts);
        renderImg();
    }
    else {
        let button=document.getElementById('result-btn');
        button.addEventListener('click', resultBtn);

        function resultBtn(event){
            let list=document.getElementById('result-list');
            let busResult;
console.log(`rrom btn ${event.target.id}`)
            for (let i = 0; i < Product.allProducts.length; i++) {
                busResult=document.createElement('li');
                list.appendChild(busResult);
                //banana had 3 votes, and was seen 5 times
                busResult.textContent=`${Product.allProducts[i].name} had ${Product.allProducts[i].votes} votes, and was seen ${Product.allProducts[i].timesShown} times`;
                
              }

        }imgContainerElement.removeEventListener('click', handleUserClick);


}
}
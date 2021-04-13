'use strict';

var allProducts = [];

var imageIndexOne    = 0;
var imageIndexTwo    = 1;
var imageIndexThree  = 2;
var clickCount = 0;

var images = document.getElementsByTagName('img');

function Product(nameArg, imgURLArg) {
  this.name = nameArg;
  this.imgURL = imgURLArg;
  this.votes = 0;
  this.timesShown = 0;
  allProducts.push(this);
}

new Product('Bag', './img/bag.jpg');
new Product('Banana', './img/banana.jpg');
new Product('Bathroom', './img/bathroom.jpg');
new Product('Boots', './img/boots.jpg');
new Product('Breakfast', './img/breakfast.jpg');
new Product('Bubblegum', './img/bubblegum.jpg');
new Product('Chair', './img/chair.jpg');
new Product('Cthulhu', './img/cthulhu.jpg');
new Product('Dog-Duck', './img/dog-duck.jpg');
new Product('Dragon', './img/dragon.jpg');
new Product('Pen', './img/pen.jpg');
new Product('Pet-Sweep', './img/pet-sweep.jpg');
new Product('Scissors', './img/scissors.jpg');
new Product('Shark', './img/shark.jpg');
new Product('Sweep', './img/sweep.png');
new Product('Unicorn', './img/unicorn.jpg');
new Product('USB', './img/usb.gif');
new Product('Water-Can', './img/water-can.jpg');
new Product('Wine-Glass', './img/wine-glass.jpg');

//Chart Data
function prodProps(prop) {
  var props = [];
  for (var i = 0; i < allProducts.length; i++) {
    props[i] = allProducts[i][prop];
  }
  return props;
}

//End voting and display results.
function votingOver() {
  if (clickCount === 25) {
    var resultsList = document.getElementById('results-list');
    for (let i = 0; i < allProducts.length; i++) {
      var newResultItem = document.createElement('li');
      newResultItem.textContent = `${allProducts[i].name} had ${allProducts[i].votes} votes, and was shown ${allProducts[i].timesShown} times.`;
      resultsList.appendChild(newResultItem);
    }
    for (let i = 0; i < images.length; i++) {
      images[i].removeEventListener('click', randomImages);
    }

    // Remove Images section to replace it with chart.
    var imageSection   = document.getElementById('images');
    var resultsSection = document.getElementById('results');
    imageSection.classList.toggle('hidden');
    resultsSection.classList.toggle('hidden');

    // Create bar graph representing vote data per product.
    var ctx = document.getElementById('productChart').getContext('2d');
    new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: prodProps('name'),
        datasets: [
          {
            label: '# of Votes',
            data: prodProps('votes'),
            backgroundColor: 'rgba(0, 150, 255, 1)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 1
          },
          {
            label: '# of Views',
            data: prodProps('timesShown'),
            backgroundColor: 'rgba(0, 255, 100, 0.5)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              stacked: false
            }
          ],
          yAxes: [
            {
              stacked: true
            },
            {
              ticks: {
                display: false
              }
            }
          ]
        }
      }
    });
  }
}

function randomImages(e) {
  // Increase total vote count.
  clickCount++;
  if (e.srcElement.id === 'one') {
    allProducts[imageIndexOne].votes++;
  } else if (e.srcElement.id === 'two') {
    allProducts[imageIndexTwo].votes++;
  } else {
    allProducts[imageIndexThree].votes++;
  }

  // Generate random numbers from image index numbers.
  var nextIndexOne   = Math.floor(Math.random() * allProducts.length);
  var nextIndexTwo   = Math.floor(Math.random() * allProducts.length);
  var nextIndexThree = Math.floor(Math.random() * allProducts.length);

  //Ensure no repeats or multiples.
  while (
    nextIndexOne === imageIndexOne ||
    nextIndexOne === imageIndexTwo ||
    nextIndexOne === imageIndexThree
  ) {
    nextIndexOne = Math.floor(Math.random() * allProducts.length);
  }
  while (
    nextIndexTwo === imageIndexOne   ||
    nextIndexTwo === imageIndexTwo   ||
    nextIndexTwo === imageIndexThree ||
    nextIndexTwo === nextIndexOne
  ) {
    nextIndexTwo = Math.floor(Math.random() * allProducts.length);
  }
  while (
    nextIndexThree === imageIndexOne   ||
    nextIndexThree === imageIndexTwo   ||
    nextIndexThree === imageIndexThree ||
    nextIndexThree === nextIndexOne    ||
    nextIndexThree === nextIndexTwo
  ) {
    nextIndexThree = Math.floor(Math.random() * allProducts.length);
  }

  // Assign random images to 'next image' indexes.
  imageIndexOne   = nextIndexOne;
  imageIndexTwo   = nextIndexTwo;
  imageIndexThree = nextIndexThree;

  images[0].src = allProducts[imageIndexOne].imgURL;
  allProducts[imageIndexOne].timesShown++;
  images[1].src = allProducts[imageIndexTwo].imgURL;
  allProducts[imageIndexTwo].timesShown++;
  images[2].src = allProducts[imageIndexThree].imgURL;
  allProducts[imageIndexThree].timesShown++;

  votingOver();
}

// Define Event Listener On Image Click
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', randomImages);
}
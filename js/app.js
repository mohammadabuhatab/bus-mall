'use strict';
let leftIndex;
let rightIndex;
let centerIndex;
const names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

const leftImage = document.getElementById('leftImage');
const rightImage = document.getElementById('rightImage');
const centerImage = document.getElementById('centerImage');
const imagesSection = document.getElementById('images-section');

function Assets (name) {
  this.name = name;
  this.path = `./img/assets/${name}.jpg`;
  this.votes = 0;
  this.views = 0;
 
  Assets.all.push(this);
}
Assets.all = [];

for(let i =0;i<names.length;i++){
  new Assets(names[i]);
}
console.log(Assets.all);

function render(){
  leftIndex = randomNumber(0,Assets.all.length-1);
 
  leftImage.src = Assets.all[leftIndex].path;
  leftImage.alt = Assets.all[leftIndex].name;
  leftImage.title = Assets.all[leftIndex].name;
  console.log(leftIndex);

  rightIndex = randomNumber(0,Assets.all.length-1);
// while (rightIndex.alt=== leftIndex.alt)
// {
//   rightIndex = randomNumber(0,Assets.all.length-1);
// }
  rightImage.src = Assets.all[rightIndex].path;
  rightImage.alt = Assets.all[rightIndex].name;
  rightImage.title = Assets.all[rightIndex].name;
  console.log(rightIndex);
  centerIndex = randomNumber(0,Assets.all.length-1);
  // while (centerIndex.alt===rightIndex.alt||centerIndex.alt===leftIndex.alt)
  // {
  //   centerIndex = randomNumber(0,Assets.all.length-1);
  // }
  centerImage.src = Assets.all[centerIndex].path;
  centerImage.alt = Assets.all[centerIndex].name;
  centerImage.title = Assets.all[centerIndex].name;
  console.log(centerIndex);};
  
  imagesSection.addEventListener('click',handelClick);

function handelClick(event){
  
  if(event.target.id !== 'images-section'){
    if(event.target.id === rightImage.id)
    {
      Assets.all[rightIndex].votes++;
    }
    else if (event.target.id === leftImage.id){
      Assets.all[leftIndex].votes++;
    }
    else{
      Assets.all[centerIndex].votes++;

    }
  }

  render();
  
  }
 
  const button = document.createElement('button');
  finish.appendChild(button);
   button.textContent = 'select';
   button.addEventListener('click',selectClike);
   function selectClike(event) {
    document.write(`${Assets.all.alt[1]} had ${Assets.all.votes[1]} votes, and was seen 5 times.`);
    console.table(Assets.all)
   }




  render();

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);}


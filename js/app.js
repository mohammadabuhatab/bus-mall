'use strict';
let leftIndex;
let rightIndex;
let centerIndex;
let attempt=1;
let votes=[];
const names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark','tauntaun', 'unicorn', 'water-can', 'wine-glass'];

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
  // leftImage.all[leftIndex].views++
  console.log(leftIndex);

  rightIndex = randomNumber(0,Assets.all.length-1);
// while (rightIndex.alt=== leftIndex.alt)
// {
//   rightIndex = randomNumber(0,Assets.all.length-1);
// }
  rightImage.src = Assets.all[rightIndex].path;
  rightImage.alt = Assets.all[rightIndex].name;
  rightImage.title = Assets.all[rightIndex].name;
  // rightImage.all[rightIndex].views++;
  console.log(rightIndex);
  centerIndex = randomNumber(0,Assets.all.length-1);
  // while (centerIndex.alt===rightIndex.alt||centerIndex.alt===leftIndex.alt)
  // {
  //   centerIndex = randomNumber(0,Assets.all.length-1);
  // }
  centerImage.src = Assets.all[centerIndex].path;
  centerImage.alt = Assets.all[centerIndex].name;
  centerImage.title = Assets.all[centerIndex].name;
  // centerImage.all[centerIndex].views++;
  console.log(centerIndex);};
  
  imagesSection.addEventListener('click',handelClick);

function handelClick(event){
  
  if(event.target.id !== 'images-section'){
    if (attempt<10){
      attempt++;
    if(event.target.id === rightImage.id)
    {
      Assets.all[rightIndex].votes++;
    }
    else if (event.target.id === leftImage.id){
      Assets.all[leftIndex].votes++;
    }
    else if(event.target.id === centerImage.id){
      Assets.all[centerIndex].votes++;

    }}
  
   else{
    let ulEl=document.getElementById('displayList');
    let liEl;
    for(let i =0;i<Assets.all.length;i++){
    
    liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `${Assets.all.alt[i]} had ${Assets.all.votes[i]} votes, and was seen 5 times.`;
       } 
        imagesSection.removeEventListener('click',handelClick);
        votes.push(Assets.all[i].votes) ;
 }   chart(); }

  render();
 

  }
 
  // const button = document.createElement('button');
  // finish.appendChild(button);
  //  button.textContent = 'select';
  //  button.addEventListener('click',selectClike);
  //  function selectClike(event) {
  //   document.write(`${Assets.all.alt} had ${Assets.all.votes} votes, and was seen 5 times.`);
  //   console.table(Assets.all)
   




  render();

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);}


function chart(){
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
    
        // The data for our dataset
        data: {
            labels: names,
            datasets: [{
                label: 'my votes',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: votes
            }]
        },
    
        // Configuration options go here
        options: {}
    });}
   
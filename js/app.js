'use strict';
let leftIndex;
let rightIndex;
let centerIndex;
let attempt=1;
let votes=[];
let views=[];
let maxAttempt=25;
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
  Assets.all[leftIndex].views++;
  // leftImage.all[leftIndex].views++
  console.log(leftIndex);

  rightIndex = randomNumber(0,Assets.all.length-1);
if (rightIndex===leftIndex)
{
  rightIndex = randomNumber(0,Assets.all.length-1);
}
  rightImage.src = Assets.all[rightIndex].path;
  rightImage.alt = Assets.all[rightIndex].name;
  rightImage.title = Assets.all[rightIndex].name;
  Assets.all[rightIndex].views++;
  // rightImage.all[rightIndex].views++;
  console.log(rightIndex);
  centerIndex = randomNumber(0,Assets.all.length-1);
  if (centerIndex===rightIndex||centerIndex===leftIndex)
  {
    centerIndex = randomNumber(0,Assets.all.length-1);
  }
  centerImage.src = Assets.all[centerIndex].path;
  centerImage.alt = Assets.all[centerIndex].name;
  centerImage.title = Assets.all[centerIndex].name;
  Assets.all[centerIndex].views++;
  // centerImage.all[centerIndex].views++;
  console.log(centerIndex);};
  
  imagesSection.addEventListener('click',handelClick);

function handelClick(event){
  
  if(event.target.id !== 'images-section'){
    if (attempt<maxAttempt){
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
      votes.push(Assets.all[i].votes);
      views.push(Assets.all[i].views);
    liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `${Assets.all[i].name} had ${Assets.all[i].votes} votes, and was seen ${Assets.all[i].views} times.`;
       } chart();
        imagesSection.removeEventListener('click',handelClick);
        votes.push(Assets.all[i].votes) ;
 }    }

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
                label: 'assets votes',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data:votes 
            },
            {
              label: 'assets views',
              backgroundColor: 'green',
              borderColor: 'rgb(255, 99, 132)',
              data:views 
          }]
        },
    
        // Configuration options go here
        options: {}
    });}
   
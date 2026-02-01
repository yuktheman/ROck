


let isPlaying = false;


document.addEventListener('click' ,function(dets) {
  let target = dets.target.closest('button');
  if (!target) return;
    if (isPlaying) return;
  isPlaying = true;
let result=''
  let playermove = target.className

  console.log('playermover is  '+playermove)
  
  let  computermove = ''
  let number = Math.floor(Math.random()*3);
  if(number === 1){
    computermove='rock'
  }
  else if  (number === 2){
    computermove='paper'
  }
  else{
    computermove='scissor'
  }

console.log('computer move is '+computermove)
 if(computermove ==='paper' && playermove === 'choiceScissors'||  computermove ==='rock' && playermove === 'choicePaper'||   computermove ==='scissor' && playermove === 'choicerock'

 )
{
result='You won'

}
else if(playermove === 'choicePaper' && computermove==='paper'||
playermove==='choicerock' && computermove==='rock' ||
playermove==='choiceScissors' && computermove==='scissor'

)
  {
  result ='Tie'

}
else{
result='You lost'

}
 console.log(playermove)
if(playermove === 'choicerock'){
  let rockdisply = document.querySelector('#hell')
  rockdisply.style.backgroundColor='#d5f170';
rockdisply.style.backgroundImage = "url('fist.png')"; 
  let rockdisply2 = document.querySelector('#hell2')
  a = rockdisply2.style.backgroundColor='crimson'
  if(a){
      rockdisply2.style.backgroundColor='beige'
  }
}
if(playermove === 'choiceScissors'){
  let rockdisply = document.querySelector('#hell')
rockdisply.style.backgroundImage = "url('scissors.png')"; }
if(playermove === 'choicePaper'){
  let rockdisply = document.querySelector('#hell')
rockdisply.style.backgroundImage = "url('hand-paper.png')"; }


setTimeout(function(){
  
if(computermove === 'rock'){
  let rockdisply2 = document.querySelector('#hell2')
rockdisply2.style.backgroundImage = "url('fist.png')"; 
rockdisply2.style.backgroundColor='#70f1d5'
rockdisply2.style.transition = "1s ease-in-out";
main.style.color ='#deeb239f';
}
if(computermove === 'scissor'){
  let rockdisply2 = document.querySelector('#hell2')
  rockdisply2.style.backgroundColor='#b3ec8d'
  rockdisply2.style.transition = "1s ease-in-out";
rockdisply2.style.backgroundImage = "url('scissors.png')"; }
main.style.color ='#8deba2e3';
if(computermove === 'paper'){
  let rockdisply2 = document.querySelector('#hell2')
  rockdisply2.style.transition = "1s ease-in-out";
  rockdisply2.style.backgroundColor='#e9a43e'
rockdisply2.style.backgroundImage = "url('hand-paper.png')"
main.style.color ='#bb4a4681';

; }
},500)
let main =  document.querySelector('.main')

main.innerHTML=`Player ${playermove}, Computer choosed ${computermove} 

<br>--${result}--

`


main.style.color ='#ffffff9f';
main.style='  transition: 2s ease'



  // ... your existing game logic here ...

  setTimeout(() => {
    
    isPlaying = false; // ✅ unlock after result
  }, 1000);
});




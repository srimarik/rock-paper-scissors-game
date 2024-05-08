let score =JSON.parse(localStorage.getItem('score'));

    if(score === null){
      score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
    }
   
   updateScoreElement();

document.querySelector('.auto-play')
.addEventListener('click',()=>{
  autoPlay();
});
function resetScore(){
  score.wins=0;
  score.losses=0;
  score.ties=0;
  localStorage.removeItem('score');
  updateScoreElement();
}

document.querySelector('.js-reset-button')
.addEventListener('click',()=>{
setTimeout(()=>{
  document.querySelector('.js-div1').innerHTML= `<div class="js-div">
  <p class="js-reset-para">Are you sure do you want to reset score?</p>
  <button class="js-yn yes-b">Yes</button>
  <button class="js-yn no-b">No</button>
 </div>`;
 const yesbutton=document.querySelector('.yes-b');
  const cancel= yesbutton.addEventListener('click',()=>{
    resetScore();
    hideReset();
   });
   const noButton=document.querySelector('.no-b') ;
   noButton.addEventListener('click',()=>{
        hideReset();
   }) ;
},1000);

function hideReset(){
 document.querySelector('.js-div1')
 .innerHTML='';

}
  
   
  
  

});

document.querySelector('.js-rock')
.addEventListener('click',()=>{
  playerPick('Rock');
});
document.querySelector('.js-paper')
.addEventListener('click',()=>{
  playerPick('paper');
});
document.querySelector('.js-scissor')
.addEventListener('click',()=>{
  playerPick('scissor');
});

document.body.addEventListener('keydown',(event)=>{
 if(event.key==='r'||event.key==='R'){
  playerPick('rock');
 }else if(event.key==='p'||event.key==='P'){
  playerPick('paper');
 }else if(event.key==='s'||event.key==='S'){
  playerPick('scissor');
 }else if(event.key==='a'||event.key==='A'){
  autoPlay();
 }else if(event.key==='Backspace'){
  resetScore();
 }
});







   let isautoPlaying=false;
   let intervalId;
   function autoPlay(){
    if(!isautoPlaying){
    document.querySelector('.auto-play').innerHTML='Stop  Playing';  
    intervalId = setInterval(function(){
      const playerMove=pick();
      playerPick(playerMove);
    },1000);
    isautoPlaying=true;
  }else{
    document.querySelector('.auto-play')
    .innerHTML='Auto Play';
    clearInterval(intervalId);
    isautoPlaying=false;

   
  }
  }
      
   function playerPick(playerMove)
  {
     const computerMove = pick();
     let result= '';
      if(playerMove==='scissor') { 
      if(computerMove === 'Rock')
      {
        result='you lose.'
        console.log(result);  
      }
      else if (computerMove === 'paper')
      {
        result='you win.'
        console.log(result);
      }
      else if (computerMove ==='scissor')
      {
        result='tie.'
        console.log(result);
      }
   }

  else  if (playerMove==='paper'){
    if(computerMove === 'Rock')
      {
        result='you win.'
        console.log(result);  
      }
      else if (computerMove === 'paper')
      {
        result='tie.'
        console.log(result);
      }
      else if (computerMove ==='scissor')
      {
        result='you lose.'
        console.log(result);
      }
   }
   
   else if(playerMove==='Rock'){
      if(computerMove === 'Rock')
      {
        result='tie.'
        console.log(result);  
      }
      else if (computerMove === 'paper')
      {
        result='you lose.'
        console.log(result);
      }
      else if (computerMove ==='scissor')
      {
        result='you win.'
        console.log(result);
      }
    }
    if (result==='you win.'){
      score.wins +=1;
    }else if(result==='you lose.'){
      score.losses +=1;
    }else if(result==='tie.'){
      score.ties +=1;
    }
     localStorage.setItem('score',JSON.stringify(score)); 

     document.querySelector('.js_result')
    .innerHTML=`${result}`;  

    document.querySelector('.js_move')
    .innerHTML=` you<img src="img/${playerMove}-emoji.png" class="move-icon">
    <img src="img/${computerMove}-emoji.png" class="move-icon">computer`;

    updateScoreElement();
  }
  function updateScoreElement(){
    document.querySelector('.js_score')
     .innerHTML=`wins: ${score.wins}. losses:${score.losses}. Ties: ${score.ties}.`;
  }

   function pick(){
    const randomNum = Math.random();   
    let computerMove = '';  
      if (randomNum>=0 && randomNum<1/3)
      {
        computerMove='Rock';
        console.log(computerMove);
      }
      else if(randomNum>=1/3 && randomNum<2/3)
      {
        computerMove='paper';
        console.log(computerMove);
      }
      else if(randomNum>=2/3 && randomNum<1)
      {
        computerMove='scissor';
        console.log(computerMove);  
      }
      return computerMove;
   }
  
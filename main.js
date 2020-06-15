// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//Hide warning modal and attach event listener to butons on page load
window.onload = () => {
  let modal = document.getElementById('modal');
  let likeButtons = document.getElementsByClassName("like");
  for(const each of likeButtons){
    each.addEventListener("click", LikeClick);
  }
}

function LikeClick(e){
  let heart = e.target;
  if(heart.getElementsByClassName('activated-heart')[0]){
    console.log(heart)
      heart.getElementsByClassName("activated-heart")[0].innerHTML = EMPTY_HEART;
      heart.getElementsByClassName("activated-heart")[0].className = 'like-glyph';
  }
  else{
  mimicServerCall()
  .then(function(result){
    heart.getElementsByClassName('like-glyph')[0].innerHTML = FULL_HEART;
     heart.getElementsByClassName('like-glyph')[0].className = 'activated-heart';
     
  })
  .catch(function(error) {
    document.querySelector("h2").innerHTML = error;
    document.getElementById("modal").setAttribute("class", "");
    setTimeout(function(){document.getElementById("modal").setAttribute("class", "hidden");}, 5000);
  });
}}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  })
}

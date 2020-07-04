// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", ()=>{
  const errorMsg=document.querySelector('#modal');
  errorMsg.className=('hidden');
  document.body.addEventListener("click", function(event){
    if (event.target.className === 'like-glyph') {
      console.log("Liked")
      mimicServerCall();
      //catch(() => {
      //  errorMsg.classList.remove('hidden');
      //})
    }
  });
});




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
  });
}

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", ()=>{
  const errorMsg=document.querySelector('#modal');
  //addHiddenClass(errorMsg)
  document.body.addEventListener("click", function(event){
    if (event.target.className === 'like-glyph') {
      mimicServerCall()
      .then (function(result){
        event.target.className=('activated-heart');
        event.target.innerText=FULL_HEART;
        })
      .catch(() => {
        showError(errorMsg)
        });
      }
      else if (event.target.className === 'activated-heart') {
        mimicServerCall()
        .then (function(result){
          event.target.className=('like-glyph');
          event.target.innerText=EMPTY_HEART;
          })
        .catch(() => {
          showError(errorMsg)
          });
      };
    });

  });

function addHiddenClass(object) {
  object.className=('hidden');
};

function showError(object) {
  object.classList.remove('hidden');
  setTimeout(function () {
    addHiddenClass(object)
  }, 5000);
}



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

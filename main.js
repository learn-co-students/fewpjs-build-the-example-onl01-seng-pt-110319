// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let heartColors = {
  "red": "",
  "": "red"
};

let heartStates = {
  '♡': '♥',
  '♥': '♡'
};

function likeButtonClick() {
  let hearts = document.querySelectorAll(".like-glyph");
  hearts.forEach(heart => 
    heart.addEventListener("click", function(event) {
      mimicServerCall("someUrl")
      .then(function(response) {
        heart.style.color = heartColors[heart.style.color];
        heart.innerText = heartStates[heart.innerText];
      })
    .catch(function(error) {
      let modal = document.getElementById("modal").className = "";
      modal.innerText = error.message;
      modal.className = "hidden";
    })
    })
  )
};


// Your JavaScript code goes here!
let errorModal = document.querySelector("#modal").className = "hidden"

document.addEventListener("DOMContentLoaded", event => {
  likeButtonClick();
})



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

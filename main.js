// let error = document.querySelector("#modal").className = "hidden"

document.addEventListener("DOMContentLoaded", event => {
  likeBtnCallback();
})

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let heartStates = {
  '♡': '♥',
  '♥': '♡'
};

let heartColors = {
  "red": "",
  "": "red"
};

const likeBtnCallback = () => {
  let hearts = document.querySelectorAll(".like-glyph");
  hearts.forEach(heart => 
    heart.addEventListener("click", (e) => {
      mimicServerCall("url")
      .then(res => {
        heart.classList.add("activated-heart");
        heart.innerText = heartStates[heart.innerText];
      })
    .catch(error => {
      let modal = document.getElementById("modal").className = "";
      modal.innerText = error.message;
      modal.className = "hidden";
    })
    })
  )
};




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

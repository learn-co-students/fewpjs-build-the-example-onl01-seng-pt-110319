// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let modal = document.getElementById("modal")

let likes = document.getElementsByTagName("li")
const jsLike = likes[0]
const rubyLike = likes[1]
const pythonLike = likes[2]
const javaLike = likes[3]
const elixrLike = likes[4]

document.addEventListener("DOMContentLoaded", function() {
  heart()
  setTimeout(modalChange, 5000)
})

function modalChange () {
  modal.hidden = true
}

function heart() {
  jsLike.addEventListener("click", function() {
    jsLike.innerHTML = "Like!" + " " + FULL_HEART
  })
  rubyLike.addEventListener("click", function() {
    rubyLike.innerHTML = "Like!" + " " + FULL_HEART
  })
  pythonLike.addEventListener("click", function() {
    pythonLike.innerHTML = "Like!" + " " + FULL_HEART
  })
  javaLike.addEventListener("click", function() {
    javaLike.innerHTML = "Like!" + " " + FULL_HEART
  })
  elixrLike.addEventListener("click", function() {
    elixrLike.innerHTML = "Like!" + " " + FULL_HEART
  })
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

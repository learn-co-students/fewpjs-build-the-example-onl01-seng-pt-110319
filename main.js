// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let hearts = {
  "♡": "♥",
  "♥": "♡"
}

let colors = {
  "red" : "",
  "": "red"
}

function likeCall(e) {
  let heart = e.target;
  mimicServerCall("fakeURL")
  .then(function(serverMessage){
    heart.style.color = colors[heart.style.color];
    if(heart.className==="like-glyph") {
      heart.innerText = hearts[heart.innerText];
    }
  })
  .catch(function(error){
    alert("No Server");
    document.getElementById("modal").className = "";
  });
}

document.addEventListener('click', function(e) {
  if(e.target.className==="like-glyph") {
    likeCall(e);
  } 
  if(e.target.className==="like") {
    likeCall(e);
  } 
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

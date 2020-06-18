// Defining text characters for the empty and full hearts for you to use later.
let modal = document.getElementById("modal")
modal.setAttribute('class', 'hidden')

console.log('whatisit', modal)

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// oneHeart.onclick == false

let glyphStates = {
  '♡': '♥',
  '♥': '♡'
}

let colorStates = {
  "red" : "",
  "": "red"
}

// let allHearts = document.querySelectorAll("span.like-glyph");
let allHearts = document.querySelectorAll(".like");
  
for (let likeGlyph of allHearts) {
  console.log('whatisit', likeGlyph)
  likeGlyph.addEventListener("click", function(event) {
    let oneHeart = event.target;
    mimicServerCall()
    .then(() => {
      oneHeart.innerHTML = glyphStates[oneHeart.innerText];
      oneHeart.style.color = colorStates[oneHeart.style.color];
      // oneHeart.onclick == false;
    })
    .catch((error) => {
      modal.removeAttribute('class', 'hidden')
      console.log('whatisit', error)

      // TIME OUT LOGIC
      modal.innerText = error
      setTimeout(function() {
        modal.setAttribute('class', 'hidden')
      }, 5*1000)
    })
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

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal=document.querySelector("#modal")
modal.setAttribute("class","hidden")


// Your JavaScript code goes here!
let likes=document.getElementsByClassName("like-glyph");
function updateLike(){
like.addEventListener("click", function(){
    if (like.innerHTML===FULL_HEART){
        fullHeart(like)
        console.log("working?")
    }
    else{
      console.log("help")
      emptyHeart(like)

      .catch((error)=>{
        modal.removeAttribute("class","hidden")
      })
    }
  })
}


function emptyHeart(like){
like.innerHTML=EMPTY_HEART;
like.setAttribute("class","activated-heart");
}

function fullHeart(like){
like.innerHTML=FULL_HEART;
like.classList.remove("activated-heart");
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

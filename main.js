// Defining text characters for the empty and full hearts for you to use later.

 let modal = document.getElementById("modal").className="modal"
  document.querySelector(".modal").hidden = true

  const EMPTY_HEART = '♡'
  const FULL_HEART = '♥'
  // oneHeart.onclick == false

  
    let allHearts = document.querySelectorAll("span.like-glyph");
    for (let likeGlyph of allHearts) {
      likeGlyph.addEventListener("click",   function likeHeart(event) {
        let oneHeart = event.target;
        mimicServerCall()
        .then(() => {
          oneHeart.innerHTML = FULL_HEART;
          oneHeart.style.color = "red";
          // oneHeart.onclick == false;
        })
        .catch((toggleErr) => {
          // document.innerHTML = document.querySelector(".modal")
          let showErr = document.getElementById("modal").className="modal"
          toggleErr(showErr);
        })// USE? timeout -  window.setTimeout(window.alert, 5*1000
      }
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

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const divId = document.querySelector("#modal")
divId.setAttribute("class", "hidden");

const hearts = document.querySelectorAll("span.like-glyph");
hearts.forEach(heart => {
    heart.addEventListener("click", function() {
        if (heart.innerHTML === `${FULL_HEART}`) {
            fullHeart(heart)
        } else {
            mimicServerCall()
                .then(() => {
                    emptyHeart(heart)
                })
                .catch((error) => {
                    modal.removeAttribute("class", "hidden")
                    modal.innerHTML = error
                    setTimeout(function() {
                        modal.setAttribute("class", "hidden")
                    }, 5000)
                })
        }
    })
})

function emptyHeart(heart) {
    heart.innerHTML = `${FULL_HEART}`
        // heart.className = "activated-heart"
    heart.setAttribute("class", "activated-heart")
}

function fullHeart(heart) {
    heart.innerHTML = `${EMPTY_HEART}`
    heart.classList.remove("activated-heart")
}






//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
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
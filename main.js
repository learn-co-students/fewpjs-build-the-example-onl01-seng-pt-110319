// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
function hideModal() {
  let hidden = document.getElementById('modal');
  hidden.classList.add("hidden");

}

hideModal();

function likeBtn() {
  let emptyLike = document.querySelectorAll('.like')
  emptyLike.forEach(likeButtons => {
    likeButtons.addEventListener("click", function(event) {
      mimicServerCall("fakeUrl")
      .then(function(response){
      // response => response.json()
      goodStatus(response);
      // console.log(response)
      })
      .catch(function(error) {
        badStatus(error);
      })
    })
  })
}
likeBtn();

function goodStatus(response) {
  let likeBtn = document.querySelectorAll('.like')
  //HERE

  console.log(FULL_HEART)
  console.log(response)
}

function badStatus(error) {
  let hidden = document.getElementById('modal')
  hidden.classList.remove("hidden")
  hidden.innerHTML = error;

    setTimeout(function() {
      hidden.classList.add("hidden");

    }, 1000)
  }
  // setTimeout(function() {


  // }, 1000)

// function checkStatus (res) {
// if (res.status >= 200 && res.status < 300) {
//   hideModal();
//   console.log(res)
// } else {

//     let hidden = document.getElementById('modal')
//     hidden.innerHTML = res;
//     hidden.classList.remove("hidden")

// }
// }














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

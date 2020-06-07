// // Defining text characters for the empty and full hearts for you to use later.
// const EMPTY_HEART = '♡'
// const FULL_HEART = '♥'

// // Your JavaScript code goes here!
// function hideModal() {
//   let hidden = document.getElementById('modal');
//   hidden.classList.add("hidden");

// }


// function heartBtn() {
//   let emptyLikes = document.querySelectorAll('.like-glyph')
//   emptyLikes.forEach(likeButton => {
//     likeButton.addEventListener("click", function(event) {
//       mimicServerCall("fakeUrl", {article_id: this.parentNode.parentNode.parentNode.id
//      }) 
//       .then(function(response){
//         goodStatus(likeButton);
//       })
//       .catch(function(error) {
//         console.log(error)
//         badStatus(error);
//       })
//     })
//   })
// }

// function goodStatus(response) {
//   let article = document.querySelector("[id='"+ response.article_id + "']")
  
//   let heart = article.querySelector('.like') // searches for a class
//   console.log(article)
//   // heart.classList.remove('like')
//   // heart.classList.add('activated-heart')
//   // heart.innerText = FULL_HEART

  
//  }

// function badStatus(error) {
//   let hidden = document.getElementById('modal')
//   hidden.classList.remove("hidden")
//   hidden.innerHTML = error;

//     setTimeout(function() {
//       hidden.classList.add("hidden");

//     }, 5000)
//   }


// document.addEventListener("DOMContentLoaded", event => {
//   heartBtn();
//   hideModal();
// })


  

// //------------------------------------------------------------------------------
// // Ignore after this point. Used only for demo purposes
// //------------------------------------------------------------------------------

// function mimicServerCall(url="http://mimicServer.example.com", config={}) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       let isRandomFailure = Math.random() < .2
//       if (isRandomFailure) {
//         reject(config);
//       } else {
//         resolve(config);
//       }
//     }, 300);
//   });
// }

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'




// Your JavaScript code goes here!
function hideModal() {
  let hidden = document.getElementById('modal');
  hidden.classList.add("hidden");

}



function likeBtn() {
  let emptyLikes = document.querySelectorAll('.like-glyph')
  emptyLikes.forEach(likeButton => {
    likeButton.addEventListener("click", function(event) {
      mimicServerCall("fakeUrl")
      .then(function(response){
      goodStatus(likeButton);
      })
      .catch(function(error) {
        badStatus(error);
      })
    })
  })
}


function goodStatus(heart) {

  // console.log(heart.innerText)

  if (heart.innerText === EMPTY_HEART) {
    heart.classList.add('activated-heart')
    heart.innerText = FULL_HEART
  } else {
    heart.classList.remove('activated-heart')
    heart.innerText = EMPTY_HEART

  }
 
}

function badStatus(error) {
  let hidden = document.getElementById('modal')
  hidden.classList.remove("hidden")
  hidden.innerHTML = error;

    setTimeout(function() {
      hidden.classList.add("hidden");

    }, 3000)
  }


document.addEventListener("DOMContentLoaded", event => {
  likeBtn();
  hideModal();
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

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const errorModal = document.querySelector("#modal")

document.addEventListener("DOMContentLoaded", () => {
  errorModal.hidden = true 
});

let articleHearts = document.querySelectorAll("footer > ul > li > span")

for (const glyph of articleHearts) {
  glyph.addEventListener("click", clickLike);
}

function clickLike (e) {
  const heart = e.target;
  result = mimicServerCall()
  result.then(response => { 
    if (heart.innerText == EMPTY_HEART) {
      heart.innerText = FULL_HEART
      heart.className = "activated-heart"
    } else if ((heart.innerText == FULL_HEART) ) {
      heart.innerText = EMPTY_HEART
    }

  })
  .catch((response) => {
    console.log(response)
    errorModal.className = "";
    errorModal.innerText = response;
    errorModal.hidden = false
    setTimeout(() =>  modal.className = "hidden", 3000);
  })
}



function displayError (response){


}



// Your JavaScript code goes here!



//user clicks something and involve mimickservercall
//update the appearance of heart if it reutns successful
//display error if unsucessful



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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

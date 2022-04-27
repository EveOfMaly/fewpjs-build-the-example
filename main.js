// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.querySelector("#modal")
  errorModal.hidden = true 
});

let heart = document.querySelector("#\\32 01811190 > footer > ul > li > span")
  heart.addEventListener("click", (e) =>  {
    console.log(e)
    clickLike (e)
})




function clickLike (e) {

  result = mimicServerCall().then((response) => response)
  console.log(result)
  debugger
  
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

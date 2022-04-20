const getNumber = document.querySelectorAll(".counter .number");
const getInput = document.querySelector("#guess_number");
const setBtn = document.querySelector(".set-btn");
// const resetBtn = document.querySelector(".restart");
let winnerNumber = [5, 10, 15, 20];

let countInterval = setInterval(function () {
  doFlip(3);
}, 1000);

// resetBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   clearInterval(countInterval);
//   getNumber.forEach((num) => num.setAttribute("data-number", 0));
//   countInterval = setInterval(function () {
//     doFlip(3);
//   }, 1000);
// });

function checkWiner(currentCount, winnerNumber = []) {
  if (!currentCount && !winnerNumber.length) return;

  winnerNumber.forEach((number) => {
    console.log(number);
    if (currentCount === number) {
      console.log(winnerNumber);
      document.querySelector("#modal-container").classList.remove("out");
      document.querySelector("#modal-container").classList.add("one");
      document.querySelector(".counter").classList.remove("modal-hide");
      document.querySelector(".counter").classList.add("modal-show");
    }
  });

  // if (currentCount + 1 === ) {
  //   document.querySelector("#modal-container").classList.add("one");
  // } else if (currentCount + 1 > +setNumber) {
  //   alert("THe number you have set is less than the timer");
  // } else {
  // }
}

document
  .querySelector(".modal-background")
  .addEventListener("click", function (e) {
    document.querySelector("#modal-container").classList.remove("one");
    document.querySelector("#modal-container").classList.add("one", "out");
    document.querySelector(".counter").classList.remove("modal-show");
    document.querySelector(".counter").classList.add("modal-hide");
  });

function getCurrentCount() {
  let totalNumber = [];

  getNumber.forEach((num) => {
    totalNumber += num.getAttribute("data-number");
  });
  let convertedTn = parseInt(totalNumber.toString());

  return convertedTn;
}

function doFlip(numberIndex) {
  var currentNumberElement = $(".number:eq(" + numberIndex + ")");

  var currentNumber = Number(currentNumberElement.attr("data-number"));

  currentNumber = currentNumber + 1;

  if (currentNumber > 9) {
    currentNumber = 0;

    if (numberIndex > 0) {
      doFlip(--numberIndex);
    }
  }

  currentNumberElement.addClass("flip");

  setTimeout(function () {
    currentNumberElement.attr("data-number", currentNumber);

    currentNumberElement.removeClass("flip");
  }, 500);

  const currentCount = getCurrentCount() + 1;
  // console.log(currentCount);
  // setBtn.addEventListener("click", function (e) {
  // });
  // checkWiner(currentCount, winnerNumber);

  checkWiner(currentCount, winnerNumber);
}

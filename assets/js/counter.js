const getNumber = document.querySelectorAll(".counter .number");
const getInput = document.querySelector("#guess_number");
const setBtn = document.querySelector(".set-btn");
const resetBtn = document.querySelector(".restart");
let winnerNumber;

let countInterval = setInterval(function () {
  doFlip(3);
}, 1000);

resetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  clearInterval(countInterval);
  getNumber.forEach((num) => num.setAttribute("data-number", 0));
  countInterval = setInterval(function () {
    doFlip(3);
  }, 1000);
});

function checkWiner(currentCount, setNumber) {
  if (!currentCount && !setNumber) return;

  if (currentCount + 1 === +setNumber) {
    clearInterval(countInterval);
    document.querySelector("#modal-container").classList.add("one");
  } else if (currentCount + 1 > +setNumber) {
    clearInterval(countInterval);
    alert("THe number you have set is less than the timer");
  } else {
    document.querySelector("#modal-container").classList.remove("one", "out");
  }
}

document
  .querySelector(".modal-background")
  .addEventListener("click", function (e) {
    document.querySelector("#modal-container").classList.add("one", "out");
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

  const currentCount = getCurrentCount();
  setBtn.addEventListener("click", function (e) {
    e.preventDefault();
    winnerNumber = getInput.value;
  });
  checkWiner(currentCount, winnerNumber);
}

let x = true;
let y = true;
let ball = document.querySelector(".ball");
let board = document.querySelector(".board");
let leftPaddle = document.querySelector(".left");
let rightPaddle = document.querySelector(".right");

//ball movement
let BoardBounds = board.getBoundingClientRect();
const moveBall = () => {
  let ballcord = ball.getBoundingClientRect();
  let ballTop = ballcord.top;
  let ballBotom = ballcord.bottom;
  let ballLeft = ballcord.left;
  let ballRight = ballcord.right;

  //is ball in bound
  //handleVerticalBound
  if (ballTop <= BoardBounds.top || ballBotom >= BoardBounds.bottom) {
    y = !y;
  }
  //handleHorizontalBound
  //   if (ballLeft <= BoardBounds.left || ballRight >= BoardBounds.right) {
  //     x = !x;
  //   }

  let leftPaddleBounds = leftPaddle.getBoundingClientRect();
  let rightPaddleBounds = rightPaddle.getBoundingClientRect();

  if (
    ballLeft <= leftPaddleBounds.right &&
    ballRight >= leftPaddleBounds.left &&
    ballTop + 30 >= leftPaddleBounds.top &&
    ballBotom - 30 <= leftPaddleBounds.bottom
  ) {
    x = !x;
  }
  if (
    ballLeft <= rightPaddleBounds.right &&
    ballRight >= rightPaddleBounds.left &&
    ballTop + 30 >= rightPaddleBounds.top &&
    ballBotom - 30 <= rightPaddleBounds.bottom
  ) {
    x = !x;
  }
  ball.style.top = y == true ? ballTop + 4 + "px" : ballTop - 4 + "px";
  ball.style.left = x == true ? ballLeft + 4 + "px" : ballLeft - 4 + "px";
  requestAnimationFrame(moveBall);
};
requestAnimationFrame(moveBall);

//userInput for paddle

document.addEventListener("keydown", (e) => {
  if (e.key == "w") {
    movePaddle(leftPaddle, -window.innerHeight * 0.1);
  } else if (e.key == "s") {
    movePaddle(leftPaddle, window.innerHeight * 0.1);
  } else if (e.key == "ArrowUp") {
    movePaddle(rightPaddle, -window.innerHeight * 0.1);
  } else if (e.key == "ArrowDown") {
    movePaddle(rightPaddle, window.innerHeight * 0.1);
  }
});

const movePaddle = (cpaddle, change) => {
  let cPaddleBounds = cpaddle.getBoundingClientRect();
  if (
    cPaddleBounds.top + change >= BoardBounds.top &&
    cPaddleBounds.bottom + change <= BoardBounds.bottom
  ) {
    cpaddle.style.top = cPaddleBounds.top + change + "px";
  }
};

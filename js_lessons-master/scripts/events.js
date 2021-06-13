const btns = document.querySelectorAll("button");

// Old style
// btn.onclick = function () {
//   alert("I am clicked");
// };

// btn.onclick = btnClickHandler;
// btn.onclick = otherClick;

const btnClickHandler = (event) => {
  event.target.disabled = true;
  console.log(event);
};

const otherClick = () => {
  console.log("Helooo its me");
};

// btn.addEventListener("click", () => {
//   console.log("clicked");
// });
// //btn.addEventListener("click", otherClick);

// setTimeout(() => {
//   btn.removeEventListener("click", () => {
//     console.log("clicked");
//   });
// }, 2000);

//btn.addEventListener("mouseenter", btnClickHandler);
//btn.addEventListener("click", otherClick);

// setTimeout(() => {
//   btn.removeEventListener("click", btnClickHandler);
// }, 2000);

btns.forEach((btn) => {
  btn.addEventListener("mouseenter", btnClickHandler);
});

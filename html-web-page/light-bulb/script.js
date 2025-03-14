let bulb = document.querySelector("#circle");
let switchButton = document.querySelector(".off-on");
let statusText = document.querySelector(".status");
let body = document.querySelector(".body");

switchButton.addEventListener("click", () => {
  if (switchButton.textContent == "Turn On") {
    bulb.style.backgroundColor = "#F3D300";
    switchButton.textContent = "Turn Off";
    statusText.textContent = "Status On";
    body.style.backgroundColor = "#4D5160";
    body.style.color = "#ffffff";
  } else {
    bulb.style.backgroundColor = "#95A5A6";
    switchButton.textContent = "Turn On";
    statusText.textContent = "Status Off";
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#000000";
  }
});


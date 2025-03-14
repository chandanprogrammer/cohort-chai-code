const fullName = document.getElementById("fname");
const jobTitle = document.getElementById("jobTitle");
const age = document.getElementById("age");
const bio = document.getElementById("bio");

const nameDisplay = document.getElementById("nameDisplay");
const jobDisplay = document.getElementById("jobDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const bioDisplay = document.getElementById("bioDisplay");

fullName.addEventListener("input", () => {
  nameDisplay.innerText = fullName.value;
});
jobTitle.addEventListener("input", () => {
  jobDisplay.innerText = jobTitle.value;
});
age.addEventListener("input", () => {
  ageDisplay.innerText = age.value;
});
bio.addEventListener("input", () => {
  bioDisplay.innerText = bio.value;
});

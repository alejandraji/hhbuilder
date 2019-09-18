const form = document.querySelector("form");
const formId = document.querySelector("form").setAttribute("id", "submit-hld");
const formBtn = document
  .querySelector("button[type=submit]")
  .setAttribute("id", "submit-btn");
const submitBtn = document.getElementById("submit-btn");
const ageInput = form[0].setAttribute("id", "age-input");
const checkBox = form[2].setAttribute("id", "smoker-box");
const selectBox = form[1].setAttribute("id", "house-rela");
const debug = document.getElementsByClassName("debug")[0];

const formValues = {
  age: document.getElementById("age-input"),
  relationship: document.getElementById("house-rela"),
  smoker: document.getElementById("smoker-box"),
  submit: document.getElementById("submit-btn")
};

// Submit EventListener
formValues.submit.addEventListener("click", () => {
  event.preventDefault();
  console.log("button pressed");
  validationData();
  addHousehold();
  renderJSON();
  clearForm();
});
// Add Button EventListener
const addBtn = form.getElementsByClassName("add")[0];
addBtn.addEventListener("click", () => {
  event.preventDefault();
  console.log("add pressed");
  validationData();
  addHousehold();
  clearForm();
  // add CSS
  addBtn.style.backgroundColor = "#80cbc4";
  addBtn.style.marginBottom = "5px";
  addBtn.style.width = "25%";
  submitBtn.style.backgroundColor = "#ffe0b2";
  submitBtn.style.width = "25%";
});
// validation of age and relationship
function validationData() {
  // age validaton
  if (document.getElementById("age-input").value < 1) {
    alert("Please Fill Out Age");
  }
  // relationship validation
  else if (document.getElementById("house-rela").value == "") {
    alert("Please Fill Out Relationship");
  }
}
// create Household
const household = document.querySelector(".household");
function addHousehold() {
  const age = form[0].value;
  const relationship = document.getElementById("house-rela").value;
  const smoker = document.getElementById("smoker-box").checked ? "Yes" : "No";
  event.preventDefault();
  //  create the list data
  var member = document.createElement("li");
  member.textContent =
    "Age: " +
    age +
    " " +
    "Relationship:" +
    " " +
    relationship.toUpperCase() +
    " " +
    "Smoker? " +
    smoker +
    " ";
  let removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.textContent = "remove";

  // Remove Button EventListener
  removeBtn.addEventListener("click", function() {
    this.parentNode.remove();
  });
  removeBtn.style.backgroundColor = "#e57373";
  member.appendChild(removeBtn);
  household.appendChild(member);
}
// function to renderJSON
function renderJSON() {
  event.preventDefault();
  var members = { household: [] };
  for (let i = 0; i < household.children.length; ++i) {
    person = household.children[i].textContent.split(" ");
    newMember = {};
    newMember.relationship = person[0];
    newMember.age = Number(person[1]);
    newMember.smoker = person[2] === "smoker";
    members.household.push(newMember);
  }
  // append JSON
  debug.style.display = "block";
  debug.style.width = "60%";
  debug.style.backgroundColor = "#ffe0b2";
  debug.textContent = JSON.stringify(members, null, 2);

  // add CSS
  let formCSS = document.getElementById("submit-hld");
  formCSS.style.marginTop = "30px";
  formCSS.style.marginLeft = "100px";
}

// clear form function
function clearForm() {
  let ageClear = (document.getElementById("age-input").value = "");
  let relationshipClear = (document.getElementById("house-rela").value = "");
  let smokerClear = (document.getElementById("smoker-box").value = "");
  let submitClear = (document.getElementById("submit-btn").value = "");
}

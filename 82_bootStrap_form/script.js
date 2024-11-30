let count = 0;
let userName = false;
let email = false;
let password = false;
let college = false;
let switchDetails = false;

function onchangeHandler(e) {
  //   console.log(e.target.value);
  //   if (e.target.id == "username-input") {
  //     if (e.target.value) {
  //       userName = true;
  //       count++;
  //     } else {
  //       userName = false;
  //       count--;
  //     }
  //   }

  //   if (e.target.id == "email-input") {
  //     if (e.target.value) {
  //       email = true;
  //       count++;
  //     } else {
  //       email = false;
  //       count--;
  //     }
  //   }

  //   if (e.target.id == "password-input") {
  //     if (e.target.value) {
  //       password = true;
  //       count++;
  //     } else {
  //       password = false;
  //       count--;
  //     }
  //   }

  //   if (e.target.id == "college-input") {
  //     if (e.target.value) {
  //       college = true;
  //       count++;
  //     } else {
  //       college = false;
  //       count--;
  //     }
  //   }

  //   if (e.target.id == "checkbox-input") {
  //     if (e.target.value) {
  //       switchDetails = true;
  //       count++;
  //     } else {
  //       switchDetails = false;
  //       count--;
  //     }
  //   }
  //   console.log(count);

  switch (e.target.id) {
    case "username-input":
      userName = !!e.target.value;
      break;
    case "email-input":
      email = !!e.target.value;
      break;
    case "password-input":
      password = !!e.target.value;
      break;
    case "college-input":
      college = !!e.target.value;
      break;
    case "checkbox-input":
      switchDetails = e.target.checked;
      break;
  }

  count =
    Number(userName) +
    Number(email) +
    Number(password) +
    Number(college) +
    Number(switchDetails);

    console.log('current count',count);

  document.querySelector("#progress-bar-new").style.width =
    (count * 100) / 5 + "%";

  document.querySelector("#submit-button").disabled = count < 5;
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = {
    userName: document.querySelector("#username-input").value,
    email: document.querySelector("#email-input").value,
    password: document.querySelector("#password-input").value,
    college: document.querySelector("#college-input").value,
    termsAccepted: document.querySelector("#checkbox-input").checked,
  };

  console.log("form data submitted", formData);
}
document.querySelector("#submit-button").disabled = true;

let $html = document.documentElement;
let $darkLightBtn = document.getElementById("darkLightBtn");

let $theme = Cookies.get("theme");

// cookie set theme
if ($theme == "black") {
  $html.classList.add("dark");
} else {
  $html.classList.remove("dark");
}

// cookie log in automathic
let $userNameAcc = Cookies.get("userNameSneaky");
let $passwordAcc = Cookies.get("passwordSneaky");

if ($userNameAcc != undefined && $passwordAcc != undefined) {
  fetch("https://6912e51452a60f10c8232605.mockapi.io/users", {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((tasks) => {
      // Do something with the list of tasks
      tasks.map((val) => {
        if (val.username == $userNameAcc && val.password == $passwordAcc) {
          $userNameWrapper.innerText = "Hi," + val.username;

          // go to main page
          $profile.classList.remove("flex");
          $main.classList.remove("hidden");
          $main.classList.add("block");

          // delete icon profile
          $profileBtn.classList.add("hidden");
        }
      });
    })
    .catch((error) => {
      // handle error
    });
}

let flag = 0;
$darkLightBtn.addEventListener("click", () => {
  $html.classList.toggle("dark");
  flag++;

  if (flag % 2 == 0) {
    Cookies.set("theme", "white", { expires: 7 });
    $html.classList.remove("dark");
  } else {
    Cookies.set("theme", "black", { expires: 7 });
    $html.classList.add("dark");
  }
});

// profile click
let $profileBtn = document.querySelector("#profileBtn");
let $main = document.querySelector("#main");
let $profile = document.querySelector("#profile");
$profileBtn.addEventListener("click", () => {
  $main.classList.add("hidden");
  $profile.classList.remove("hidden");
  $profile.classList.add("flex");
});

// sign up

let $btnSignUp = document.querySelector("#btnSignUp");
let $signUpInputs = document.querySelectorAll("#signUpWrapper>div>input");
let $signUpWrapper = document.querySelector("#signUpWrapper");
let $userNameWrapper = document.querySelector("#userNameWrapper");

$btnSignUp.addEventListener("click", () => {
  console.log($signUpInputs);
  let $SignUpName = $signUpInputs[0].value;
  let $SignUpEmail = $signUpInputs[1].value;
  let $SignUpPassword = $signUpInputs[2].value;

  // signup add to mock api
  const newTask = {
    username: $SignUpName,
    email: $SignUpEmail,
    password: $SignUpPassword,
  };

  fetch("https://6912e51452a60f10c8232605.mockapi.io/users", {
    method: "POST",
    headers: { "content-type": "application/json" },
    // Send your data in the request body as JSON
    body: JSON.stringify(newTask),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((task) => {
      // do something with the new task
      $userNameWrapper.innerText = "Hi," + task.username;

      // go to main page
      $profile.classList.remove("flex");
      $main.classList.remove("hidden");
      $main.classList.add("block");

      Cookies.set("userNameSneaky", task.username, { expires: 7 });
      Cookies.set("passwordSneaky", task.password, { expires: 7 });

      // delete icon profile
      $profileBtn.classList.add("hidden");
    })
    .catch((error) => {
      // handle error
    });
});

// log in
let $logInBtn = document.querySelector("#logInBtn");
let $logInWrapper = document.querySelector("#logInWrapper");

$logInBtn.addEventListener("click", () => {
  $signUpWrapper.classList.remove("block");
  $signUpWrapper.classList.add("hidden");
  $logInWrapper.classList.remove("hidden");
  $logInWrapper.classList.add("block");
});

let $signUpFormBtn = document.querySelector("#signUpFormBtn");

$signUpFormBtn.addEventListener("click", () => {
  $logInWrapper.classList.remove("block");
  $logInWrapper.classList.add("hidden");
  $signUpWrapper.classList.remove("hidden");
  $signUpWrapper.classList.add("block");
});

// log in click
let $btnLogIN = document.querySelector("#btnLogIN");
let $logInWrapperInputs = document.querySelectorAll("#logInWrapper>div>input");

$btnLogIN.addEventListener("click", () => {
  let emailLogIn = $logInWrapperInputs[0].value;
  let passwordLogIn = $logInWrapperInputs[1].value;

  fetch("https://6912e51452a60f10c8232605.mockapi.io/users", {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    })
    .then((tasks) => {
      // Do something with the list of tasks
      tasks.map((val) => {
        if (val.email == emailLogIn && val.password == passwordLogIn) {
          $userNameWrapper.innerText = "Hi," + val.username;

          // go to main page
          $profile.classList.remove("flex");
          $main.classList.remove("hidden");
          $main.classList.add("block");

          Cookies.set("userNameSneaky", val.username, { expires: 7 });
          Cookies.set("passwordSneaky", val.password, { expires: 7 });

          // delete icon profile
          $profileBtn.classList.add("hidden");
        }
      });
    })
    .catch((error) => {
      // handle error
    });
});

// products button
let $productsBtn = document.getElementById("productsBtn");
let $productsWrapper = document.getElementById("productsWrapper");

$productsBtn.addEventListener("click", () => {
  $main.classList.add("hidden");
  $productsWrapper.classList.remove("hidden");
  $productsWrapper.classList.add("block");
});

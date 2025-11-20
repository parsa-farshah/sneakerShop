let $html = document.documentElement;
let $darkLightBtn = document.getElementById("darkLightBtn");

let $theme = Cookies.get("theme");

if ($theme == "black") {
  $html.classList.add("dark");
} else {
  $html.classList.remove("dark");
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
let $userNameWrapper = document.querySelector("#userNameWrapper");

$btnSignUp.addEventListener("click", () => {
  console.log($signUpInputs);
  let $SignUpName = $signUpInputs[0].value;
  let $SignUpEmail = $signUpInputs[1].value;
  let $SignUpPassword = $signUpInputs[2].value;

  // signup add to mock api
  const newTask = {
    name: $SignUpName,
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
      $userNameWrapper.innerText = "Hi," + task.name;

      // go to main page
      $profile.classList.remove("flex");
      $main.classList.remove("hidden");
      $main.classList.add("block");

      
    })
    .catch((error) => {
      // handle error
    });
});

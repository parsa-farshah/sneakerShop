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

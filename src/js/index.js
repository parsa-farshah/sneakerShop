let $html = document.documentElement;
let $darkLightBtn = document.getElementById("darkLightBtn");

$darkLightBtn.addEventListener("click", () => {
  $html.classList.toggle("dark");
});

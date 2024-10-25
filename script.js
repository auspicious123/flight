function toggleDetails1() {
  const detailsDiv1 = document.getElementById("detailsDiv1");

  const arrowIcon = document.getElementById("arrowIcon1");

  detailsDiv1.classList.toggle("hidden");

  arrowIcon.classList.toggle("rotate-180");
  arrowIcon.classList.toggle("transition-transform");
  arrowIcon.classList.toggle("duration-300");
}
function toggleDetails2() {
  const detailsDiv2 = document.getElementById("detailsDiv2");
  const arrowIcon = document.getElementById("arrowIcon2");

  detailsDiv2.classList.toggle("hidden");
  arrowIcon.classList.toggle("rotate-180");
  arrowIcon.classList.toggle("transition-transform");
  arrowIcon.classList.toggle("duration-300");
}
function showSection(section, tabId) {
  // Hide all sections and reset tab colors
  document.getElementById("fare").classList.add("hidden");
  document.getElementById("baggage").classList.add("hidden");
  document.getElementById("condition").classList.add("hidden");

  document.getElementById("fareTab").classList.remove("text-white");
  document.getElementById("baggageTab").classList.remove("text-white");
  document.getElementById("conditionTab").classList.remove("text-white");

  document.getElementById("fareTab").classList.add("text-d9d9d9");
  document.getElementById("baggageTab").classList.add("text-d9d9d9");
  document.getElementById("conditionTab").classList.add("text-d9d9d9");

  // Show selected section and apply white text color
  document.getElementById(section).classList.remove("hidden");
  document.getElementById(tabId).classList.remove("text-d9d9d9");
  document.getElementById(tabId).classList.add("text-white");
}

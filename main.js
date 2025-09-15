var typed = new Typed("#element", {
  strings: ["Civil Engineer", "Web Desgin", "and", "Web Develober"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

var sidenav = document.querySelector(".side-navbar");
const navLinks = document.querySelectorAll(".active");
function handleOpen() {
  sidenav.style.right = "0";
}
function handleClose() {
  sidenav.style.right = "-60%";
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => (sidenav.style.right = "-60%"));
});

var name = document.getElementById("names");
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var message = document.getElementById("message");

function clear() {
  names.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
}
clear();

function toggleReadMore() {
  const hiddenContent = document.getElementById("hiddenContent");
  const toggleBtn = document.getElementById("toggleBtn");

  if (hiddenContent.classList.contains("hidden-content")) {
    // Show more content
    hiddenContent.classList.remove("hidden-content");
    hiddenContent.classList.add("visible-content");
    toggleBtn.textContent = "Read Less";
    toggleBtn.classList.remove("read-more-btn");
    toggleBtn.classList.add("read-less-btn");
  } else {
    // Hide content
    hiddenContent.classList.remove("visible-content");
    hiddenContent.classList.add("hidden-content");
    toggleBtn.textContent = "Read More";
    toggleBtn.classList.remove("read-less-btn");
    toggleBtn.classList.add("read-more-btn");
  }
}

function toggleReadMore1() {
  const hiddenContent = document.getElementById("hiddenContent1");
  const toggleBtn = document.getElementById("toggleBtn1");

  if (hiddenContent.classList.contains("hidden-content1")) {
    // Show more content
    hiddenContent.classList.remove("hidden-content1");
    hiddenContent.classList.add("visible-content1");
    toggleBtn.textContent = "Read Less";
    toggleBtn.classList.remove("read-more-btn");
    toggleBtn.classList.add("read-less-btn");
  } else {
    // Hide content
    hiddenContent.classList.remove("visible-content1");
    hiddenContent.classList.add("hidden-content1");
    toggleBtn.textContent = "Read More";
    toggleBtn.classList.remove("read-less-btn");
    toggleBtn.classList.add("read-more-btn");
  }
}

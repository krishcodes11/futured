var text = "Welcome to your future. <span class='blue-text'>FuturED.</span>";
var index = 0;
var speed = 100;

function typeWriter() {
if (index < text.length) {
var typingElement = document.getElementById("typing-text");
if (typingElement) {
var currentText = text.substring(0, index + 1);
var formattedText = currentText.replace("to your", '<span class="blue-text">to your</span>');
typingElement.innerHTML = formattedText;
index++;
setTimeout(typeWriter, speed);
}
}
}

window.onload = function() {
typeWriter();
};

var homeButtons = document.querySelectorAll('a[href="index.html"]');
for (var i = 0; i < homeButtons.length; i++) {
homeButtons[i].onclick = function() {
window.location.href = "index.html";
};
}

var coursesButtons = document.querySelectorAll('a[href="courses.html"]');
for (var i = 0; i < coursesButtons.length; i++) {
coursesButtons[i].onclick = function() {
window.location.href = "courses.html";
};
}

var opportunitiesButtons = document.querySelectorAll('a[href="opportunities.html"]');
for (var i = 0; i < opportunitiesButtons.length; i++) {
opportunitiesButtons[i].onclick = function() {
window.location.href = "opportunities.html";
};
}

var currentPage = window.location.pathname.split("/").pop();
var navLinks = document.querySelectorAll('.nav-links a');
for (var i = 0; i < navLinks.length; i++) {
var link = navLinks[i];
var href = link.getAttribute('href');
if (href === currentPage) {
link.classList.add('active');
}
}
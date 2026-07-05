document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    sections.forEach(function(section) {
        section.classList.add("hidden");
        observer.observe(section);
    });
});
const fills = document.querySelectorAll(".fill");
const barObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.width;
        }
    });
});
fills.forEach(function(fill) {
    barObserver.observe(fill);
});
const text = "attaf zakariae";
let i = 0;
const typingEl = document.getElementById("typing");
function typeEffect() {
    if (i < text.length) {
        typingEl.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

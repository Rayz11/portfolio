// Tabs functionality
function opentab(tabName) {
    const tabLinks = document.querySelectorAll('.tab-links');
    const tabContents = document.querySelectorAll('.tab-contents');
    tabLinks.forEach(link => link.classList.remove('active-link'));
    tabContents.forEach(content => content.classList.remove('active-tab'));
    document.querySelector(`.tab-links[onclick*="${tabName}"]`).classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}

// Animated typing effect for header
const animationText = [
    "Web Developer",
    "UI/UX Designer",
    "App Developer",
    "Problem Solver"
];
let animIndex = 0, charIndex = 0, isDeleting = false;
const animElem = document.querySelector('.animation');
function typeAnimation() {
    let current = animationText[animIndex];
    if (isDeleting) {
        animElem.textContent = current.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            animIndex = (animIndex + 1) % animationText.length;
            setTimeout(typeAnimation, 500);
        } else {
            setTimeout(typeAnimation, 50);
        }
    } else {
        animElem.textContent = current.substring(0, charIndex++);
        if (charIndex > current.length) {
            isDeleting = true;
            setTimeout(typeAnimation, 1000);
        } else {
            setTimeout(typeAnimation, 100);
        }
    }
}
if (animElem) typeAnimation();

// Smooth scroll for nav links
document.querySelectorAll('nav ul li a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});
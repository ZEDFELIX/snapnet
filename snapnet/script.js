function showTeachers() {
    alert('Teachers will be displayed soon!');
}

function hireMe() {
    alert('Thank you for your interest! We will get in touch soon.');
}

function slideProfile() {
    var profileContainer = document.getElementById('profile-container');
    if (!profileContainer) return;

    var profiles = profileContainer.getElementsByClassName('profile-box');
    if (profiles.length <= 1) return;

    var currentProfile = profileContainer.querySelector('.active');
    if (!currentProfile) {
        profiles[0].classList.add('active');
        return;
    }

    var nextProfile = currentProfile.nextElementSibling || profiles[0];
    currentProfile.classList.remove('active');
    nextProfile.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    var first = document.querySelector('.profile-box');
    if (first) {
        var container = first.parentElement;
        var allBoxes = container.querySelectorAll('.profile-box');
        allBoxes.forEach(box => box.classList.remove('active'));
        first.classList.add('active');
    }

    var contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Message sent successfully! Thank you for reaching out.');
            contactForm.reset();
        });
    }
});
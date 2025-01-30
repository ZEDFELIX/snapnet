// Function to show Teachers (dummy functionality for now)
function showTeachers() {
    alert('Teachers will be displayed soon!');
}

// Function for Hire Me button (can add functionality here)
function hireMe() {
    alert('Thank you for your interest! We will get in touch soon.');
}
// Function to slide to the next profile
function slideProfile() {
    // Get the profile container and all profile boxes
    var profileContainer = document.getElementById('profile-container');
    var profiles = profileContainer.getElementsByClassName('profile-box');
    
    // Find the current active profile box
    var currentProfile = profileContainer.querySelector('.active');
    
    // Find the next profile box, or loop back to the first profile if it's the last one
    var nextProfile = currentProfile.nextElementSibling || profiles[0];
    
    // Remove the active class from the current profile and add it to the next profile
    currentProfile.classList.remove('active');
    nextProfile.classList.add('active');
}

// Set the first profile as active initially
document.querySelector('.profile-box').classList.add('active');

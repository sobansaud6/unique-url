document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeContainer = document.getElementById('resume-container');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Capture form data
        var username = document.getElementById('name').value;
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        // Create resume content
        var resumeHTML = "\n            <h2>".concat(name, "</h2>\n            <p>").concat(email, "</p>\n            <section>\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n            </section>\n            <section>\n                <h3>Work Experience</h3>\n                <p>").concat(experience, "</p>\n            </section>\n            <section>\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n            </section>\n        ");
        // Store the resume data in local storage
        localStorage.setItem(username + "-resume", resumeHTML);
        // Redirect to the user's unique resume URL
        window.location.href = /${username}/resume;
    });
});

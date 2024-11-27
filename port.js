

function toggleNav() {
    const nav = document.querySelector(".nav");
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");
    nav.classList.toggle("open");
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
}

document.querySelector('.New').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show');
});

var typed = new Typed(".input", {
    strings: ["Full Stack Web Developer", "Frontend Developer", "Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const radialBars = document.querySelectorAll('.radial-bars');

const animateRadialBars = () => {
    radialBars.forEach(bar => {
        const path = bar.querySelector('.path');
        const percentage = parseInt(bar.getAttribute('data-percentage'));
        const offset = path.getAttribute('data-offset');

        let color;
        
        if (percentage >= 75) {
            color = '#0ef';
        } else if (percentage >= 50) {
            color = '#0ef'; 
        } else {
            color = '#0ef';
        }

        path.style.stroke = color; 
        path.style.strokeDashoffset = 282 - (282 * (percentage / 100)); 
        
        bar.querySelector('.percentage').textContent = `${percentage}%`; 
    });
};

window.addEventListener('load', animateRadialBars);





document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

   
    emailjs.send("service_zohaib", "template_5wiwqli", {
        name: name,
        email: email,
        subject: subject,
        message: message,
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send message.');
    });
});
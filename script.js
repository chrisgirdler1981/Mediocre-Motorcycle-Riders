document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'inline-block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const photoContainer = document.getElementById('photoContainer');
    const toggleButton = document.getElementById('toggleFrame');

    // Initially hide the photo container off-screen and collapse its space
    photoContainer.style.transform = 'translateX(100%)';
    photoContainer.style.opacity = '0';
    photoContainer.style.visibility = 'hidden';
    photoContainer.style.height = '0';
    photoContainer.style.width = '0';
    photoContainer.style.overflow = 'hidden'; // Ensure content is hidden

    toggleButton.addEventListener('click', () => {
        if (photoContainer.style.transform === 'translateX(0%)') {
            // Slide out and collapse space
            photoContainer.style.transition = 'transform 0.5s ease, opacity 0.5s ease, height 0.5s ease, width 0.5s ease';
            photoContainer.style.transform = 'translateX(100%)';
            photoContainer.style.opacity = '0';
            photoContainer.style.visibility = 'hidden';
            photoContainer.style.height = '0';
            photoContainer.style.width = '0';
        } else {
            // Slide in and expand space
            photoContainer.style.transition = 'transform 0.5s ease, opacity 0.5s ease, height 0.5s ease, width 0.5s ease';
            photoContainer.style.transform = 'translateX(0%)';
            photoContainer.style.opacity = '1';
            photoContainer.style.visibility = 'visible';
            photoContainer.style.height = 'auto'; 
            photoContainer.style.width = 'auto'; 
        }
    });
});


document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        // Optionally do something on hover
        console.log(item.getAttribute('data-info'));
    });
});
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const caption = document.getElementById('caption');
        
        modal.style.display = 'block';
        modalImg.src = item.querySelector('img').src;
        caption.textContent = item.querySelector('.info').textContent;
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('imageModal').style.display = 'none';
});
  document.getElementById('joinButton').addEventListener('click', function(e) {
            // Add the 'clicked' class for animation
            this.classList.add('clicked');

            // Remove the 'clicked' class after animation ends to reset
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 600); // Match this duration with the animation duration
        });
// Additional JavaScript for email button interaction
document.getElementById('emailButton').addEventListener('click', function() {
    // Confirm the email action
    if (confirm('Do you want to send an email to Mediocre Motorcycle Riders?')) {
        window.location.href = 'mailto:mediocremotorcycleriders@gmail.com';
    }

    // Add the 'clicked' class for animation
    this.classList.add('clicked');

    // Remove the 'clicked' class after animation ends to reset
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 600); // Match this duration with the animation duration
});
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('animateButton');
    const textContainer = document.getElementById('textContainer');

    button.addEventListener('click', () => {
        // Toggle the class to trigger the animation
        if (textContainer.classList.contains('hidden')) {
            textContainer.classList.remove('hidden');
            textContainer.classList.add('show-text');
            button.textContent = 'Hide Information'; // Change button text after showing
        } else {
            textContainer.classList.add('hidden');
            textContainer.classList.remove('show-text');
            button.textContent = 'Show More Information'; // Change button text after hiding
        }
    });
});
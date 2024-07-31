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

document.getElementById('toggleFrame').addEventListener('click', function() {
    const photoContainer = document.getElementById('photoContainer');

    // Check if the container is already sliding out
    if (photoContainer.style.transform === 'translateX(100%)') {
        // Slide in
        photoContainer.style.transition = 'transform 0.5s, opacity 0.5s';
        photoContainer.style.transform = 'translateX(0)';
        photoContainer.style.opacity = '1';
    } else {
        // Slide out
        photoContainer.style.transition = 'transform 0.5s, opacity 0.5s';
        photoContainer.style.transform = 'translateX(100%)';
        photoContainer.style.opacity = '0';
    }
});

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        // Optionally do something on hover
        console.log(item.getAttribute('data-info'));
    });
});
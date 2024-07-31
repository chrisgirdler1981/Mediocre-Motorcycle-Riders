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
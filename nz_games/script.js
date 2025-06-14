document.querySelectorAll('.cube').forEach(cube => {
    cube.addEventListener('mouseover', function() {
        document.querySelectorAll('.hover-images img').forEach(img => {
            img.style.display = 'none';
        });
        const hoverImage = document.getElementById(this.getAttribute('data-hover'));
        if (hoverImage) {
            hoverImage.style.display = 'block';
        }
    });

    cube.addEventListener('mouseleave', function() {
        const hoverImage = document.getElementById(this.getAttribute('data-hover'));
        if (hoverImage) {
            hoverImage.style.display = 'none';
        }
    });
});

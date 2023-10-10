window.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('DOMContentLoaded', function() {
        const headingElement = document.querySelector('.intro h1');
        const text = "Hey, It's Inahira...|";
        let index = 0;
    
        function type() {
            if (index < text.length) {
                headingElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 100); // Adjust typing speed (in milliseconds)
            }
        }
    
        type();
    });    
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hover Effect on Skills
    document.querySelectorAll('.languages .image').forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2)';
        });
        item.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

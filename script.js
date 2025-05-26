document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const response = document.getElementById('form-response');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Simulate form submission
        response.style.display = 'block';
        form.reset();
    });
});


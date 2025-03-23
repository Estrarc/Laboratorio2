document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const email = document.getElementById('email').value;

    // Validación básica
    if (name.trim() === '' || subject.trim() === '' || email.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    alert('¡Formulario enviado con éxito!\nNombre: ' + name + '\nMotivo: ' + subject + '\nEmail: ' + email);
    this.reset();
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
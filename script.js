// Set the launch date (30 days from now)
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30);

// Update countdown every second
function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    // If countdown is finished
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = '<h2>We\'re Live!</h2>';
    }
}

// Update countdown immediately and then every second
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);

// Handle email form submission
document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('emailInput');
    const successMessage = document.getElementById('successMessage');
    const email = emailInput.value;

    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);

    // Show success message
    successMessage.classList.add('show');
    emailInput.value = '';

    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 5000);
});

// Add parallax effect to background
document.addEventListener('mousemove', (e) => {
    const container = document.querySelector('.container');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    container.style.backgroundPosition = `${x * 50}px ${y * 50}px`;
});


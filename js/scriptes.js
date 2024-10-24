// JavaScript for interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const guests = document.getElementById('guests').value;
    document.getElementById('bookingMessage').innerText = 
        `Thank you, ${name}. Your booking for ${guests} guests on ${date} has been submitted!`;
});

const bioElement = document.querySelector('.bio');
const originalText = bioElement.innerText;
bioElement.innerText = '';

// Typewriter Effect
let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        bioElement.innerText += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing after a small delay
setTimeout(typeWriter, 1000);

// Random Screen Flicker
function flicker() {
    const overlay = document.querySelector('.crt-overlay');

    // Random chance to flicker
    if (Math.random() > 0.95) {
        overlay.style.opacity = '0.8';
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 50);
    }

    requestAnimationFrame(flicker);
}

// Start flicker loop
flicker();

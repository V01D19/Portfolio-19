// Matrix Effect
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

if (canvas) {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const letters = Array(256).join(1).split('');
    const fontSize = 14;
    const characters = '01GITCYBERSCURIY'; // Digital security theme chars

    function drawMatrix() {
        ctx.fillStyle = 'rgba(5, 5, 5, 0.05)'; // Fade effect
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0F0'; // Neon Green
        ctx.font = fontSize + 'px monospace';

        letters.map((y_pos, index) => {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            const x_pos = index * fontSize;

            ctx.fillText(text, x_pos, y_pos);

            letters[index] = (y_pos > canvas.height + Math.random() * 1e4) ? 0 : y_pos + fontSize;
        });
    }

    setInterval(drawMatrix, 33);
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
    });
});


// Typing Effect for "init_sequence_0x1.sh"
const typingElement = document.querySelector('.typing-effect');
if (typingElement) {
    const textToType = typingElement.innerText;
    typingElement.innerText = '';
    let i = 0;

    function typeWriter() {
        if (i < textToType.length) {
            typingElement.innerText += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing after a short delay
    setTimeout(typeWriter, 500);
}


// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Offset for fixed header
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// Active Link Highlighting on Scroll
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.getAttribute("href").includes(current)) {
            li.classList.add("active");
        }
    });
});

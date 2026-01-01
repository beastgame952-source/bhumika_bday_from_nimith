// Navigation Functions
function goToPage2() {
    window.location.href = 'page2.html';
}

function goToPage3() {
    window.location.href = 'page3.html';
}

// PAGE 1 - Balloon Animation
if (document.getElementById('balloonCanvas')) {
    const canvas = document.getElementById('balloonCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const balloons = [];
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#a29bfe', '#fd79a8', '#fdcb6e'];
    
    class Balloon {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + 100;
            this.radius = Math.random() * 30 + 20;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.speed = Math.random() * 2 + 1;
            this.swing = Math.random() * 2 - 1;
            this.swingSpeed = Math.random() * 0.02 + 0.01;
            this.swingAmount = Math.random() * 50 + 20;
        }
        
        update() {
            this.y -= this.speed;
            this.swing += this.swingSpeed;
            this.x += Math.sin(this.swing) * 0.5;
            
            if (this.y + this.radius < 0) {
                this.reset();
            }
        }
        
        draw() {
            // Balloon body
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
            
            // Balloon highlight
            ctx.beginPath();
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.arc(this.x - this.radius * 0.3, this.y - this.radius * 0.3, this.radius * 0.4, 0, Math.PI * 2);
            ctx.fill();
            
            // String
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 2;
            ctx.moveTo(this.x, this.y + this.radius);
            ctx.lineTo(this.x, this.y + this.radius + 50);
            ctx.stroke();
        }
    }
    
    for (let i = 0; i < 20; i++) {
        balloons.push(new Balloon());
        balloons[i].y = Math.random() * canvas.height;
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        balloons.forEach(balloon => {
            balloon.update();
            balloon.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    // Sparkle effect
    createSparkles();
}

function createSparkles() {
    const sparklesContainer = document.querySelector('.sparkles');
    if (!sparklesContainer) return;
    
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'absolute';
        sparkle.style.width = '5px';
        sparkle.style.height = '5px';
        sparkle.style.background = '#fff';
        sparkle.style.borderRadius = '50%';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animation = 'sparkle 1s ease-out forwards';
        sparkle.style.boxShadow = '0 0 10px #fff';
        
        sparklesContainer.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }, 300);
}

// Add sparkle animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(1.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// PAGE 2 - Floating Hearts
if (document.querySelector('.floating-hearts')) {
    const heartsContainer = document.querySelector('.floating-hearts');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 30 + 20 + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '-50px';
        heart.style.animation = `floatHeart ${Math.random() * 3 + 4}s linear forwards`;
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => heart.remove(), 7000);
    }
    
    setInterval(createHeart, 500);
    
    const floatStyle = document.createElement('style');
    floatStyle.textContent = `
        @keyframes floatHeart {
            0% {
                transform: translateY(0) rotate(0deg);
                bottom: -50px;
            }
            100% {
                transform: translateY(-20px) rotate(360deg);
                bottom: 110%;
            }
        }
    `;
    document.head.appendChild(floatStyle);
}

// PAGE 3 - Confetti
if (document.querySelector('.confetti-container')) {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#a29bfe', '#fd79a8', '#fdcb6e'];
    
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-20px';
        confetti.style.opacity = Math.random() * 0.7 + 0.3;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.animation = `fallConfetti ${Math.random() * 3 + 3}s linear forwards`;
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 6000);
    }
    
    setInterval(createConfetti, 200);
    
    const confettiStyle = document.createElement('style');
    confettiStyle.textContent = `
        @keyframes fallConfetti {
            0% {
                transform: translateY(0) rotate(0deg);
                top: -20px;
            }
            100% {
                transform: translateY(20px) rotate(720deg);
                top: 110%;
            }
        }
    `;
    document.head.appendChild(confettiStyle);
}

// Add click effects to buttons
document.querySelectorAll('.next-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.marginLeft = '-10px';
        ripple.style.marginTop = '-10px';
        
        this.style.position = 'relative';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(10);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);
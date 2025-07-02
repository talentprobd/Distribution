// Numbered game list
const listItems = document.querySelectorAll('#gameList li');
listItems.forEach((item, index) => {
  const number = index + 1;
  const link = item.querySelector('a');
  link.textContent = `${number}. ${link.textContent.trim()}`;
});

// Interactive glow tilt
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  document.querySelector('.intro').style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Animated dots background on canvas
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let dots = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

for (let i = 0; i < 100; i++) {
  dots.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 1,
    dy: (Math.random() - 0.5) * 1
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dots.forEach(dot => {
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
    //ctx.fillStyle = '#00ffee';
    ctx.fillStyle = '#222222'; // previously #ff00cc or #00ffee

    ctx.fill();

    dot.x += dot.dx;
    dot.y += dot.dy;

    if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
    if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;
  });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

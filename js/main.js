// ---------- typed hero line ----------
const lines = [
  "cat defcon34_recap.txt",
  "ls talks/ villages/ photos/",
  "whoami && echo 'hacker adjacent'",
  "sudo tell_me_everything --year 2026",
];

const typedEl = document.getElementById("typed");
let lineIdx = 0;
let charIdx = 0;
let deleting = false;

function typeLoop() {
  const line = lines[lineIdx];

  if (!deleting) {
    typedEl.textContent = line.slice(0, ++charIdx);
    if (charIdx === line.length) {
      deleting = true;
      setTimeout(typeLoop, 2200);
      return;
    }
    setTimeout(typeLoop, 55 + Math.random() * 60);
  } else {
    typedEl.textContent = line.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      lineIdx = (lineIdx + 1) % lines.length;
    }
    setTimeout(typeLoop, 25);
  }
}
typeLoop();

// ---------- matrix rain ----------
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
const chars = "アカサタナ0123456789ABCDEF#$+*";
const fontSize = 14;
let columns, drops;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
}
resize();
window.addEventListener("resize", resize);

function drawMatrix() {
  ctx.fillStyle = "rgba(5, 5, 5, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ff41";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const ch = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(ch, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(drawMatrix, 60);

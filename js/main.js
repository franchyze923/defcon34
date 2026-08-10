// ---------- photo lightbox ----------
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("figcaption");

document.querySelectorAll(".photo img").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    const caption = img.closest(".photo").querySelector("figcaption");
    lightboxCaption.textContent = caption ? caption.textContent : "";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  });
});

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

lightbox.addEventListener("click", closeLightbox);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
});

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

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

// ---------- ride trace draw-in ----------
const rideViz = document.querySelector(".ride-viz");
if (rideViz) {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          rideViz.classList.add("drawn");
          obs.disconnect();
        }
      });
    },
    { threshold: 0.25 }
  );
  obs.observe(rideViz);
}

// year
document.querySelectorAll("#year").forEach(el => {
  el.textContent = new Date().getFullYear();
});

// lightbox
const dialog = document.getElementById("lightbox");
const imgEl = document.getElementById("lightboxImg");
const metaEl = document.getElementById("lightboxMeta");
const closeBtn = document.getElementById("closeLightbox");

document.querySelectorAll(".tile").forEach((btn) => {
  btn.addEventListener("click", () => {
    const full = btn.dataset.full;
    const meta = btn.dataset.meta || "";
    if (!dialog || !imgEl || !metaEl) return;

    imgEl.src = full;
    imgEl.alt = meta;
    metaEl.textContent = meta;

    dialog.showModal();
  });
});

const featuredImages = [
  "img/piece-01WM.jpg",
  "img/piece-02WM.jpg",
  "img/piece-3WM.jpg",
];

const featuredImg = document.getElementById("featuredImage");

if (featuredImg) {
  const randomIndex = Math.floor(Math.random() * featuredImages.length);
  featuredImg.src = featuredImages[randomIndex];
}

closeBtn?.addEventListener("click", () => dialog?.close());

dialog?.addEventListener("click", (e) => {
  const rect = dialog.getBoundingClientRect();
  const inside =
    e.clientX >= rect.left && e.clientX <= rect.right &&
    e.clientY >= rect.top && e.clientY <= rect.bottom;
  if (!inside) dialog.close();
});

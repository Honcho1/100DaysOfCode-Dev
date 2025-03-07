document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery-item img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeButton = document.getElementById("close-button");

  function openLightbox(imageSrc) {
    lightbox.style.display = "flex";
    lightboxImage.src = imageSrc;
  }

  function closeLightbox() {
    lightbox.style.display = "none";
  }

  images.forEach((img) => {
    img.addEventListener("click", () => openLightbox(img.src));
  });

  closeButton.addEventListener("click", closeLightbox);

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });
});

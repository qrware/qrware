const profileImage = document.querySelector(".profile-image");
const imageModal = document.querySelector(".image-modal");
const modalImage = document.querySelector(".modal-image");

profileImage.addEventListener("click", () => {
  modalImage.src = profileImage.src;
  imageModal.style.display = "flex";
  setTimeout(() => {
    imageModal.classList.add("visible");
  }, 10);
});

imageModal.addEventListener("click", () => {
  imageModal.classList.remove("visible");
  setTimeout(() => {
    imageModal.style.display = "none";
  }, 300);
});

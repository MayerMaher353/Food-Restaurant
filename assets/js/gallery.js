document.addEventListener("DOMContentLoaded", function () {
  // ========== فلترة الصور مع أنيميشن ==========
  const filterButtons = document.querySelectorAll('[data-filter]');
  const galleryItems = document.querySelectorAll('[data-category]');

  // أولاً خلي الصور بحالتها الطبيعية عند التحميل
  galleryItems.forEach(item => {
    item.style.opacity = '1';
    item.style.transform = 'scale(1)';
    item.style.display = 'block';
    item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  });

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          // العنصر المطلوب → يظهر بانسيابية
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          // العنصر غير المطلوب → يختفي بانسيابية
          item.style.opacity = '0';
          item.style.transform = 'scale(0.9)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 400);
        }
      });
    });
  });
  // ========== تغيير لون الزر عند الضغط ==========
filterButtons.forEach(button => {
  button.addEventListener('click', () => {

    filterButtons.forEach(btn => btn.classList.remove('active-filter'));

    button.classList.add('active-filter');
  });
});

const galleryItem = document.querySelectorAll('[data-category] img');
            const popup = document.getElementById("image-popup");
            const popupImg = document.getElementById("popup-img");
            const popupTitle = document.getElementById("popup-title");
            const closePopup = document.querySelector(".close-popup");

            galleryItem.forEach(img => {
                img.addEventListener("click", () => {
                    popup.style.display = "flex";
                    popupImg.src = img.src;
                      popupTitle.textContent = img.alt;
                });
            });

            closePopup.addEventListener("click", () => popup.style.display = "none");
            popup.addEventListener("click", (e) => {
                if (e.target === popup) popup.style.display = "none";
            });
});

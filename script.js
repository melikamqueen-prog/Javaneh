
// انتخاب دکمه‌های گیاه
const plantTabs = document.querySelectorAll(".plant-tab");

// انتخاب بخش‌های مربوط به گیاه‌ها
const plantContents = document.querySelectorAll(".plant-content");

// تغییر گیاه هنگام کلیک
plantTabs.forEach((tab) => {
  tab.addEventListener("click", () => {

    // حذف حالت فعال از تمام دکمه‌ها
    plantTabs.forEach((item) => {
      item.classList.remove("active");
    });

    // حذف نمایش از تمام بخش‌ها
    plantContents.forEach((content) => {
      content.classList.remove("active");
    });

    // فعال کردن دکمه انتخاب‌شده
    tab.classList.add("active");

    // نمایش محتوای گیاه انتخاب‌شده
    const selectedPlant = tab.dataset.plant;
    const selectedContent = document.getElementById(selectedPlant);

    if (selectedContent) {
      selectedContent.classList.add("active");
    }

  });
});
// document.addEventListener("DOMContentLoaded", function () {
//     const slider = document.querySelector("users-slider");
//     const slides = document.querySelectorAll("user-card");
//     const slideWidth = 1116; // عرض العنصر
//     let isDragging = false;
//     let startPos = 0;
//     let currentTranslate = 0;
//     let prevTranslate = 0;
//     let currentIndex = 1; // نبدأ من النسخة الحقيقية الأولى
//     let allowShift = true;
//     let autoSlideInterval;

//     // إنشاء نسخ وهمية
//     const firstClone = slides[0].cloneNode(true);
//     const lastClone = slides[slides.length - 1].cloneNode(true);
//     slider.appendChild(firstClone);
//     slider.insertBefore(lastClone, slides[0]);

//     // تحديث الفهرس لبدء السلايدر من العنصر الأول الحقيقي
//     slider.style.transform = `translateX(${-slideWidth}px)`;

//     function setSliderPosition() {
//         slider.style.transform = `translateX(${currentTranslate}px)`;
//     }

//     function handleMouseDown(event) {
//         if (!allowShift) return; // منع تداخل الحركة
//         isDragging = true;
//         startPos = event.clientX;
//         slider.style.transition = "none"; // تعطيل الأنيميشن أثناء السحب
//         stopAutoSlide(); // إيقاف السلايدر التلقائي عند السحب
//     }

//     function handleMouseMove(event) {
//         if (isDragging) {
//             const currentPosition = event.clientX;
//             const delta = currentPosition - startPos;
//             currentTranslate = prevTranslate + delta;
//             setSliderPosition();
//         }
//     }

//     function handleMouseUp() {
//         if (!isDragging) return;
//         isDragging = false;

//         const movedBy = currentTranslate - prevTranslate;

//         if (movedBy < -50) {
//             currentIndex++;
//         } else if (movedBy > 50) {
//             currentIndex--;
//         }

//         currentTranslate = -currentIndex * slideWidth;
//         prevTranslate = currentTranslate;
//         slider.style.transition = "transform 0.3s ease-in-out";
//         setSliderPosition();

//         allowShift = false; // منع التداخل أثناء الانتقال
//         slider.addEventListener("transitionend", handleTransitionEnd);
//         startAutoSlide(); // إعادة تشغيل السلايدر التلقائي
//     }

//     function handleTransitionEnd() {
//         slider.removeEventListener("transitionend", handleTransitionEnd);
//         allowShift = true; // السماح بالحركة مرة أخرى

//         if (currentIndex === 0) {
//             currentIndex = slides.length;
//             currentTranslate = -currentIndex * slideWidth;
//             prevTranslate = currentTranslate;
//             slider.style.transition = "none";
//             setSliderPosition();
//         } else if (currentIndex === slides.length + 1) {
//             currentIndex = 1;
//             currentTranslate = -currentIndex * slideWidth;
//             prevTranslate = currentTranslate;
//             slider.style.transition = "none";
//             setSliderPosition();
//         }
//     }

//     function handleMouseLeave() {
//         if (isDragging) {
//             handleMouseUp();
//         }
//     }

//     function handleKeyDown(event) {
//         if (!allowShift) return;

//         if (event.key === "ArrowRight") {
//             currentIndex++;
//         } else if (event.key === "ArrowLeft") {
//             currentIndex--;
//         }

//         currentTranslate = -currentIndex * slideWidth;
//         prevTranslate = currentTranslate;
//         slider.style.transition = "transform 0.3s ease-in-out";
//         setSliderPosition();

//         allowShift = false;
//         slider.addEventListener("transitionend", handleTransitionEnd);
//     }

//     function autoSlide() {
//         if (!allowShift) return; // منع الحركة التلقائية أثناء الانتقال
//         currentIndex++;
//         currentTranslate = -currentIndex * slideWidth;
//         prevTranslate = currentTranslate;
//         slider.style.transition = "transform 0.3s ease-in-out";
//         setSliderPosition();
//         slider.addEventListener("transitionend", handleTransitionEnd);
//     }

//     function startAutoSlide() {
//         stopAutoSlide(); // إيقاف أي مؤقت قديم
//         autoSlideInterval = setInterval(autoSlide, 3000); // تحريك السلايدر كل 3 ثوانٍ
//     }

//     function stopAutoSlide() {
//         clearInterval(autoSlideInterval);
//     }

//     slider.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     slider.addEventListener("mouseleave", handleMouseLeave);

//     // إضافة دعم أزرار الأسهم
//     window.addEventListener("keydown", handleKeyDown);

//     // بدء السلايدر التلقائي
//     startAutoSlide();
// });
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    if (window.scrollY > 0) {
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }
})

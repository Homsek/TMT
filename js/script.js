// ***************** SWIPER ***************** //
// иницилизируется swiper
const last = new Swiper('.swiper-news', {
   direction: 'horizontal',
   loop: true,

   autoplay: {
      delay: 4000,
      stopOnLastSlide: false,
      disableOnInteraction: false
   },

   breakpoints: {
      300: {
         slidesPerView: 1.1,
      },
      336: {
         slidesPerView: 1.15,
      },
      360: {
         slidesPerView: 1.23,
      },
      378: {
         slidesPerView: 1.3,
      },
      420: {
         slidesPerView: 1.45,
      },
      478: {
         slidesPerView: 1.65,
      },
      578: {
         slidesPerView: 1.95,
      },
      678: {
         slidesPerView: 2.35,
      },
      768: {
         slidesPerView: 2.35,
      },
   },
   spaceBetween: 10,
});

// иницилизируется swiper
const cur = new Swiper('.swiper-cur', {
   direction: 'horizontal',
   loop: true,
   centeredSlides: true,

   autoplay: {
      delay: 4000,
      stopOnLastSlide: false,
      disableOnInteraction: false
   },

   breakpoints: {
      300: {
         slidesPerView: 1.15,
      },
      336: {
         slidesPerView: 1.2,
      },
      360: {
         slidesPerView: 1.28,
      },
      378: {
         slidesPerView: 1.35,
      },
      420: {
         slidesPerView: 1.5,
      },
      478: {
         slidesPerView: 1.7,
      },
      578: {
         slidesPerView: 2.0,
      },
      678: {
         slidesPerView: 2.4,
      },
      768: {
         slidesPerView: 2.4,
      },
   },
   spaceBetween: 10,
});

// ***************** TABS ***************** //
const tabsBtn = document.querySelectorAll(".tabs-release__tab");
const tabsContent = document.querySelectorAll(".tabs-release__tab-content");

tabsBtn.forEach(function (content) {
   content.addEventListener("click", function () {
      let currentBtn = content;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('_active')) {
         tabsBtn.forEach(function (content) {
            content.classList.remove('_active')
         });

         tabsContent.forEach(function (content) {
            content.classList.remove('_active')
         });

         currentBtn.classList.add('_active');
         currentTab.classList.add('_active');
      }
   })
});
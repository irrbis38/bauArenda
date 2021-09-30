window.onload = () => {
  // header menu

  const dropdownShow = document.querySelectorAll(".dropdown_show");
  const dropdownMenu = document.querySelectorAll(".dropdown_menu");

  dropdownShow.forEach((el) => {
    el.addEventListener("mouseenter", (e) => {
      e.target.lastElementChild.classList.add("active");
    });
  });

  window.onmouseover = function (e) {
    if (
      !e.target.matches(".dropdown_show") &&
      !e.target.matches(".dropdown_menu") &&
      !e.target.matches(".header__link")
    ) {
      dropdownMenu.forEach((el) => {
        el.classList.remove("active");
      });
    }
  };

  // intro slider

  const introSlider = new Swiper(".swiper", {
    loop: true,
    navigation: {
      nextEl: ".intro__next",
      prevEl: ".intro__prev",
    },
  });

  // reviews slider

  const reviewsSlider = new Swiper(".swiper", {
    loop: true,
    navigation: {
      nextEl: ".reviews__next",
      prevEl: ".reviews__prev",
    },
  });

  // to top button

  const fixedBlock = document.querySelector(".fixed");
  const toTopButton = document.querySelector(".fixed__toTop");
  const header = document.querySelector(".header");
  const intro = document.querySelector(".intro");

  let startHeight = header.offsetHeight + intro.offsetHeight;

  window.addEventListener("scroll", function () {
    if (this.scrollY > startHeight) {
      fixedBlock.classList.add("show");
    } else {
      fixedBlock.classList.remove("show");
    }
  });

  toTopButton.addEventListener("click", () => {
    const scrollTarget = document.getElementById("top");
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: "smooth",
    });
  });

  // show / hide feedback field

  const body = document.querySelector("body");
  const fixedShowField = document.querySelector(".fixed__showField");
  const fixedFeedback = document.querySelector(".fixed__feedback");
  const fixedBG = document.querySelector(".fixed__bg");
  const fixedClose = document.querySelector(".fixed__close");

  fixedShowField.addEventListener("click", () => {
    body.classList.add("lock");
    fixedFeedback.classList.add("active");
    fixedBG.classList.add("active");
  });

  fixedClose.addEventListener("click", () => {
    body.classList.remove("lock");
    fixedFeedback.classList.remove("active");
    fixedBG.classList.remove("active");
  });

  // show by scroll

  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("element-show");
      }
    });
  }

  let options = {
    threshold: [0.5],
  };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(".element-animation");

  for (let elem of elements) {
    observer.observe(elem);
  }
};

// send forms

const allForms = document.querySelectorAll("form");
const errorMessage = document.querySelector(".error__message");

const allRightMessage = () => {};

allForms.forEach((el) => {
  el.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!el.elements.name.validity.valid && !el.elements.phone.validity.valid) {
      el.firstElementChild.classList.add("show");
      el.children[1].classList.add("error");
      el.children[2].classList.add("error");
    } else if (!el.elements.name.validity.valid) {
      el.firstElementChild.classList.add("show");
      el.children[1].classList.add("error");
    } else if (!el.elements.phone.validity.valid) {
      el.firstElementChild.classList.add("show");
      el.children[2].classList.add("error");
    } else {
      let formData = new FormData(el);
      el.reset();
      el.innerHTML = "";
      el.previousElementSibling.textContent =
        "Спасибо, ваша заявка отправлена. Наш менеджер свяжется с вами в ближайшее время!";
    }
  });
});

const feedbackNameAll = document.querySelectorAll(".feedback__name");
const feedbackPhoneAll = document.querySelectorAll(".feedback__phone");

const removeOnFocus = (el) => {
  el.addEventListener("focus", (e) => {
    el.parentElement.classList.remove("error");
    el.parentElement.parentElement.children[0].classList.remove("show");
  });
};

feedbackNameAll.forEach(removeOnFocus);
feedbackPhoneAll.forEach(removeOnFocus);

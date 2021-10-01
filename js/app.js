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
  el.addEventListener("input", (e) => {
    el.parentElement.classList.remove("error");
    el.parentElement.parentElement.children[0].classList.remove("show");
  });
};

feedbackNameAll.forEach(removeOnFocus);
feedbackPhoneAll.forEach(removeOnFocus);

// Показать больше

let catalog = [
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
  {
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100 BYN",
  },
];

const catalogWrapper = document.querySelector(".catalog__wrapper");

const createElements = (arr) => {
  let catalog = [];

  for (let i = 0; i < arr.length; i++) {
    catalog[i] = document.createElement("DIV");
    catalog[i].classList.add("catalog__item");
    catalog[i].innerHTML = `<a href="#" class="catalog__link"></a>

    <div class="catalog__img">
      <img src="./img/catalog/${i + 1}.jpg" alt="экскаватор" />
    </div>

    <a href="#" class="catalog__button">Подробнее</a>

    <div class="catalog__info">
      <h4 class="catalog__header">${arr[i].header}</h4>

      <div class="catalog__options">
        <div class="catalog__feature">
          <p class="catalog__name">${arr[i].name1}</p>
          <p class="catalog__value">${arr[i].value1}</p>
        </div>

        <div class="catalog__feature">
          <p class="catalog__name">${arr[i].name2}</p>
          <p class="catalog__value">${arr[i].value2}</p>
        </div>

        <div class="catalog__feature">
          <p class="catalog__name">${arr[i].name3}</p>
          <p class="catalog__value">${arr[i].value3}</p>
        </div>
      </div>
      <!-- /.catalog__info -->

      <p class="catalog__price">${arr[i].price}</p>
    </div>
    <!-- /.catalog__info -->`;
  }

  return catalog;
};

let items = createElements(catalog);

let counter = 0;

const addToPage = (items) => {
  for (let i = counter; i < counter + 16; i++) {
    if (items[i] !== undefined) {
      catalogWrapper.appendChild(items[i]);
    }
  }
  counter += 16;
};

const catalogMore = document.querySelector(".catalog__more");
catalogMore.addEventListener("click", () => {
  addToPage(items);
});

addToPage(items);

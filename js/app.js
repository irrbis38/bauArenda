window.onload = () => {
  // header menu

  const dropdownShow = document.querySelectorAll(".dropdown_show");
  const dropdownMenu = document.querySelectorAll(".dropdown_menu");

  dropdownShow.forEach((el) => {
    el.addEventListener("mouseenter", (e) => {
      e.target.lastElementChild.classList.add("active");
    });
  });

  window.addEventListener("mouseover", (e) => {
    if (
      !e.target.matches(".dropdown_show") &&
      !e.target.matches(".dropdown_menu") &&
      !e.target.matches(".header__link")
    ) {
      dropdownMenu.forEach((el) => {
        el.classList.remove("active");
      });
    }
  });

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

// Отправка форм, расположеных на странице

const allVisibleForms = document.querySelectorAll(".feedback__form");

allVisibleForms.forEach((el) => {
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

// Отправка формы из всплывающего окна

const fixedForm = document.querySelector(".fixed__form");

fixedForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    !fixedForm.elements.name.validity.valid &&
    !fixedForm.elements.phone.validity.valid
  ) {
    fixedForm.firstElementChild.classList.add("show");
    fixedForm.children[1].classList.add("error");
    fixedForm.children[2].classList.add("error");
  } else if (!fixedForm.elements.name.validity.valid) {
    fixedForm.firstElementChild.classList.add("show");
    fixedForm.children[1].classList.add("error");
  } else if (!fixedForm.elements.phone.validity.valid) {
    fixedForm.firstElementChild.classList.add("show");
    fixedForm.children[2].classList.add("error");
  } else {
    let formData = new FormData(fixedForm);
    fixedForm.reset();
    fixedForm.innerHTML = `<p class="fixed__after">Спасибо, ваша заявка отправлена.<br>Наш менеджер свяжется с вами в ближайшее время!</p><input type="submit" class="fixed__submit btn__yellow btn__link" value="Отправить" name="submit">`;
  }
});

// Очистка сообщений об ошибке при фокусе на input

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

// КАТАЛОГ

const catalogWrapper = document.querySelector(".catalog__wrapper");
let counter = 0;

// Содержимое каталога

// Экскаваторы-погрузчики
let excavator = [
  {
    imgName: "1",
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100",
  },
  {
    imgName: "1",
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100",
  },
  {
    imgName: "1",
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100",
  },
  {
    imgName: "1",
    header: "Аренда экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100",
  },
];

// Самосвалы
let tipper = [
  {
    imgName: "2",
    header: "Аренда самосвалов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100",
  },
];

// Бульдозеры
let dozer = [
  {
    imgName: "3",
    header: "Аренда бульдозеров CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100",
  },
];

// Гусеничный экскаватор
let digger = [
  {
    imgName: "4",
    header: "Аренда гусинечных экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100",
  },
];

// Погрузчик
let loader = [
  {
    imgName: "5",
    header: "Аренда погрузчиков CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100",
  },
];

// Фронтальный погрузчик
let fLoader = [
  {
    imgName: "6",
    header: "Аренда фронтальных погрузчиков CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100",
  },
];

// Колесный экскаватор
let wheelDigger = [
  {
    imgName: "7",
    header: "Аренда колёсных экскаваторов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100",
  },
];

// Тралы и низкорамные площадки
let flail = [
  {
    imgName: "8",
    header: "Аренда тралов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100",
  },
];

// Грунтовой каток
let truck = [
  {
    imgName: "9",
    header: "Аренда грунтовых катков CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100",
  },
];

// Автокран
let crane = [
  {
    imgName: "10",
    header: "Аренда автокранов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100",
  },
];

// Автогрейдер
let grader = [
  {
    imgName: "11",
    header: "Аренда автогрейдеров CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100",
  },
];

// Телескопический погрузчик
let telescopicLoader = [
  {
    imgName: "12",
    header: "Аренда телескопических погрузчиков CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100",
  },
];

// Мини-техника
let mini = [
  {
    imgName: "13",
    header: "Аренда мини-техники CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100",
  },
];

// Гидромолоты
let hydraulicHammer = [
  {
    imgName: "14",
    header: "Аренда гидромолотов CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100",
  },
];

// Буровая техника
let drillingEquipment = [
  {
    imgName: "15",
    header: "Аренда буровой техники CATERPILLAR",
    name1: "Объём фронтального ковша",
    value1: "1,3 м3",
    name2: "Высота выгрузки",
    value2: "2690 мм",
    name3: "Мощность двигателя",
    value3: "100 л.с.",
    price: "100",
  },
];

// Создание карточки каталога

const createElement = (arr) => {
  let catalog = [];

  for (let i = 0; i < arr.length; i++) {
    catalog[i] = document.createElement("DIV");
    catalog[i].classList.add("catalog__item");
    catalog[i].innerHTML = `<a href="#" class="catalog__link"></a>

    <div class="catalog__img">
      <img src="./img/catalog/${arr[i].imgName}.jpg" alt="экскаватор" />
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

      <p class="catalog__price">${arr[i].price} BYN</p>
    </div>
    <!-- /.catalog__info -->`;
  }

  return catalog;
};

// выбор категории каталога

const concatCategories = () => {
  union = excavator.concat(
    tipper,
    dozer,
    digger,
    loader,
    fLoader,
    wheelDigger,
    flail,
    truck,
    crane,
    grader,
    telescopicLoader,
    mini,
    hydraulicHammer,
    drillingEquipment
  );
  return union;
};
let catalog = concatCategories();
let category = "all";
let items = createElement(catalog);

// переключение категории

const switchCategory = (name) => {
  switch (name) {
    case "all":
      catalog = concatCategories();
      break;
    case "excavator":
      catalog = [...excavator];
      break;
    case "tipper":
      catalog = [...tipper];
      break;
    case "dozer":
      catalog = [...dozer];
      break;
    case "digger":
      catalog = [...digger];
      break;
    case "loader":
      catalog = [...loader];
      break;
    case "f-loader":
      catalog = [...fLoader];
      break;
    case "wheel-digger":
      catalog = [...wheelDigger];
      break;
    case "flail":
      catalog = [...flail];
      break;
    case "truck":
      catalog = [...truck];
      break;
    case "crane":
      catalog = [...crane];
      break;
    case "grader":
      catalog = [...grader];
      break;
    case "telescopic-loader":
      catalog = [...telescopicLoader];
      break;
    case "mini":
      catalog = [...mini];
      break;
    case "hydraulic-hammer":
      catalog = [...hydraulicHammer];
      break;
    case "drilling-equipment":
      catalog = [...drillingEquipment];
      break;
  }
};

const catalolgCategories = document.querySelectorAll(".catalog__category");

catalolgCategories.forEach((el) => {
  el.addEventListener("click", (e) => {
    catalolgCategories.forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
    category = e.target.dataset.type;
    switchCategory(category);

    counter = 0;
    catalogWrapper.innerHTML = "";
    addToPage(createElement(catalog));
  });
});

//сортировка каталога

const catalogSort = document.querySelector(".catalog__sort");
const catalogSortList = document.querySelector(".catalog__sort-list");
const catalogSortItems = document.querySelectorAll(".catalog__sort-item");
const catalogSortType = document.querySelector(".catalog__sort-type");

const hideCatalogSortList = () => {
  catalogSortList.classList.remove("active");
};

catalogSort.addEventListener("click", () => {
  catalogSortList.classList.add("active");
});

window.addEventListener("click", (e) => {
  if (
    !e.target.matches(".catalog__sort") &&
    !e.target.matches(".catalog__sort-list") &&
    !e.target.matches(".catalog__sort-type") &&
    !e.target.matches(".catalog__arrow")
  ) {
    hideCatalogSortList();
  }
});

catalogSortItems.forEach((el) => {
  el.addEventListener("click", (e) => {
    catalogSortType.textContent = e.target.dataset.type;
    hideCatalogSortList();
  });
});

// отрисовка каталога

const addToPage = (items) => {
  for (let i = counter; i < counter + 16; i++) {
    if (items[i] !== undefined) {
      catalogWrapper.appendChild(items[i]);
    }
  }
  counter += 16;
};

// работа кнопки "показать больше"

const catalogMore = document.querySelector(".catalog__more");
catalogMore.addEventListener("click", () => {
  addToPage(items);
});

// первоначальное отображение каталога

addToPage(items);

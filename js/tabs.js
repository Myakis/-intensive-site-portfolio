const tabsuttons = document.querySelectorAll('.design-list__item ');
const tabsDescription = document.querySelectorAll('.design__descr');
const imageDescription = document.querySelectorAll('.design-images');

//Сверяем значаение data атрибута элемента с data атрибутом кнопки, по которой пришелся клик
const changeClassSomeEl = (elem, dataValue) => {
  elem.forEach(item => {
    if (dataValue === item.dataset.tabsField) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
};

tabsuttons.forEach(item => {
  item.addEventListener('click', e => {
    //Получение data атрибута
    const dataAttr = e.target.dataset.tabsHandler;

    changeClassSomeEl(tabsDescription, dataAttr);
    changeClassSomeEl(imageDescription, dataAttr);

    //Кнопка, по которой кликнули становится активной и ей добавляется нужный класс
    tabsuttons.forEach(btn => {
      if (btn == e.target) {
        btn.classList.add('design-list__item_active');
      } else {
        btn.classList.remove('design-list__item_active');
      }
    });

    //Смена title документа
    if (e.target.closest('.design-list__item')) {
      const btnText = e.target.innerText;
      document.title = btnText;
    }
  });
});

//СПОЙЛЕРЫ ==================================
//МОЙ СКРИПТ ДЛЯ ОПРЕДЕЛНИЯ ВЫСОТЫ КАЖДОГО ЭЛЕМЕНТА

const spoilers = document.querySelectorAll('[data-spoiler');
const spoilerBodys = document.querySelectorAll('.spoiler__content');

//Пробeгаемся через каждый спойлер
spoilers.forEach(spoiler => {
  const spoilerHead = spoiler.querySelector('.spoiler__title');
  const spoilerCurrentBody = spoiler.querySelector('.spoiler__content');
  //На кнопку вешаем обработчик
  spoilerHead.addEventListener('click', () => {
    spoilers.forEach(accordion => {
      //Пробегаемся по всем спойлерам и зачищаем актинвый класс
      accordion.classList.remove('spoiler_active');
    });
    //Обнуляем высоту каждого
    spoilerBodys.forEach(body => {
      body.style.height = null;
    });
    //Добавляем класс активного спойлера
    spoiler.classList.add('spoiler_active');
    //Ставим в стиле вычесленную, но скрытую высоту
    spoilerCurrentBody.style.height = spoilerCurrentBody.scrollHeight + 'px';
  });
});
//==========================================================================================================
//Простой крипт-пример для реалиции спойлера через max-height

const accordeons = document.querySelectorAll('.accordeon');
accordeons.forEach(item => {
  item.addEventListener('click', e => {
    if (e.target.classList.contains('accordeon__btn')) {
      item.classList.toggle('accoredon__active');
    }
  });
});
//==========================================================================================================
//Простой крипт-пример для реалиции спойлера через height

const accordeonsH = document.querySelectorAll('.accordeon-h');
accordeonsH.forEach(item => {
  item.addEventListener('click', e => {
    if (e.target.classList.contains('accordeon__btn')) {
      item.classList.toggle('accoredon-h__active');
    }
  });
});

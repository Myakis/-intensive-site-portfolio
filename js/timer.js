function num_word(value, words) {
  value = Math.abs(value) % 100;
  let num = value % 10;
  if (value > 10 && value < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num == 1) return words[0];
  return words[2];
}

let interval;
const updateClock = () => {
  const timeField = document.querySelector('.timer__time');
  const timeDays = document.querySelector('.timer__days');
  const timeHours = document.querySelector('.timer__hours');
  const timeMinutes = document.querySelector('.timer__minutes');
  const timeSeconds = document.querySelector('.timer__seconds');
  const deadline = '31 marh 2022';

  const currentDate = new Date().getTime();
  const deadlineDate = new Date(deadline).getTime();
  const timeRemaining = (deadlineDate - currentDate) / 1000;

  //Получаем данные о времени
  const days = Math.floor(timeRemaining / 60 / 60 / 24);
  const hours = Math.floor((timeRemaining / 60 / 60) % 24);
  const minutes = Math.floor((timeRemaining / 60) % 60);
  const seconds = Math.floor(timeRemaining % 60);

  //Добавляем нули, если меньше 10
  const formatTime = time => (time < 10 ? `0${time}` : time);

  //Всталяем значения
  timeField.textContent = `${formatTime(days)}:${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  timeDays.textContent = num_word(days, ['день', 'дни', 'дней']);
  timeHours.textContent = num_word(hours, ['час', 'часа', 'часов']);
  timeMinutes.textContent = num_word(minutes, ['минута', 'минуты', 'минут']);
  timeSeconds.textContent = num_word(seconds, ['секунда', 'секунды', 'секунд']);

  if (timeRemaining < 0) {
    //Обнуляем значения и очищаем setInterval
    timeField.textContent = `00:00:00:00`;

    clearInterval(interval);
  }
};

interval = setInterval(updateClock, 500);

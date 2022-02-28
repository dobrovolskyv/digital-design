document.addEventListener("DOMContentLoaded", function () {
  console.log("good");
  const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  function numberWeek(w) {
    if (w < 7) {
      return "1 неделя";
    } else if (w > 7 && w <= 14) {
      return "2 неделя";
    } else if (w > 14 && w <= 21) {
      return "3 неделя";
    } else if (w > 21 && w <= 28) {
      return "4 неделя";
    } else if (w > 28 && w <= 31) {
      return "5 неделя";
    }
  }
  function getDayInfo(date) {
    const data = new Date(date);
    const year = data.getFullYear();

    const month = months[data.getMonth()];
    const day = days[data.getDay()];
    const number = numberWeek(data.getDate());

    const formatted = `${day}, ${number} ${month} ${year} года `;
    return formatted;
  }
  getDayInfo("02,28,2022");
  document.querySelector("#d").innerHTML = getDayInfo("02,28,2022");
  // document.querySelector("#d").innerHTML = getDayInfo("03.28.2022");
  console.log(getDayInfo("03.28.2022") + " " + "new Date");
});

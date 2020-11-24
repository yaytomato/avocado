import moment from "moment";
import "moment/locale/ko";

export const getLatestReleaseDate = (): string => {
  const today = moment();
  const yesterday = moment().add(-1, "days");

  // ANCHOR: update articles every odd day of year
  return today.dayOfYear() % 2
    ? today.format("YYYY-MM-DD")
    : yesterday.format("YYYY-MM-DD");
};

const monthInKor = [
  "일월",
  "이월",
  "삼월",
  "사월",
  "오월",
  "유월",
  "칠월",
  "팔월",
  "구월",
  "시월",
  "십일월",
  "십이월",
];

export const getMonthInKor = (): string => {
  return monthInKor[moment().month()];
};

const weekNumInKor = [
  "첫번째",
  "두번째",
  "세번째",
  "네번째",
  "다섯번째",
  "마지막",
];

export const getWeekNumInKor = (): string => {
  const now = moment();
  let firstWeekdayOfMonth = moment().startOf("month").day(now.day());
  if (firstWeekdayOfMonth.month() < now.month())
    firstWeekdayOfMonth = firstWeekdayOfMonth.add(1, "week");

  let weekNum = now.diff(firstWeekdayOfMonth, "weeks");

  let lastWeekdayOfMonth = moment().endOf("month").day(now.day());
  if (lastWeekdayOfMonth.month() > now.month())
    lastWeekdayOfMonth = lastWeekdayOfMonth.subtract(1, "week");

  if (now.date() === lastWeekdayOfMonth.date())
    weekNum = weekNumInKor.length - 1;

  return weekNumInKor[weekNum];
};

export const getWeekdayInKor = (): string => {
  return moment().format("dddd");
};

export const getTimeMeridiem = (): string => {
  return moment().format("A");
};

export const getHourInKor = (): string => {
  const hour = parseInt(moment().format("h"));
  switch (hour) {
    case 1:
      return "한시";
    case 2:
      return "두시";
    case 3:
      return "세시";
    case 4:
      return "네시";
    case 5:
      return "다섯시";
    case 6:
      return "여섯시";
    case 7:
      return "일곱시";
    case 8:
      return "여덟시";
    case 9:
      return "아홉시";
    case 10:
      return "열시";
    case 11:
      return "열한시";
    case 12:
    default:
      return "열두시";
  }
};

const numInKor = ["", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];

export const getMinuteInKor = (): string => {
  const minute = moment().format("mm");
  const tensDigit = parseInt(minute[0]);
  const onesDigit = parseInt(minute[1]);
  if (tensDigit === 0 && onesDigit === 0) {
    return "영";
  }

  let minuteInKor = "";
  if (tensDigit >= 1) {
    if (tensDigit !== 1) {
      minuteInKor = numInKor[tensDigit];
    }
    minuteInKor += "십";
  }
  minuteInKor += numInKor[onesDigit];
  return minuteInKor;
};

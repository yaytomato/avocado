import moment from "moment";
import "moment/locale/ko";

export const getLatestReleaseDate = (timeStr: string): string => {
  const today = moment(timeStr);
  const yesterday = moment(timeStr).add(-1, "days");

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

export const getMonthInKor = (timeStr: string): string => {
  return monthInKor[moment(timeStr).month()];
};

const weekNumInKor = [
  "첫번째",
  "두번째",
  "세번째",
  "네번째",
  "다섯번째",
  "마지막",
];

export const getWeekNumInKor = (timeStr: string): string => {
  const today = moment(timeStr);
  let firstWeekdayOfMonth = moment(timeStr).startOf("month").day(today.day());
  if (firstWeekdayOfMonth.month() < today.month())
    firstWeekdayOfMonth = firstWeekdayOfMonth.add(1, "week");

  let weekNum = today.diff(firstWeekdayOfMonth, "weeks");

  let lastWeekdayOfMonth = moment(timeStr).endOf("month").day(today.day());
  if (lastWeekdayOfMonth.month() > today.month())
    lastWeekdayOfMonth = lastWeekdayOfMonth.subtract(1, "week");

  if (today.date() === lastWeekdayOfMonth.date())
    weekNum = weekNumInKor.length - 1;

  return weekNumInKor[weekNum];
};

export const getWeekdayInKor = (timeStr: string): string => {
  return moment(timeStr).format("dddd");
};

export const getTimeMeridiem = (timeStr: string): string => {
  return moment(timeStr).format("A");
};

export const getHourInKor = (timeStr: string): string => {
  const hour = parseInt(moment(timeStr).format("h"));
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

export const getMinuteInKor = (timeStr: string): string => {
  const minute = moment(timeStr).format("mm");
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

export const getWeatherInKor = (temperature: number): string => {
  if (temperature < 0) {
    return "영하 온도 어 추워";
  } else if (temperature < 5) {
    return "5도도 안되네 어 추워";
  } else if (temperature < 10) {
    return "10도도 안되네 어 추워";
  } else if (temperature < 15) {
    return "15도도 안되네 어 추워";
  } else {
    return "15도는 넘네 어 추워";
  }
};

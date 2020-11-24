import moment from "moment";

export const getLatestReleaseDate = (): string => {
  const today = moment();
  const yesterday = moment().add(-1, "days");

  // ANCHOR: update articles every odd day of year
  return today.dayOfYear() % 2
    ? today.format("YYYY-MM-DD")
    : yesterday.format("YYYY-MM-DD");
};

export const monthInKor = [
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

const weekNumInKor = [
  "첫번째",
  "두번째",
  "세번째",
  "네번째",
  "다섯번째",
  "마지막",
];

export const getWeekNumInKor = (date: moment.Moment): string => {
  let firstWeekdayOfMonth = moment().startOf("month").day(date.day());
  if (firstWeekdayOfMonth.month() < date.month())
    firstWeekdayOfMonth = firstWeekdayOfMonth.add(1, "week");

  let weekNum = date.diff(firstWeekdayOfMonth, "weeks");

  let lastWeekdayOfMonth = moment().endOf("month").day(date.day());
  if (lastWeekdayOfMonth.month() > date.month())
    lastWeekdayOfMonth = lastWeekdayOfMonth.subtract(1, "week");

  if (date.date() === lastWeekdayOfMonth.date())
    weekNum = weekNumInKor.length - 1;

  return weekNumInKor[weekNum];
};

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

export const getWeatherInKor = (temperature: number, sky: string): string => {
  if (sky === "Rain") {
    return "나가는길에 우산 꼭 챙겨요";
  } else if (sky === "Snow") {
    return "우산 챙기구 걸을때 조심해요";
  }

  if (temperature < 0) {
    return "덜덜덜 이가 떨리도록 추워요";
  } else if (temperature < 7) {
    return "덜덜덜 오늘은 패딩이 필수에요";
  } else if (temperature < 14) {
    return "방심하지 마요. 겉옷을 꼭 챙겨요";
  } else if (temperature < 20) {
    return "완벽하군. 산책하기 딱 좋아요";
  } else if (temperature < 25) {
    return "따뜻한 오늘, 피크닉을 부르는 날이에요";
  } else {
    return "에어컨아 살려줘";
  }
};

// NOTE GA + GTM
declare global {
  interface Window {
    gtag: any;
  }
}
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag("config", process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

import moment from "moment";

export const getLatestReleaseDate = (): string => {
  const today = moment();
  const yesterday = moment().add(-1, "days");

  // ANCHOR: update articles every odd day of year
  return today.dayOfYear() % 2
    ? today.format("YYYY-MM-DD")
    : yesterday.format("YYYY-MM-DD");
};

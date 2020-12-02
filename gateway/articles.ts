import axios from "axios";
import moment from "moment";

import { articlesAPI } from "../constants/global";
import { getLatestReleaseDate } from "../helper";

export const fetchLateReleases = (today, onFetch) => {
  const filter = (releaseDate, latestReleaseDate) =>
    releaseDate === latestReleaseDate;
  const onlyFirstRow = true;
  fetchArticles(today, filter, onFetch, onlyFirstRow);
};

export const fetchPastReleases = (today, onFetch) => {
  const filter = (releaseDate, latestReleaseDate) =>
    moment(releaseDate).isBefore(latestReleaseDate);
  fetchArticles(today, filter, onFetch);
};

const fetchArticles = (today, filter, onFetch, onlyFirstRow = false) => {
  axios.get(articlesAPI).then((res) => {
    const lrd = getLatestReleaseDate(today);
    // NOTE: articles are ordered from newest to oldest (releaseDate DESC)
    const cells = res.data.feed.entry;
    const filtered = [];
    let pushRest = false;

    for (let i = 6; i < cells.length; i += 6) {
      const rd = cells[i].content.$t;
      if (pushRest || filter(rd, lrd)) {
        const category = cells[i + 1].content.$t;

        filtered.push({
          releaseDate: rd,
          category,
          title: cells[i + 2].content.$t,
          author: cells[i + 3].content.$t,
          url: cells[i + 4].content.$t,
          img: cells[i + 5].content.$t,
        });

        // NOTE: fetch all the past articles
        if (!onlyFirstRow) {
          if (!pushRest) pushRest = true;
          // NOTE: finish fetching after one row
        } else if (onlyFirstRow && category === "잘 움직이기") {
          i = cells.length;
        }
      }
    }

    onFetch(filtered, lrd);
  });
};

import { podcastsEn, podcastsFa } from "~/utilities/fakeData";
import { Podcast } from "~/utilities/types";

export default defineEventHandler((event) => {
  const { locale } = getQuery(event);
  const podcasts: Podcast[] =
    locale && locale === "fa" ? podcastsFa : podcastsEn;

  return podcasts;
});

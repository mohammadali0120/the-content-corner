import { podcastsEn, podcastsFa } from "~/utilities/fakeData";
import { Podcast } from "~/utilities/types";

export default defineEventHandler(async (event) => {
  const { locale } = await getQuery(event);
  const podcasts: Podcast[] =
    locale && locale === "fa" ? podcastsFa : podcastsEn;

  return podcasts;
});

import { podcastsEn, podcastsFa } from "~/utilities/fakeData";
import { Podcast } from "~/utilities/types";

export default defineEventHandler(async (event) => {
  const { locale, filterKey } = await getQuery(event);
  const podcasts: Podcast[] =
    locale && locale === "fa" ? podcastsFa : podcastsEn;

  switch (filterKey) {
    case "newest":
      return podcasts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    case "most-popular":
      return podcasts.sort((a, b) => b.likes - a.likes);
    case "oldest":
      return podcasts.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    default:
      return podcasts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
  }
});

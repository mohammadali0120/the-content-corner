import { videosEn, videosFa } from "~/utilities/fakeData";
import { Video } from "~/utilities/types";

export default defineEventHandler(async (event) => {
  const { locale, filterKey } = await getQuery(event);
  const videos: Video[] = locale && locale === "fa" ? videosFa : videosEn;

  switch (filterKey) {
    case "newest":
      return videos.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    case "most-popular":
      return videos.sort((a, b) => b.likes - a.likes);
    case "oldest":
      return videos.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    default:
      return videos.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
  }
});

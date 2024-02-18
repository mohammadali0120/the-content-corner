import { videosEn, videosFa } from "~/utilities/fakeData";
import { Video } from "~/utilities/types";

export default defineEventHandler((event) => {
  const { locale } = getQuery(event);
  const videos: Video[] = locale && locale === "fa" ? videosFa : videosEn;

  return videos;
});

import { videosEn, videosFa } from "~/utilities/fakeData";
import { Video } from "~/utilities/types";

export default defineEventHandler(async (event) => {
  const { locale } = await getQuery(event);
  const videos: Video[] = locale && locale === "fa" ? videosFa : videosEn;

  return videos;
});

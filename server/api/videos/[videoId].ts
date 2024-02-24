import { videosEn, videosFa } from "~/utilities/fakeData";
import { Video } from "~/utilities/types";

export default defineEventHandler(async (event) => {
  const { locale } = await getQuery(event);
  const videos = locale && locale === "fa" ? videosFa : videosEn;
  const videoId = getRouterParam(event, "videoId");

  const foundedVideo = videos.find((video: Video) => {
    return video.id === +videoId!;
  });

  return foundedVideo;
});

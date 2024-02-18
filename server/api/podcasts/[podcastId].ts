import { podcastsEn, podcastsFa } from "~/utilities/fakeData";
import { Podcast } from "~/utilities/types";

export default defineEventHandler((event) => {
  const { locale } = getQuery(event);
  const podcasts = locale && locale === "fa" ? podcastsFa : podcastsEn;
  const podcastId = getRouterParam(event, "podcastId");

  const foundedPodcast = podcasts.find((podcast: Podcast) => {
    return podcast.id === +podcastId!;
  });

  return foundedPodcast;
});

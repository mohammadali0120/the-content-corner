import { postsEn, postsFa } from "~/utilities/fakeData";
import { Post } from "~/utilities/types";

export default defineEventHandler(async (event) => {
  const { locale } = await getQuery(event);
  const posts = locale && locale === "fa" ? postsFa : postsEn;
  const postId = getRouterParam(event, "postId");

  const foundedPodcast = posts.find((post: Post) => {
    return post.id === +postId!;
  });

  return foundedPodcast;
});

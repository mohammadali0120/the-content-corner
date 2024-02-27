import { postsEn, postsFa } from "~/utilities/fakeData";
import { Post } from "~/utilities/types";

export default defineEventHandler(async (event) => {
  const { locale } = await getQuery(event);
  const posts: Post[] = locale && locale === "fa" ? postsFa : postsEn;

  return posts;
});

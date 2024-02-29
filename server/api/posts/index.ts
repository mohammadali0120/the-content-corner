import { postsEn, postsFa } from "~/utilities/fakeData";
import { Post } from "~/utilities/types";

export default defineEventHandler(async (event) => {
  const { locale, filterKey } = await getQuery(event);
  const posts: Post[] = locale && locale === "fa" ? postsFa : postsEn;

  switch (filterKey) {
    case "newest":
      return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    case "most-popular":
      return posts.sort((a, b) => b.likes - a.likes);
    case "oldest":
      return posts.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    default:
      return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
  }
});

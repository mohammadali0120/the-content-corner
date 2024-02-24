import { users } from "~/utilities/fakeData";
import { User } from "~/utilities/types";

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "token");

  const data: User | undefined = users.find(
    (user: User) => user.token === token
  );

  if (!data) {
    deleteCookie(event, "token");
    return;
  }

  if (token !== data.token) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    });
  }

  return data;
});

import { TokenMaxAge } from "~/composables/states";
import { users } from "~/utilities/fakeData";
import { User } from "~/utilities/types";

export default defineEventHandler(async (event) => {
  const query = await getQuery(event);

  const data: User | undefined = users.find((user: User) => {
    return user.email === query.email && user.password === query.password;
  });

  if (!data) {
    throw createError({
      statusCode: 404,
      statusMessage: "User Nout Found",
    });
  }

  setCookie(event, "token", data.token, {
    sameSite: "lax",
    secure: true,
    maxAge: TokenMaxAge,
    path: "/",
  });
  return data;
});

import axios from "axios";

export default (
  baseUrl: string,
  headers: any,
  credentials: boolean = false
) => {
  const clientSideError = useError();

  const router = useRouter();

  const $axios = axios.create({
    baseURL: baseUrl,
    withCredentials: credentials,
    headers,
  });

  $axios.interceptors.response.use(
    (response: any) => {
      return response;
    },

    (error: any) => {
      if (error.response.status === 404) {
        //   clientSideError.value = {
        //     statusCode: 404,
        //     name: "404",
        //     description: "Page Not Found",
        //     message: "Page Not Found",
        //   };
      } else if (error.response.status === 401) {
        // router.push("/login");
      } else if (error.response.status === 403) {
      } else {
        // clientSideError.value = {
        //   statusCode: 500,
        //   name: "500",
        //   description: "Internal Server Error",
        //   message: "Internal Server Error",
        // };
      }

      return Promise.reject(error);
    }
  );

  return {
    axios: $axios,
  };
};

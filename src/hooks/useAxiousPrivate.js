import { useEffect } from "react";
import { axiosPriveate } from "../api/axios/axios.config";
import { useSelector } from "react-redux";
import handleRefreshToken from "../utils/handleRefreshToken";

const useAxiousPrivate = () => {
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    const requestInterceptor = axiosPriveate.interceptors.request.use(
      (config) => {
        console.log({ config });

        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosPriveate.interceptors.response.use(
      (response) => response,

      async (error) => {
        const prevRequest = error.config;
        console.log({ prevRequest });
        const { status } = prevRequest;

        if ((status === 401 || status === 403) && !prevRequest.sent) {
          // Chúng ta sẽ Thực hiện kịch bản refresh token tại đây
          prevRequest.sent = true;

          const token = await handleRefreshToken();
          prevRequest.headers["Authorization"] = `Bearer ${accessToken}`;

          console.log(token);
          return axiosPriveate(prevRequest);
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosPriveate.interceptors.request.eject(requestInterceptor);
      axiosPriveate.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken]);
};

export default useAxiousPrivate;

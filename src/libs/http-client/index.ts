import axios from "axios";

export const httpClient = (() => {
  const instance = axios.create({
    baseURL: "http://localhost:3000/climbers",
  });

  return {
    async get<T>(
      url: string,
      config?: {
        params?: any;
        paramsSerializer?: (param: Record<string, any>) => any;
      }
    ) {
      const response = await instance.get<T>(url, config);
      // @ts-expect-error data로 항상 보낼거임.
      return response.data?.data;
    },

    async post<T>(
      url: string,
      data: Record<string, any>,
      config?: { headers?: { "content-type": string } }
    ) {
      const response = await instance.post<T>(url, data, config);
      // @ts-expect-error data로 항상 보낼거임.
      return response.data?.data;
    },
  };
})();

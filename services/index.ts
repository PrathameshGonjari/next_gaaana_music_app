import axios from "axios";

class Services {
  get = async (url: string, params?: never) => {
    return await new Promise((resolve, reject) => {
      try {
        axios
          .get(`${process.env.NEXT_PUBLIC_BASE_URL as string}${url}`, params)
          .then((res) => {
            resolve({ data: res });
          })
          .catch(() => {
            reject(new Error("error has accoured"));
          });
      } catch (error) {
        reject(new Error("error has accoured"));
      }
    });
  };

  post = async (url: string, params?: unknown) => {
    return await new Promise((resolve, reject) => {
      try {
        axios
          .post(`${process.env.NEXT_PUBLIC_BASE_URL as string}${url}`, {
            headers: {
              // eslint-disable-next-line @typescript-eslint/naming-convention
              "Content-Type": "application/json",
            },
            params,
          })
          .then((res) => {
            resolve({ data: res });
          })
          .catch(() => {
            reject(new Error("error has accoured"));
          });
      } catch (error) {
        reject(new Error("error has accoured"));
      }
    });
  };
}

export default new Services();

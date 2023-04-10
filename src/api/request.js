import axios from "axios";

export const request = (url, method, data) =>
  axios({
    url: `${process.env.MONGODB_URI}${url}`,
    method: method,
    data: data,
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token")
        ? localStorage.getItem("token")
        : null,
    },
  });

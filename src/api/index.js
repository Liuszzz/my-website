import axios from "axios";

import music from "@/api/music";

const Api = {};

const axiosApi = () => {
  music.map(item => {
    Api[item.name] = options => {
      let url = item.url;
      return axios(
        Object.assign({}, item, options, {
          url
        })
      );
    };
    return item;
  });
};

axiosApi();

export default Api;

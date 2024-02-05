import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b6529f9b724c4b44b823f321783d6a54",
  },
});

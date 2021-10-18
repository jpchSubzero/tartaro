import axios from "axios";

export default axios.create({
    baseURL: `https://atomicos.azurewebsites.net/api/`
  });
import axios from "axios";

const Services = {
  async getRequest(url) {
    const response = await axios.get(url);
    return response;
  },
};

export default Services;

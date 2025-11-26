import axios from "axios";

const instance = axios.create({
  baseURL: "https://e-commerce-backend-upui.onrender.com",
});

export default instance;
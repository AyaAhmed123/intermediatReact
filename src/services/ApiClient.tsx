import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
export class ApiClient<T> {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = () => {
    return axiosInstance.get(this.endPoint).then((res) => res.data);
  };
  add = (data: T) => {
    return axiosInstance.post(this.endPoint, data).then((res) => res.data);
  };
}

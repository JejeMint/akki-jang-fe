import axios from "axios";

const instance = axios.create({
  baseURL: "", // API의 기본 URL 설정
  timeout: 5000, // 요청 제한 시간 설정
});

export default instance;

import axiosInstance from "../config/axiosInstance";

// 예시
export const getUsers = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

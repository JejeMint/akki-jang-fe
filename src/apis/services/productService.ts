import axiosInstance from "../config/axiosInstance";

export const getAllProducts = async () => {
  try {
    const response = await axiosInstance.get("/api/products");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

export const postProduct = async (data: FormData) => {
  try {
    const headers = {
      "Content-Type": "multipart/form-data",
    };

    const response = await axiosInstance.post("/api/products", data, {
      headers,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to post data");
  }
};

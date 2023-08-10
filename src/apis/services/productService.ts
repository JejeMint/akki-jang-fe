import axiosInstance from "../config/axiosInstance";

export const getAllProducts = async () => {
  try {
    // const response = await axiosInstance.get("/api/products");
    const response = {
      data: [
        {
          id: 1,
          title: "내가아끼는기타",
          price: 80000,
          imageUrl:
            "https://kr.yamaha.com/ko/files/product_thumb_c40ii_d52603be0a849a1f635c74d9e2b2e8c7.jpg?impolicy=resize&imwid=735&imhei=735",
          regionCode: "3",
          createdAt: "2023-08-01T08:34:15.310969",
        },
        {
          id: 2,
          title: "내가아끼는기타",
          price: 80000,
          imageUrl:
            "https://m.gopherwood.co.kr/web/product/big/202111/1de0df43078c40ed90b9e6247e8618ee.jpg",
          regionCode: "3",
          createdAt: "2023-08-01T08:34:15.310969",
        },
        {
          id: 3,
          title: "내가아끼는기타",
          price: 80000,
          imageUrl:
            "https://m.gopherwood.co.kr/web/product/big/202111/1de0df43078c40ed90b9e6247e8618ee.jpg",
          regionCode: "3",
          createdAt: "2023-08-01T08:34:15.310969",
        },
        {
          id: 4,
          title: "내가아끼는기타",
          price: 80000,
          imageUrl:
            "https://m.gopherwood.co.kr/web/product/big/202111/1de0df43078c40ed90b9e6247e8618ee.jpg",
          regionCode: "3",
          createdAt: "2023-08-01T08:34:15.310969",
        },
      ],
    };

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};

export const getProduct = async (id: number) => {
  try {
    // const response = await axiosInstance.get(`/api/products/${id}`);
    const response = {
      data: {
        id: 1,
        title: "내가아끼는기타",
        content: "내용입니다",
        price: 80000,
        imageUrl:
          "https://www.tonequestshop.co.kr/d_fileinfo/img/3675000310_l1",
        categoryCode: "1",
        regionCode: "3",
        createdAt: "2023-08-01T08:34:15.310969",
      },
    };

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch product");
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

export const deleteProduct = async (id: number | undefined) => {
  try {
    const response = await axiosInstance.delete(`/api/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to delete");
  }
};

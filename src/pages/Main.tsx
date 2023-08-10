import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllProducts } from "../apis/services/productService";
import ProductList from "../components/lists/ProductList";
import Product from "../types/Product.type";

const Main = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <MainWrapper>
      <ProductList products={products} />
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  padding: 12px;
`;

export default Main;

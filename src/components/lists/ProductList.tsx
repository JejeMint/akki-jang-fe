import styled from "styled-components";
import Product from "../../types/Product.type";
import ProductCard from "../cards/ProductCard";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <Grid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 12px;
`;

export default ProductList;

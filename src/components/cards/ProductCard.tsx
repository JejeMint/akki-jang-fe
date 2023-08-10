import "moment/locale/ko";
import Moment from "react-moment";
import styled from "styled-components";
import { REGION_OPTIONS } from "../../constants/options/regionOptions";
import Product from "../../types/Product.type";

const ProductCard = ({ product }: { product: Product }) => {
  const regionCode = Number(product.regionCode);
  return (
    <CardWrapper>
      <Image src={product.imageUrl} alt={product.title} />
      <Info>
        <Price>{product.price.toLocaleString()}원</Price>
        <Title>{product.title}</Title>
        <SubInfo>
          <SubText>{REGION_OPTIONS[regionCode].label}</SubText>
          <SubText>{"·"}</SubText>
          <SubText>
            <Moment fromNow locale="ko">
              {product.createdAt}
            </Moment>
          </SubText>
        </SubInfo>
      </Info>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  gap: 4px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const SubInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const SubText = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

export default ProductCard;

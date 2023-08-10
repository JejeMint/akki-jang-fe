import { useEffect, useState } from "react";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteProduct, getProduct } from "../apis/services/productService";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { CATEGORY_OPTIONS } from "../constants/options/categoryOptions";
import { REGION_OPTIONS } from "../constants/options/regionOptions";
import IProduct from "../types/Product.type";

const Product = () => {
  const [product, setProduct] = useState<IProduct>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(1);
      setProduct(data);
    };

    fetchProduct();
  }, []);

  const handleDelete = async () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      try {
        await deleteProduct(product?.id);
        window.alert("삭제 되었습니다.");
        navigate("/");
      } catch (e) {
        window.alert("삭제 실패");
      }
    }
  };

  return (
    <ProductWrapper>
      <Header>
        <div>아끼장</div>
        <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
      </Header>
      <img src={product?.imageUrl} alt={product?.title} />
      <Main>
        <ProductHeader>
          <TitleWrapper>
            <Title>{product?.title}</Title>
          </TitleWrapper>
          <SubTitleWrapper>
            <SubTitle>
              {CATEGORY_OPTIONS[Number(product?.categoryCode)]?.label}
            </SubTitle>
            <SubTitle>·</SubTitle>
            <SubTitle>
              {REGION_OPTIONS[Number(product?.regionCode)]?.label}
            </SubTitle>
            <SubTitle>·</SubTitle>
            <SubTitle>
              <Moment fromNow locale="ko">
                {product?.createdAt}
              </Moment>
            </SubTitle>
          </SubTitleWrapper>
        </ProductHeader>
        <Content>{product?.content}</Content>
      </Main>
      <Footer>
        <Price>{`${product?.price.toLocaleString()}원`}</Price>
      </Footer>
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
`;

const DeleteButton = styled.button`
  position: absolute;
  right: 12px;
`;

const ProductHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SubTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: auto;
  padding: 12px;
  gap: 8px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const SubTitle = styled.div`
  font-size: 14px;
  color: #7d7d7d;
`;

const Content = styled.div`
  display: flex;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export default Product;

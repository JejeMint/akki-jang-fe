import styled from "styled-components";
import { postProduct } from "../apis/services/productService";
import Form from "../components/forms/Form";
import ContentLayout from "../components/layout/ContentLayout";
import Header from "../components/layout/Header";
import { createProductFormFields } from "../constants/formFields/createProductFormFields";
import useForm from "../hooks/useForm";
import { FormOptions } from "../types/Form.type";

const CreateProduct = () => {
  const initialFields = {
    image: null,
    title: "",
    categoryCode: "",
    content: "",
    regionCode: "",
    price: "",
  };

  const formOptions: FormOptions<FormData, Promise<any>> = {
    apiRequest: postProduct,
    onSuccess: () => {
      console.log("Form submitted successfully");
      // 성공 처리 로직 추가
    },
    onFailure: () => {
      console.log("Form submission failed");
      // 실패 처리 로직 추가
    },
    contentType: "multipart",
  };

  const { fields, errors, handleChange, handleSubmit } = useForm(
    initialFields,
    formOptions
  );

  const handleButtonClick = () => {
    handleSubmit();
  };

  return (
    <div>
      <Header>
        <ButtonWrapper>
          <button>뒤로가기</button>
          <button onClick={handleButtonClick}>완료</button>
        </ButtonWrapper>
      </Header>
      <ContentLayout>
        <Form
          fields={createProductFormFields}
          initialFields={fields}
          handleChange={handleChange}
          errors={errors}
        />
      </ContentLayout>
    </div>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default CreateProduct;

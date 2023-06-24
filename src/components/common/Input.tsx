import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  header?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type,
  header,
}) => {
  return (
    <InputContainer>
      <InputHeader>{header}</InputHeader>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
`;

const InputHeader = styled.span`
  margin-right: 2px;
`;

const StyledInput = styled.input`
  font-size: 16px;
  border: none;
  outline: none;
  width: 100%;
`;

export default Input;

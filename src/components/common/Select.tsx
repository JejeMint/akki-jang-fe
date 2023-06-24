import styled from "styled-components";
import { FormField } from "../../types/Form.type";

type SelectProps = {
  value: string | number;
  field: FormField;
  onChange: (value: string | number) => void;
};

const Select: React.FC<SelectProps> = ({ value, field, onChange }) => {
  return (
    <StyledSelect value={value} onChange={(e) => onChange(e.target.value)}>
      <StyledOption value=''>{field.label.toLowerCase()} 선택</StyledOption>
      {field.options?.map((option) => (
        <StyledOption key={option.value} value={option.value}>
          {option.label}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  /* -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; */
  display: flex;

  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &:hover,
  &:focus {
    border-color: #aaa;
  }
`;

const StyledOption = styled.option``;

export default Select;

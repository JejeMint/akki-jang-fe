import React from "react";
import styled from "styled-components";
import {
  FormDataFieldData,
  FormErrors,
  FormField,
} from "../../types/Form.type";
import hasFinalConsonant from "../../utils/hasFinalConsonant";
import Input from "../common/Input";
import Select from "../common/Select";
import Textarea from "../common/Textarea";

type FormProps = {
  fields: FormField[];
  initialFields: FormDataFieldData;
  handleChange: (
    name: string | number,
    value: string | number | File | null
  ) => void;
  errors: FormErrors;
};

const Form: React.FC<FormProps> = ({
  fields,
  initialFields,
  handleChange,
  errors,
}) => {
  return (
    <StyledForm>
      {fields.map((field) => (
        <div key={field.name}>
          {field.type === "file" ? (
            <input
              type='file'
              accept='image/*'
              onChange={(e) =>
                handleChange(field.name, e.target.files?.[0] || null)
              }
            />
          ) : field.type === "select" ? (
            <Select
              value={initialFields[field.name] as string | number}
              field={field}
              onChange={(value) => handleChange(field.name, value)}
            />
          ) : field.type === "textarea" ? (
            <Textarea
              value={initialFields[field.name] as string}
              onChange={(value) => handleChange(field.name, value)}
              placeholder={field.label}
            />
          ) : (
            <Input
              type={field.type}
              value={initialFields[field.name] as string}
              onChange={(e) => handleChange(field.name, e.target.value)}
              placeholder={field.label}
            />
          )}
          {errors[field.name] && (
            <ErrorMsg>
              {field.label}
              {hasFinalConsonant(field.label) ? "은" : "는"}
              {errors[field.name]}
            </ErrorMsg>
          )}
        </div>
      ))}
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ErrorMsg = styled.div`
  font-size: 14px;
  color: #cc0000;
`;

export default Form;

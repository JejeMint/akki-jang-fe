import { useState } from "react";
import { FormDataFieldData, FormErrors, FormOptions } from "../types/Form.type";

const useForm = (
  initialFields: FormDataFieldData,
  options: FormOptions<FormData, Promise<any>>
) => {
  const [fields, setFields] = useState<FormDataFieldData>(initialFields);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    name: string | number,
    value: string | number | File | null
  ) => {
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = async (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    // 필드 유효성 검사
    const validationErrors: FormErrors = {};
    for (const [name, value] of Object.entries(fields)) {
      if (!value) {
        validationErrors[name] = " 필수입니다.";
      }
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      let formData: FormData | undefined;

      formData = new FormData();
      for (const [name, value] of Object.entries(fields)) {
        formData.append(name, value as string | Blob);
      }

      try {
        await options.apiRequest(formData);

        console.log("Form submitted successfully");
        if (options.onSuccess) {
          options.onSuccess();
        }
      } catch (error) {
        console.error("Form submission error:", error);
        if (options.onFailure) {
          options.onFailure();
        }
      }
    }
  };

  return { fields, errors, handleChange, handleSubmit };
};

export default useForm;

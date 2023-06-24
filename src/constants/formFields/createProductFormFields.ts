import { FormField } from "../../types/Form.type";
import { CATEGORY_OPTIONS } from "../options/categoryOptions";
import { REGION_OPTIONS } from "../options/regionOptions";

export const createProductFormFields: FormField[] = [
  {
    label: "사진",
    name: "image",
    type: "file",
  },
  {
    label: "제목",
    name: "title",
    type: "text",
  },
  {
    label: "카테고리",
    name: "categoryCode",
    type: "select",
    options: CATEGORY_OPTIONS,
  },
  {
    label: "가격",
    name: "price",
    type: "number",
  },
  {
    label: "내용",
    name: "content",
    type: "textarea",
  },
  {
    label: "지역",
    name: "regionCode",
    type: "select",
    options: REGION_OPTIONS,
  },
];

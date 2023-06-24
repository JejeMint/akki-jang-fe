export type FormDataFieldData = {
  [key: string]: string | number | File | null;
};

export type FormErrors = {
  [key: string]: string;
};

export type FormOptions<TData, TResponse> = {
  apiRequest: (data: TData) => Promise<TResponse>;
  onSuccess?: () => void;
  onFailure?: () => void;
  contentType?: "multipart" | "json";
};

export type FormField = {
  label: string;
  name: keyof FormDataFieldData;
  type: "text" | "file" | "select" | "textarea" | "number";
  options?: {
    value: string | number;
    label: string;
  }[];
};

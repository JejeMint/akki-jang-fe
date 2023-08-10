import React, { ChangeEvent, useRef } from "react";
import styled from "styled-components";

type TextareaProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const Textarea: React.FC<TextareaProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  const handleTextareaResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  return (
    <TextareaContainer>
      <StyledTextarea
        ref={textareaRef}
        value={value}
        onChange={handleInputChange}
        onInput={handleTextareaResize}
        placeholder={placeholder}
      />
    </TextareaContainer>
  );
};

const TextareaContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  font-size: 16px;
  border: none;
  outline: none;
  resize: none;
  height: auto;
  min-height: 80px;
`;

export default Textarea;

import styled from "styled-components";

interface ButtonProps {
  theme: {
    primaryColor: string;
    textColor: string;
    primaryColorDark: string;
  };
}

const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  background-color: ${(props: ButtonProps) => props.theme.primaryColor};
  color: ${(props: ButtonProps) => props.theme.textColor};
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props: ButtonProps) => props.theme.primaryColorDark};
  }
`;

export default Button;

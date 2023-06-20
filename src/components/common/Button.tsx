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

  &:hover {
    background-color: ${(props: ButtonProps) => props.theme.primaryColorDark};
  }
`;

export default Button;

import styled from "styled-components";

const Header = styled.div`
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  width: calc(100% - 24px);
  height: 60px;
  border-bottom: 1px solid #ccc;
  padding: 0 12px;
`;

export default Header;

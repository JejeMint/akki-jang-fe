import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Outlet />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  height: calc(100vh - 60px);
  padding-top: 60px;
`;

export default Layout;

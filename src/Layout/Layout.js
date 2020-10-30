import React from "react";
import styled from "styled-components";

import Header from "../Header/Header";

const Layout = styled.div`
  background-color: #f7f7f7;
`;

const LayoutHeader = styled.div`
  height: 80px;
`;

const Container = styled.div`
  max-width: 1190px;
  margin: 0 auto;
  padding: 20px;
`;

const LayoutContent = styled.div``;

const AppLayout = ({ children }) => (
  <Layout>
    <LayoutHeader>
      <Header />
    </LayoutHeader>
    <LayoutContent>{children}</LayoutContent>
  </Layout>
);

AppLayout.Container = Container;

export default AppLayout;

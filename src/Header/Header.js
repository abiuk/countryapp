import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Root = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const Container = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  margin: 0 auto;
`;

const Title = styled(Link)`
  font-size: 28px;
  color: inherit;
  text-decoration: none;
`;

const Header = () => (
  <Root>
    <Container>
      <Title to={{ pathname: "/" }}>Countries App</Title>
    </Container>
  </Root>
);

export default Header;

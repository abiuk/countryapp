import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Root = styled.div`
  max-width: 1190px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Description = styled.div`
  margin-bottom: 32px;
`;

const Button = styled(Link)`
  text-decoration: none;
  padding: 8px 24px;
  margin-bottom: 16px;
  border-radius: 5px;
  cursor: pointer;

  background-color: #000;
  color: #fff;

  @media screen and (min-width: 600px) {
    :hover {
      background-color: #fff;
      color: #000;
      border: 1px solid #000;
    }
  }
`;

const PageNotFound = () => (
  <Root>
    <Description>404 Page not found</Description>
    <Button to={"/"}>Homepage</Button>
  </Root>
);

export default PageNotFound;

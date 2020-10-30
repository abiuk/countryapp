import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Root = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
  border: 1px solid #e9e9e9;
  cursor: pointer;

  color: inherit;
  text-decoration: none;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    flex: 1;
    margin: 14px;

    transition: 0.5s ease;

    :hover {
      transform: scale(1.05);
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
    }
  }
`;

const ImageColumn = styled.div`
  margin-right: 16px;
`;

export const ImgElement = styled.img`
  width: 100%;

  @media screen and (min-width: 600px) {
    width: 220px;
    height: 150px;
  }
`;

const InfoColumn = styled.div`
  flex-grow: 1;
`;

export const InfoRow = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const Info = styled.div`
  font-weight: 600;
  min-width: 90px;
  margin-right: 24px;
`;

export const Value = styled.div`
  color: #525252;
`;

const NO_CAPITAL = "N/A";

const CountryCard = ({ countriesPage, countries }) => (
  <Root>
    {countriesPage?.map((country) => (
      <Card
        key={country.alpha3Code}
        to={{ pathname: `/country/${country.alpha3Code}`, state: countries }}
      >
        <ImageColumn>
          <ImgElement src={country.flag} />
        </ImageColumn>
        <InfoColumn>
          <InfoRow>
            <Info>Name</Info>
            <Value>{country.name}</Value>
          </InfoRow>
          <InfoRow>
            <Info>Population</Info>
            <Value>{country.population}</Value>
          </InfoRow>
          <InfoRow>
            <Info>Capital</Info>
            <Value>{country.capital ? country.capital : NO_CAPITAL}</Value>
          </InfoRow>
        </InfoColumn>
      </Card>
    ))}
  </Root>
);

export default CountryCard;

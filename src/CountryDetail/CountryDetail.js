import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

import { Info, InfoRow, Value } from "../CountryCard/CountryCard";
import AppLayout from "../Layout/Layout";
import { separateByThousands } from "../utils";
import { API_URL } from "../utils";
import PageNotFound from "../PageNotFound/PageNotFound";

const Root = styled.div``;

export const Button = styled.button`
  padding: 8px 24px;
  margin-bottom: 16px;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (min-width: 600px) {
    :hover {
      background-color: #000;
      color: #fff;
    }
  }
`;

const DetailsRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 250px;

  @media screen and (min-width: 600px) {
    height: 250px;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

const FlagWrapper = styled.div`
  margin-bottom: 16px;

  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;

const ImgElement = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoColumn = styled.div``;

const NameValue = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const BorderCountryContainer = styled.div`
  margin-top: 18px;
  text-align: center;
`;

const Description = styled.div`
  font-weight: bold;
  margin-bottom: 18px;
`;

const Card = styled.div`
  border: 1px solid #e9e9e9;
  padding: 8px;
  max-width: 400px;
  margin: 0 auto 16px;
`;

const CardContainer = styled(Link)`
  display: flex;
  color: inherit;
  text-decoration: none;
`;

const FlagColumn = styled.div`
  text-align: left;
  margin-right: 30px;
`;

const DetailsColumn = styled.div`
  margin: auto;
`;

const CountryDetail = ({ match, location }) => {
  let history = useHistory();

  const [country, setCountry] = React.useState({ loaded: false });
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    const fetchCountry = async () => {
      const res = await axios.get(`${API_URL}/alpha/${match.params.code}`);
      setCountry({ ...res.data, loaded: true });
    };

    fetchCountry();
  }, [match.params.code]);

  React.useEffect(() => {
    const fetchCountries = async () => {
      if (location.state) {
        setCountries(location.state);
      } else {
        const res = await axios.get(`${API_URL}/all`);
        setCountries(res.data);
      }
    };
    fetchCountries();
  }, [location.state]);

  if (country.loaded === false) {
    return <PageNotFound />;
  }

  return (
    <Root>
      <AppLayout>
        <AppLayout.Container>
          <Button onClick={() => history.goBack()}>Back</Button>
          <DetailsRow>
            <DetailsContainer>
              <FlagWrapper>
                <ImgElement src={country.flag}></ImgElement>
              </FlagWrapper>
              <InfoColumn>
                <NameValue>{country.name}</NameValue>

                <InfoRow>
                  <Info>Capital:</Info>
                  <Value>{country?.capital ? country?.capital : "N/A"}</Value>
                </InfoRow>

                <InfoRow>
                  <Info>Currency</Info>
                  {country.currencies.map((currency, index) => (
                    <Value key={index}>
                      {(index ? ", " : "") + currency.name}
                    </Value>
                  ))}
                </InfoRow>

                <InfoRow>
                  <Info>Population:</Info>
                  <Value>{separateByThousands(country.population)}</Value>
                </InfoRow>

                <InfoRow>
                  <Info>Languge:</Info>
                  {country.languages.map((language, index) => (
                    <Value key={index}>
                      {(index ? ", " : "") + language.name}
                    </Value>
                  ))}
                </InfoRow>
              </InfoColumn>
            </DetailsContainer>
          </DetailsRow>
        </AppLayout.Container>
      </AppLayout>

      <Borders borders={country.borders} countries={countries} />
    </Root>
  );
};

const Borders = ({ borders, countries }) => {
  if (!borders || borders.length === 0 || countries.length === 0) {
    return <Description>No borders</Description>;
  }

  const countriesByCode = countries.reduce((acc, curr) => {
    acc[curr.alpha3Code] = curr;
    return acc;
  }, {});

  const FLAG_WIDTH = 120;
  const FLAG_HEIGHT = 60;

  return (
    <BorderCountryContainer>
      <Description>Border Countries:</Description>
      {borders.map((border) => {
        const country = countriesByCode[border];

        return (
          !!country && (
            <Card key={border}>
              <CardContainer
                to={{
                  pathname: `/country/${country.alpha3Code}`,
                  state: countries,
                }}
              >
                <FlagColumn>
                  <img
                    src={country.flag}
                    width={FLAG_WIDTH}
                    height={FLAG_HEIGHT}
                    alt={country.name}
                  />
                </FlagColumn>

                <DetailsColumn>
                  <Info>{country.name}</Info>
                  <Info>{separateByThousands(country.population)}</Info>
                </DetailsColumn>
              </CardContainer>
            </Card>
          )
        );
      })}
    </BorderCountryContainer>
  );
};

export default CountryDetail;

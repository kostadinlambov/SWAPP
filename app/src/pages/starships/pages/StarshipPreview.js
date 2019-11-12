import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import StarshipCard from './../components/StarshipCard';
import StarshipMainCard from './../components/StarshipMainCard';
import RadarChartComponent from './../components/RadarChartComponent';

export default function StarshipPreview(props) {
  debugger;
  const { starshipId } = useParams();
  const starship = props.location.state.starship;
  debugger;
  const { name, model, id } = starship;

  // const onClickHandler = e => {
  //   e.preventDefault();

  //   const location = {
  //     pathname: `/starships/${starshipId}`,
  //     state: { character: character },
  //   };
  //   props.history.push(location);
  // };

  return (
    <StyledCharacterPageContainer>
      <StyledCharacterTitle>{name}</StyledCharacterTitle>
      <StyledStarshipSubTitle>({model})</StyledStarshipSubTitle>
      <StyledCharacterBodyContainer>
        <StyledLeftSideContainer>
          <StarshipMainCard starship={starship} {...props} />
        </StyledLeftSideContainer>
        <StyledRightSideContainer>
          <StyledStarshipTitle>
            Compared to Starship Class Max
          </StyledStarshipTitle>
          <StyledStarshipsContainer>
            <RadarChartComponent />
          </StyledStarshipsContainer>
        </StyledRightSideContainer>
      </StyledCharacterBodyContainer>
    </StyledCharacterPageContainer>
  );
}

// Styled Components
const StyledCharacterPageContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 3rem auto;
`;

const StyledCharacterBodyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: auto;
  padding: 2rem 0;
  border-top: 1px solid #000;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: auto;
  }
`;

const StyledCharacterTitle = styled.div`
  color: ${props => props.theme.cards.title.color};
  font-size: 2rem;
  font-weight: 900;
  margin: 0 auto 0.2rem;
  line-height: 1;
  width: 80%;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 1.6rem;
    margin: 0 auto 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const StyledStarshipSubTitle = styled.div`
  color: ${props => props.theme.cards.subtitle.color};
  font-size: 1.6rem;
  font-weight: 900;
  margin: 0 auto 2rem;
  line-height: 1;
  width: 80%;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 1.6rem;
    margin: 0 auto 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const StyledLeftSideContainer = styled.div`
  flex: 0 1 40%;

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    margin: auto;
  }

  @media (max-width: 1000px) {
    font-size: 1.4rem;
    width: 100%;
    margin: auto;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const StyledRightSideContainer = styled.div`
  flex: 0 1 55%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  

  /* @media (max-width: 1000px) {
    width: 60%;
    margin: auto;
  } */

  @media (max-width: 1000px) {
    font-size: 1.4rem;
    width: 100%;
    margin: auto;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const StyledStarshipsContainer = styled.div`
  padding-top: 1rem;
  border-top: 1px solid #abb1ba;
`;

const StyledStarshipTitle = styled.div`
  font-family: 'SfDistantGalaxy';
  color: ${props => props.theme.cards.subtitle.color};
  font-size: 1.3rem;
  /* font-weight: 900; */
  margin: auto;
  line-height: 1;
  width: 100%;
  text-align: center;

  padding: 1rem 0;

  @media (max-width: 1000px) {
    font-size: 1.4rem;
    width: 100%;
    margin: auto;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

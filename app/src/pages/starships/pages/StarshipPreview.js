import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import StarshipCard from './../components/StarshipCard';
import StarshipMainCard from './../components/StarshipMainCard';
import RadarChartComponent from './../components/RadarChartComponent';
import gql from 'graphql-tag';
import { Loading } from '../../../components/Loading';
import ErrorMessage from '../../../components/ErrorMessage';
import { Minimatch } from 'minimatch';

const StarshipStats_QUERY = gql`
  query StarshipStats($starshipClass: String) {
    allStarships(first: 100, filter: { starshipClass: $starshipClass }) {
      totalCount
      edges {
        node {
          cost
          maxAtmosphericSpeed
          crew
          hyperdriveRating
          maxMLPerHour
        }
      }
    }
  }
`;

export default function StarshipPreview(props) {
  debugger;
  const { starshipId } = useParams();
  const starship = props.location.state.starship;
  debugger;
  const { name, model, id } = starship;

  const { data, loading, error } = useQuery(StarshipStats_QUERY, {
    variables: { starshipClass: starship.starshipClass },
  });

  if (loading) return <Loading />;
  if (error) {
    let errorMessage = error.message;

    if (errorMessage.startsWith('GraphQL error:')) {
      errorMessage = errorMessage.split(':')[1].trim();
    }

    return (
      <ErrorMessage textAlingn={'center'} margin={'4rem 0 0 0'}>
        {errorMessage}
      </ErrorMessage>
    );
  }

  console.log('data: ', data);
  debugger;

  const allStarships = data['allStarships']['edges'];
  debugger;

  calculateRadarChartInput(allStarships, starship);

  console.log('data: ', data);
  debugger;

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
            <RadarChartComponent starship={starship} {...props} />
          </StyledStarshipsContainer>
        </StyledRightSideContainer>
      </StyledCharacterBodyContainer>
    </StyledCharacterPageContainer>
  );
}

const calculateRadarChartInput = (allStarships, starship) => {
 let { cost,
  maxAtmosphericSpeed,
  crew ,
  hyperdriveRating ,
  maxMLPerHour} =  starship
 
  
  const costArr = [];
  const maxAtmosphericSpeedArr = [];
  const crewArr = [];
  const hyperdriveRatingArr = [];
  const maxMLPerHourArr = [];

  allStarships.forEach(currentStarship => {
    costArr.push(currentStarship.node.cost || 0);
    maxAtmosphericSpeedArr.push(currentStarship.node.maxAtmosphericSpeed || 0);
    crewArr.push(currentStarship.node.crew || 0);
    hyperdriveRatingArr.push(currentStarship.node.hyperdriveRating || 0);
    maxMLPerHourArr.push(currentStarship.node.maxMLPerHour || 0);
  });
  debugger;
  cost =  cost /(Math.max(...costArr) - Math.min(...costArr));
  maxAtmosphericSpeed =  maxAtmosphericSpeed /(Math.max(...maxAtmosphericSpeedArr) - Math.min(...maxAtmosphericSpeedArr));
  crew = crew / (Math.max(...crewArr) - Math.min(...crewArr));
  hyperdriveRating = hyperdriveRating / (Math.max(...hyperdriveRatingArr) - Math.min(...hyperdriveRatingArr));
  maxMLPerHour = maxMLPerHour / (Math.max(...maxMLPerHourArr) - Math.min(...maxMLPerHourArr)) ;

  debugger;
};

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
  margin: auto;

  @media (max-width: 700px) {
    width: 61vw;
    height: 62vh;
  }

  @media (min-width: 700px) {
    width: 28vw;
    height: 19vh;
  }

  @media (min-width: 980px) {
    width: 30vw;
    height: 62vh;
  }
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

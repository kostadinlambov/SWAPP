import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import StarshipMainCard from './../components/StarshipMainCard';
import RadarChartComponent from './../components/RadarChartComponent';
import gql from 'graphql-tag';
import { Loading } from '../../../components/Loading';
import ErrorMessage from '../../../components/ErrorMessage';

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
  const { starshipId } = useParams();
  const starship = props.location.state.starship;
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

  const allStarships = data['allStarships']['edges'];
  const radarData = calculateRadarChartInput(allStarships, starship);

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
            <StyledRadarWrapper>
              <RadarChartComponent
                starship={starship}
                data={radarData}
                {...props}
              />
            </StyledRadarWrapper>
          </StyledStarshipsContainer>
        </StyledRightSideContainer>
      </StyledCharacterBodyContainer>
    </StyledCharacterPageContainer>
  );
}

const calculateRadarChartInput = (allStarships, starship) => {
  let {
    cost,
    maxAtmosphericSpeed,
    crew,
    hyperdriveRating,
    maxMLPerHour,
  } = starship;

  const costArr = [];
  const maxAtmosphericSpeedArr = [];
  const crewArr = [];
  const hyperdriveRatingArr = [];
  const maxMLPerHourArr = [];

  allStarships.forEach(currentStarship => {
    currentStarship.node.cost && costArr.push(currentStarship.node.cost);
    currentStarship.node.maxAtmosphericSpeed &&
      maxAtmosphericSpeedArr.push(currentStarship.node.maxAtmosphericSpeed);
    currentStarship.node.crew && crewArr.push(currentStarship.node.crew);
    currentStarship.node.hyperdriveRating &&
      hyperdriveRatingArr.push(currentStarship.node.hyperdriveRating);
    currentStarship.node.maxMLPerHour &&
      maxMLPerHourArr.push(currentStarship.node.maxMLPerHour);
    // costObj = {costObj , cost:(currentStarship.node.cost || 0)}
    // maxAtmosphericSpeedObj = {maxAtmosphericSpeedObj , cost:(currentStarship.node.maxAtmosphericSpeed || 0)}
    // crewObj = {crewObj , cost:(currentStarship.node.crew || 0)}
    // hyperdriveRatingObj = {hyperdriveRatingObj , cost:(currentStarship.node.hyperdriveRating || 0)}
    // maxMLPerHourObj = {maxMLPerHourObj , cost:(currentStarship.node.maxMLPerHour || 0)}
  });

  // const radarData = [{...costObj}, {...maxAtmosphericSpeedObj}, {...crewObj}, {...hyperdriveRatingObj}, {...maxMLPerHourObj}]

  // const radarData = allStarships.reduce((acc, currentStarship) => {
  //     return currentStarship === null ? [...acc, 0] : [...acc, currentStarship.node];
  // }, []);

  cost =
    (cost - Math.min(...costArr)) /
    (Math.max(...costArr) - Math.min(...costArr));
  maxAtmosphericSpeed =
    (maxAtmosphericSpeed - Math.min(...maxAtmosphericSpeedArr)) /
    (Math.max(...maxAtmosphericSpeedArr) - Math.min(...maxAtmosphericSpeedArr));
  crew =
    (crew - Math.min(...crewArr)) /
    (Math.max(...crewArr) - Math.min(...crewArr));
  hyperdriveRating =
    (hyperdriveRating - Math.min(...hyperdriveRatingArr)) /
    (Math.max(...hyperdriveRatingArr) - Math.min(...hyperdriveRatingArr));
  maxMLPerHour =
    (maxMLPerHour - Math.min(...maxMLPerHourArr)) /
    (Math.max(...maxMLPerHourArr) - Math.min(...maxMLPerHourArr));

  // let costObj = { label: 'cost',  cost: cost *100 };
  // let maxAtmosphericSpeedObj = { label: 'maxAtmosphericSpeed', maxAtmosphericSpeed: maxAtmosphericSpeed*100 };
  // let crewObj = { label: 'crew', crew: crew*100 };
  // let hyperdriveRatingObj = { label: 'hyperdriveRating', hyperdriveRating: hyperdriveRating*100 };
  // let maxMLPerHourObj = { label: 'maxMLPerHour', maxMLPerHour: maxMLPerHour*100 };

  let costObj = { label: 'cost', cost: cost * 100 };
  let maxAtmosphericSpeedObj = {
    label: 'maxAtmosphericSpeed',
    maxAtmosphericSpeed: maxAtmosphericSpeed * 100,
  };
  let crewObj = { label: 'crew', crew: crew * 100 };
  let hyperdriveRatingObj = {
    label: 'hyperdriveRating',
    hyperdriveRating: hyperdriveRating * 100,
  };
  let maxMLPerHourObj = {
    label: 'maxMLPerHour',
    maxMLPerHour: maxMLPerHour * 100,
  };

  // const radarData = [costObj, maxAtmosphericSpeedObj, crewObj, hyperdriveRatingObj, maxMLPerHourObj];
  const radarData = [
    costObj,
    maxAtmosphericSpeedObj,
    crewObj,
    hyperdriveRatingObj,
    maxMLPerHourObj,
  ];
  return radarData;
};

// Styled Components
const StyledCharacterPageContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 5rem auto;
`;

const StyledCharacterBodyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: auto;
  padding: 2rem 0 1rem;
  border-top: 1px solid #abb1ba;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: auto;
    max-width: 350px;
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
  max-width: 350px;

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
  flex: 0 1 55%;
  width: 100%;
  height: 350px;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 1rem;
  border-top: 1px solid #abb1ba;
  background-color: ${props => props.theme.cards.backgroundColor};
  color: ${props => props.theme.cards.color};

  @media (max-width: 1000px) {
    max-width: 350px;
    width: 100%;
    height: 280px;
    margin: auto;
  }
`;

const StyledRadarWrapper = styled.div`
  /* width: 42vw;
  height: 42vh; */
  width: 100%;
  height: 100%;
  margin: auto;
`;

const StyledStarshipTitle = styled.div`
  font-family: 'SfDistantGalaxy';
  color: ${props => props.theme.cards.subtitle.color};
  font-size: 1.3rem;
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

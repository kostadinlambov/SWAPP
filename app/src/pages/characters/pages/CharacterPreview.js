import React from 'react';
import styled from 'styled-components';
import CharacterCard from './../components/CharacterCard';
import StarshipCard from './../../starships/components/StarshipCard';

export default function CharacterPreview(props) {
  const character = props.history.location.state.character;
  const { name, starships } = character;
  
  return (
    <StyledCharacterPageContainer>
      <StyledCharacterTitle>{name}</StyledCharacterTitle>
      <StyledCharacterBodyContainer>
        <StyledLeftSideContainer>
          <CharacterCard character={character} {...props} />
        </StyledLeftSideContainer>
        <StyledRightSideContainer>
          <StyledStarshipTitle>Piloted Starships</StyledStarshipTitle>
          <StyledStarshipsContainer>
            {starships.edges.map(starship => {
              return (
                <StarshipCard
                  key={starship.node.id}
                  starship={starship.node}
                  {...props}
                />
              );
            })}
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
  margin: 5rem auto 1rem;
`;

const StyledCharacterBodyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: auto;
  padding: 2rem 0 1rem;
  border-top: 1px solid #ABB1BA;

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
    max-width: 350px;
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
  border-top: 1px solid #ABB1BA;
`;

const StyledStarshipTitle = styled.div`
  font-family: 'SfDistantGalaxy';
  color: ${props => props.theme.cards.subtitle.color};
  font-size: 1.7rem;
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

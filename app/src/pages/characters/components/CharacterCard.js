import React from 'react';
import styled from 'styled-components';
import placeholder from '../../../assets/stormtrooper.jpeg';

export default function CharacterCard({ character, ...props }) {
  const {
    name,
    image,
    height,
    homeworld,
    id,
    mass,
    species,
    starships,
  } = character;

  const characterImage = image || placeholder;

  const onClickHandler = e => {
    e.preventDefault();

    const location = {
      pathname: `/characters/${id}`,
      state: { character: character },
    };
    props.history.push(location);
  };

  return (
    <StyledCard onClick={onClickHandler}>
      <StyledTitle>{name}</StyledTitle>
      <StyledImageWrapper>
        <StyledImage src={characterImage} alt="Character image" />
      </StyledImageWrapper>

      <StyledContentWrapper>
        <StyledDescriptionWrapper>
          Heght: <StyledSpan> {height}</StyledSpan>
        </StyledDescriptionWrapper>
        <StyledDescriptionWrapper>
          Weight: <StyledSpan> {mass}</StyledSpan>
        </StyledDescriptionWrapper>
        <StyledDescriptionWrapper>
          Species: <StyledSpan> {species.name}</StyledSpan>
        </StyledDescriptionWrapper>
        <StyledDescriptionWrapper>
          Home World: <StyledSpan> {homeworld.name}</StyledSpan>
        </StyledDescriptionWrapper>
      </StyledContentWrapper>
    </StyledCard>
  );
}

// Styled Components
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-color: ${props => props.theme.cards.borderColor};
  background-color: ${props => props.theme.cards.backgroundColor};
  border-radius: 7px;
  overflow: hidden;
  width: 100%;

  @media (max-width: 1000px) {
    width: 100%;
    margin: 0 auto 1rem;
    font-size: 1rem;
  }

  @media (max-width: 768px){
    font-size: 0.8rem;
  }
`;

const StyledImageWrapper = styled.div`
  flex: 1 1 53%;
  position: relative;
  overflow: hidden;
  max-width: 350px;
  width: 90%;
  &::after {
    display: block;
    content: '';
    padding-top: 100%;
  }
`;

const StyledImage = styled.img`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: auto;
  height: 100%;
`;

const StyledContentWrapper = styled.div`
  flex: 1 1 100%;
  padding: 0.5rem;
  text-align: left;
  width: 90%;
`;

const StyledTitle = styled.div`
  color: ${props => props.theme.cards.title.color};
  font-size: 1.5rem;
  font-weight: 900;
  margin: 0.8rem 0;
  line-height: 1;

  @media (max-width: 1000px) {
    font-size: 1.2rem;

  }

  @media (max-width: 768px){
    font-size: 1rem;
  }
`;

const StyledDescriptionWrapper = styled.div`
  flex: 0 1 100%;
  padding: 0 0;
  margin: 0.2rem auto;
  text-align: left;
  color: ${props => props.theme.cards.subtitle.color};
  font-weight: 600;
`;

const StyledSpan = styled.span`
  color: ${props => props.theme.cards.title.color};
  font-weight: 600;
`;

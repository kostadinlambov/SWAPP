import React from 'react';
import styled from 'styled-components';
import placeholder from '../../../assets/stormtrooper.jpeg';

export default function CharactersCard({ character, ...props }) {
  const { name, image, id, starships } = character;

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
      <StyledImageWrapper>
        <StyledImage src={characterImage} alt="Character image" />
      </StyledImageWrapper>
      <StyledContentWrapper>
        <StyledName>{name}</StyledName>
      </StyledContentWrapper>
    </StyledCard>
  );
}

// Styled Components
const StyledCard = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-color: ${props => props.theme.cards.borderColor};
  background-color: ${props => props.theme.cards.backgroundColor};
  border-radius: 7px;
  overflow: hidden;
  width: 100%;
  cursor: pointer;

  @media (max-width: 1000px) {
    width: 100%;
    margin: auto;
  }
`;

const StyledImageWrapper = styled.div`
  flex: 0 0 33%;
  position: relative;
  overflow: hidden;

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
  width: auto;
  height: 100%;
`;

const StyledContentWrapper = styled.div`
  flex: 0 1 65%;
  padding: 0.5rem;
  text-align: center;
`;

const StyledName = styled.div`
  color: ${props => props.theme.cards.title.color};
  font-size: 1.1rem;
  font-family: 'SfDistantGalaxy';
`;

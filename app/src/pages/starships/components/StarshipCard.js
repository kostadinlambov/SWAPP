import React from 'react';
import styled from 'styled-components';
import placeholder from '../../../assets/stormtrooper.jpeg';

export default function StarshipCard({ starship, ...props }) {
  console.log('starship: ', starship)
  const { name, image, id} = starship;

  const characterImage = image || placeholder;

  const onClickHandler = e => {
    e.preventDefault();

    const location = {
      pathname: `/starships/${id}`,
      state: { starship: starship },
    };
    props.history.push(location);
  };

  return (
    <StyledCard onClick={onClickHandler}>
      <StyledImageWrapper>
        <StyledImage src={characterImage} alt="Starship image" />
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
  /* max-height: 115px;
  height: 100%; */

  margin: 1rem auto;
  cursor: pointer;

  @media (max-width: 1000px) {
    margin: 1rem auto;
  }
`;

const StyledImageWrapper = styled.div`
  flex: 0 0 15%;
  position: relative;
  /* overflow: hidden; */

  width: auto;
  height: 70px;

  /* &::after {
    display: block;
    content: '';
    padding-top: 100%;
  } */
`;

const StyledImage = styled.img`
  display: block;
  height: 100%
  /* position: absolute;
  left: 0;
  right: 0; */
  /* width: auto;
  height: 100%; */
`;

const StyledContentWrapper = styled.div`
  flex: 1 1 65%;
  padding: 0.5rem;
  text-align: center;
`;

const StyledName = styled.div`
  color: ${props => props.theme.cards.title.color};
  font-size: 1.6rem;
  font-weight: 900;
  /* font-family: 'SfDistantGalaxy'; */

  @media (max-width: 1000px){
    font-size: 1.2rem;
  }

  @media (max-width: 768px){
    font-size: 1rem;
  }

`;

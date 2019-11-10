import React from 'react';
import styled from 'styled-components';

export default function EpisodeHeadCard(props) {
  const { title, image, episodeId } = props;

  return (
    <StyledCard>
      <StyledImageWrapper>
        <StyledImage src={image} alt="Episode image" />
      </StyledImageWrapper>
      <StyledContentWrapper>
        <StyledTitle>Star Wars: Episode {episodeId} </StyledTitle>
        <StyledDescription>{title}</StyledDescription>
      </StyledContentWrapper>
    </StyledCard>
  );
}

// Styled Components
const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-color: ${props => props.theme.cards.borderColor};
  background-color: ${props => props.theme.cards.backgroundColor};
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  margin: 2rem auto;

  @media (max-width: 600px) {
    margin: 1rem auto;
    width: 100%;
  }
`;

const StyledImageWrapper = styled.div`
  flex: 0 0 33%;
  position: relative;
  overflow: hidden;

  &::after{
    display:block;
    content: '';
    padding-top: 100%;
  }
`;

const StyledImage = styled.img`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
`;

const StyledContentWrapper = styled.div`
  flex: 0 1 65%;
  padding: 1rem 3rem;
  text-align: left;
`;

const StyledTitle = styled.div`
  color: ${props => props.theme.cards.title.color};
  font-family: 'SfDistantGalaxy';
  font-size: 2.2rem;
  font-weight: 400;
  margin: 0 0 0.4rem 0;
  line-height: 1;
`;

const StyledDescription = styled.div`
  color: ${props => props.theme.cards.subtitle.color};
  font-size: 1.8rem;
  font-weight: 900;
  line-height: 1;
`;

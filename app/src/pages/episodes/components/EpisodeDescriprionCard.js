import React from 'react';
import styled from 'styled-components';

export default function EpisodeDescriprionCard(props) {
  const { openingCrawl, director, releaseDate } = props;

  return (
    <StyledCard>
      <StyledContainer>
        <StyledTextWrapper>{openingCrawl}</StyledTextWrapper>
        <StyledDescriptionWrapper>
          Director: <StyledSpan> {director}</StyledSpan>
        </StyledDescriptionWrapper>
        <StyledDescriptionWrapper>
          Release Date: <StyledSpan> {releaseDate}</StyledSpan>
        </StyledDescriptionWrapper>
      </StyledContainer>
    </StyledCard>
  );
}

// Styled Components
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-color: ${props => props.theme.cards.borderColor};
  background-color: ${props => props.theme.cards.backgroundColor};
  color: ${props => props.theme.cards.color};
  width: 100%;
  margin: auto;

  /* @media (max-width: 600px) {
    margin: 1.5rem auto;
    width: 100%;
  } */
`;

const StyledContainer = styled.div`
  flex: 0 1 100%;
  padding: 1rem;
`;

const StyledTextWrapper = styled.div`
  margin-bottom: 0.5rem;
  line-height: 1.3;
`;

const StyledDescriptionWrapper = styled.div`
  flex: 0 1 100%;
  padding: 0 0;
  text-align: left;
  color: ${props => props.theme.cards.subtitle.color};
  font-weight: 600;
`;

const StyledSpan = styled.span`
  color: ${props => props.theme.cards.title.color};
  font-weight: 600;
`;

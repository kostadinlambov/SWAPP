import React from 'react';
import styled from 'styled-components';

export default function EpisodesCard({ episode, ...props }) {
  const { title, image, openingCrawl, id } = episode;

  const openingCrawlSubstr = openingCrawl.substring(0, 200)  + ' ...'

  const onClickHandler = (e) => {
    e.preventDefault();
    console.log('e', e)
    console.log('episodeId', id)
    debugger;

    console.log('props', props)

    props.history.push(`/episodes/${id}`)
  }

  return (
    <StyledCard onClick={onClickHandler}>
      <StyledImageWrapper>
        <StyledImage src={image} alt="Episode image" />
      </StyledImageWrapper>
      <StyledContentWrapper>
        <StyledTitle >{title}</StyledTitle>
        <StyledDescription>{openingCrawlSubstr}</StyledDescription>
      </StyledContentWrapper>
    </StyledCard>
  );
}

// Styled Components
const StyledCard = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-color: ${props => props.theme.cards.borderColor};
  background-color: ${props => props.theme.cards.backgroundColor};
  border-radius: 0.3rem;
  overflow: hidden;
  width: 60%;
  margin: 2rem auto;
  cursor: pointer;

  @media (max-width: 600px){
    margin: 1rem auto;
    width: 70%;
  }
`;

const StyledImageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  /* &::after{
    display:block;
    content: '';
    padding-top: 100%;
  } */
`;

const StyledImage = styled.img`
  display: block;
  /* position: absolute; */
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
`;

const StyledContentWrapper = styled.div`
  padding: 1rem 1rem;
`;

const StyledTitle = styled.div`
  color: ${props => props.theme.cards.title.color};
  font-size: 1.5rem;
  font-weight: 900;
  margin: 0 0 0.4rem 0;
  line-height: 1;
`;

const StyledDescription = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.cards.color};
`;
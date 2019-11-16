import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Loading } from '../../../components/Loading';
import EpisodesCard from '../components/EpisodesCard';
import ErrorMessage from '../../../components/ErrorMessage';
import styled from 'styled-components';

const FETCH_ALL_EPISODES = gql`
  query allEpisodes($first: Int!) {
    allEpisodes(first: $first) {
      edges {
        node {
          id
          title
          episodeId
          image
          openingCrawl
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
    }
  }
`;

export default function Episodes(props) {
  const { data, loading, error } = useQuery(FETCH_ALL_EPISODES, {
    variables: { first: 7 },
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

  const allEpisodes = data['allEpisodes']['edges'].sort(
    (first, second) => first.node.episodeId - second.node.episodeId,
  );

  return (
    <EpisodesContainer>
      {allEpisodes.map(episode => {
        return (
          <EpisodesCard
            key={episode.node.episodeId}
            episode={episode.node}
            {...props}
          />
        );
      })}
    </EpisodesContainer>
  );
}

// Styled Components
const EpisodesContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.3rem;
  margin-top: 4rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 600px) {
  }
`;

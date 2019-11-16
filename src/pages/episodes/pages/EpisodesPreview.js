import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useApolloClient } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Loading } from '../../../components/Loading';
import ErrorMessage from '../../../components/ErrorMessage';
import EpisodeHeadCard from '../components/EpisodeHeadCard';
import EpisodeDescriprionCard from './../components/EpisodeDescriprionCard';
import { StyledButton } from './../../../components/styledComponents/StyledButton';
import CharactersCard from './../../characters/components/CharactersCard';
import { CharactersContainer } from './../../../components/styledComponents/CharactersContainer';

const FETCH_EPISODE = gql`
  query episode($id: ID!, $after: String, $first: Int!) {
    episode(id: $id) {
      id
      title
      episodeId
      image
      releaseDate
      openingCrawl
      releaseDate
      director
      people(first: $first, after: $after) {
        edges {
          node {
            id
            name
            image
            height
            species {
              name
            }
            mass
            homeworld {
              name
            }
            starships {
              edges {
                node {
                  id
                  name
                  image
                  model
                  starshipClass
                  cost
                  maxAtmosphericSpeed
                  maxMLPerHour
                  hyperdriveRating
                  crew
                }
              }
            }
          }
          cursor
        }
        pageInfo {
          hasNextPage
          endCursor
        }
        totalCount
      }
    }
  }
`;

export default function EpisodesPreview(props) {
  const { episodeId: filmId } = useParams();
  const client = useApolloClient();
  const [characters, setCharacters] = useState([]);

  const { data, loading, error, fetchMore } = useQuery(FETCH_EPISODE, {
    variables: { id: filmId, first: 5 },
  });

  useEffect(() => {
    if (data) {
      const allCharacters = people['edges'] || [];
      setCharacters(allCharacters);
    }
  }, [data]);

  useEffect(() => {
    return () => {
      client.cache.reset();
    };
  }, []);

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

  const {
    id,
    episodeId,
    image,
    openingCrawl,
    title,
    director,
    releaseDate,
    people,
  } = data.episode;

  const pageInfo = people['pageInfo'];

  const { endCursor, hasNextPage } = pageInfo;

  const onLoadMore = () => {
    fetchMore({
      variables: { first: 5, after: endCursor },
      updateQuery: (prev, { fetchMoreResult: { episode } }) => {
        const people = episode.people;

        if (!people.edges.length) {
          return prev;
        }
        return {
          episode: {
            ...episode,
            people: {
              ...people,
              edges: [...prev.episode.people.edges, ...people.edges],
              pageInfo: {
                ...prev.episode.people.pageInfo,
                ...people.pageInfo,
              },
            },
          },
        };
      },
    });
  };

  return (
    <EpisodeContainer>
      <EpisodeHeadCard episodeId={episodeId} title={title} image={image} />
      <EpisodeDescriprionCard
        openingCrawl={openingCrawl}
        director={director}
        releaseDate={releaseDate}
      />

      <CharacterWrapper>
        <CharactersContainer>
          {characters.map(character => {
            return (
              <CharactersCard
                key={character.node.id}
                character={character.node}
                {...props}
              />
            );
          })}
        </CharactersContainer>
        {hasNextPage && (
          <StyledButton onClick={onLoadMore}>Load More</StyledButton>
        )}
      </CharacterWrapper>
    </EpisodeContainer>
  );
}

// Styled Components
const EpisodeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 80%;
  margin: 4rem auto 1rem;
`;

const CharacterWrapper = styled.div`
  margin-top: 1rem;
  text-align: center;
  margin-bottom: 3rem;
  width: 100%;

  @media (max-width: 1000px) {
    margin: 1rem 0 1rem;
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 600px) {
    width: 100%;
    margin: 0rem auto 1rem;
  }
`;

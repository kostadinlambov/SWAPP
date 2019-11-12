import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Loading } from '../../../components/Loading';
import ErrorMessage from '../../../components/ErrorMessage';
import styled from 'styled-components';
import CharactersCard from './../components/CharactersCard';
import { StyledButton } from './../../../components/styledComponents/StyledButton';
import { CharactersContainer } from './../../../components/styledComponents/CharactersContainer';
import { CharacterPageWrapper } from './../../../components/styledComponents/CharacterPageWrapper';

const FETCH_ALL_CHARACTERS = gql`
  query allPeople($first: Int!, $after: String) {
    allPeople(first: $first, after: $after) {
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
`;

export default function Characters(props) {
  const { data, loading, error, fetchMore } = useQuery(FETCH_ALL_CHARACTERS, {
    variables: { first: 12 },
    // fetchPolicy: 'cache-first'
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

  const allCharacters = data['allPeople']['edges'];
  const pageInfo = data['allPeople']['pageInfo'];

  const { endCursor, hasNextPage } = pageInfo;

  const onLoadMore = () => {
    fetchMore({
      variables: { first: 12, after: endCursor },
      updateQuery: (prev, { fetchMoreResult: { allPeople } }) => {
        if (!allPeople.edges.length) {
          return prev;
        }
        return {
          allPeople: {
            ...allPeople,
            edges: [...prev.allPeople.edges, ...allPeople.edges],
            pageInfo: {
              ...prev.allPeople.pageInfo,
              ...allPeople.pageInfo,
            },
          },
        };
      },
    });
  };

  return (
    <CharacterPageWrapper>
      <CharactersContainer>
        {allCharacters.map(character => {
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
    </CharacterPageWrapper>
  );
}

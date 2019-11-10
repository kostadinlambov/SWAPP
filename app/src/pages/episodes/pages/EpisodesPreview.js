import React from 'react';
import styled from 'styled-components';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Loading } from '../../../components/Loading';
import ErrorMessage from '../../../components/ErrorMessage';

const FETCH_EPISODE = gql`
query episode($id: ID!){
  episode(id: $id){
    id
    title
    episodeId
    image
    releaseDate
    openingCrawl
    releaseDate
    people(first: 5){
      edges{
        node{
          id
          image
          name
        }
      }
    }
  }
}`;

export default function EpisodesPreview(props) {
  console.log("props  Episode Preview: " , props )
  debugger;

  const { data, loading, error } = useQuery(FETCH_EPISODE, {
    variables: {id: "films.4" },
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

  console.log('data: ', data)
  debugger;
  const {id, episodeId, openingCrawl, people} = data.episode;

return (
  <div>
    <div>Episode Preview</div>
    <div>id: {id}</div>
    <div>episodeID: {episodeId}</div>
    <div>openingCrawl: {openingCrawl}</div>
  </div>
    
  );
}



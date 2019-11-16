import styled from 'styled-components';

export const CharactersContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin: 2rem auto 1.5rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    /* margin: auto; */
  }

  @media (max-width: 600px) {
  }
`;

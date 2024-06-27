import styled from 'styled-components'

export const DefaultContainer = styled.div`
  max-width: 74rem;
  min-height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  padding-bottom: 10rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 4.5rem;

  @media (min-height: 904px) or (max-width: 769px) {
    min-height: auto;
    height: max-content;

    justify-content: center;
  }
`

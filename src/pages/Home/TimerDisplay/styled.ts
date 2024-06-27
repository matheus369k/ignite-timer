import styled from 'styled-components'

export const TimerDisplayContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  font-weight: bold;

  margin-bottom: 2.5rem;

  display: flex;
  gap: 1rem;

  span {
    padding: 2.5rem 1rem;
    line-height: 1;

    background: ${(props) => props.theme['gray-700']};
    color: ${(props) => props.theme['gray-100']};

    border-radius: 8px;
  }

  @media (max-width: 600px) {
    font-size: 5rem;
    gap: .5rem;

    justify-content: center;

    span {
      padding: 1.8rem 1rem;
    }
  }
`

export const SeparatorMinutesHour = styled.div`
  color: ${(props) => props.theme['green-500']};
`

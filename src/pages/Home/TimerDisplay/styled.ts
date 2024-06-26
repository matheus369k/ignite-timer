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
`

export const SeparatorMinutesHour = styled.div`
  color: ${(props) => props.theme['green-500']};
`

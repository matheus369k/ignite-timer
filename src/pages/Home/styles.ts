import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`

const BaseButton = styled.button`
  width: 100%;

  padding: 1rem 0;
  border: 0;

  border-radius: 8px;

  font-size: 1rem;
  font-weight: bold;
  line-height: 1.2;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;

  color: ${(props) => props.theme['gray-100']};

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountDownButton = styled(BaseButton)`
  background: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StopCountDownButton = styled(BaseButton)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`

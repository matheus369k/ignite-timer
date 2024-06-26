import styled from 'styled-components'

export const FormContainer = styled.div`
  margin-bottom: 4rem;

  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.6;

  height: 2rem;

  display: flex;
  align-items: center;

  gap: 0.5rem;

  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
  }
`

const BaseInput = styled.input`
  background: transparent;
  border: 0;

  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.6;

  padding: 0 0.5rem;

  color: ${(props) => props.theme['gray-100']};

  border-bottom: 0.125rem solid ${(props) => props.theme['gray-500']};

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    box-shadow: none;
    border-bottom: 0.125rem solid ${(props) => props.theme['green-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
`

export const CountDownContainer = styled.div`
  width: 4.5rem;

  position: relative;

  button {
    background: transparent;
    border: 0;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    color: ${(props) => props.theme['gray-500']};

    &:focus {
      box-shadow: none;
      color: ${(props) => props.theme['green-500']};
    }

    &:nth-child(1) {
      left: 0;
    }

    &:nth-last-child(1) {
      right: 0;
    }
  }
`

export const CountDownInput = styled(BaseInput)`
  text-align: center;
  width: 100%;

  -moz-appearance: textfield;
  appearance: textfield;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    text-align: center;
  }
`

import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom-color: ${(props) => props.theme['gray-100']};
      }

      &:focus {
        border-bottom-color: ${(props) => props.theme['gray-100']};
      }

      &.currentPageActive {
        color: ${(props) => props.theme['green-500']};

        &:hover {
          border-bottom-color: ${(props) => props.theme['green-500']};
        }

        &:focus {
          border-bottom-color: ${(props) => props.theme['green-500']};
        }
      }
    }
  }
`

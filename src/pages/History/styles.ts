import styled from 'styled-components'

export const HistoryContainer = styled.main`
  max-width: 58rem;
  width: 100%;

  margin-top: 2rem;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  gap: 2rem;
`

export const HistoryListContainer = styled.div`
  overflow: auto;
  max-width: calc(100vw - 6rem);
  flex: 1;

  
  table {
    border-collapse: collapse;
    width: 100%;
    
    min-width: 37.5rem;

    tr {
      display: grid;
      grid-template-columns: 40% 1fr 1fr 1fr;
    }

    th {
      text-align: left;

      background: ${(props) => props.theme['gray-600']};
      color: ${(props) => props.theme['gray-100']};

      padding: 1rem;

      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
      }

      &:last-child {
        border-top-right-radius: 8px;
      }
    }

    tbody {
      display: block;

      overflow-y: auto;
      overflow-x: hidden;

      max-height: 25.5rem;

      &::-webkit-scrollbar {
        background: transparent;
        color: black;

        width: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme['gray-400']};
        color: black;

        border-radius: 100px;
      }

      tr {
        align-items: center;

        border-top: 4px solid ${(props) => props.theme['gray-800']};

        background: ${(props) => props.theme['gray-700']};

        td {
          text-align: left;

          padding: 1rem;

          font-size: 0.875rem;
          line-height: 1.6;

          &:first-child {
            font-size: 0.875rem;

            text-transform: capitalize;
          }

          &:last-child {
            padding-right: 1.5rem;
          }
        }
      }
    }

    .emptyListTbodyContainer {
      height: 25.5rem;
      overflow-y: auto;

      background: ${(props) => props.theme['gray-700']};
    }
  }
`

const STATUS_COLORS = {
  yellow: '#FBA94C',
  red: '#AB222E',
  green: '#00875F',
}

interface StatusTaskProps {
  $statusColor: keyof typeof STATUS_COLORS
}

export const StatusTask = styled.span<StatusTaskProps>`
  display: flex;
  align-items: center;

  gap: 0.5rem;

  &::before {
    content: '';

    width: 0.5rem;
    height: 0.5rem;

    border-radius: 50%;

    background: ${(props) => STATUS_COLORS[props.$statusColor]};
  }
`

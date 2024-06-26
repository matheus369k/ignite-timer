import { useContext } from 'react'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { CycleContext } from '../../contexts/CycleContext'

import { HistoryContainer, HistoryListContainer, StatusTask } from './styles'

export function History() {
  const { cycles } = useContext(CycleContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryListContainer>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          {cycles.length > 0 ? (
            <tbody>
              {cycles.map((cycle) => {
                return (
                  <tr key={cycle.id}>
                    <td>{cycle.task}</td>
                    <td>{cycle.countDown} Minuto(s)</td>
                    <td>
                      {formatDistance(cycle.currentTimeNow, new Date(), {
                        locale: ptBR,
                        addSuffix: true,
                      })}
                    </td>
                    <td>
                      {cycle.inProgress && (
                        <StatusTask $statusColor="yellow">
                          Em Progresso
                        </StatusTask>
                      )}
                      {cycle.interrupted && (
                        <StatusTask $statusColor="red">Interrompida</StatusTask>
                      )}
                      {!cycle.interrupted && !cycle.inProgress && (
                        <StatusTask $statusColor="green">Concluido</StatusTask>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          ) : (
            <tbody className="emptyListTbodyContainer">
              <tr></tr>
            </tbody>
          )}
        </table>
      </HistoryListContainer>
    </HistoryContainer>
  )
}

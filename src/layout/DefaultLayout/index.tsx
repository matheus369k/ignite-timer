import { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useTheme } from 'styled-components'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

import { Header } from '../../components/Header'

import { CycleContext } from '../../contexts/CycleContext'

import { DefaultContainer } from './styles'

export function DefaultLayout() {
  const { cycles, currentCycleId } = useContext(CycleContext)
  const navigate = useNavigate()
  const themeStyles = useTheme()

  const currentTimerInProgress =
    currentCycleId &&
    cycles &&
    cycles.find((cycle) => cycle.id === currentCycleId)

  useEffect(() => {
    let Timeout: number
    if (currentTimerInProgress) {
      Timeout = setTimeout(
        () => {
          navigate('/')

          iziToast.show({
            theme: 'dark',
            message: 'A tarefa foi concluído com sucesso!',
            messageColor: `${themeStyles['gray-100']}`,
            backgroundColor: `${themeStyles['gray-700']}`,
            position: 'topRight',
            progressBarColor: `${themeStyles['green-500']}`,
          })
        },
        currentTimerInProgress.countDown * 1000 * 60,
      )
    }

    return () => {
      clearTimeout(Timeout)
    }
  }, [currentTimerInProgress])

  return (
    <DefaultContainer>
      <Header />
      <Outlet />
    </DefaultContainer>
  )
}

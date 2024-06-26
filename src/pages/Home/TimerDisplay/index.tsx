import { useContext, useEffect } from 'react'

import { CycleContext } from '../../../contexts/CycleContext'

import { SeparatorMinutesHour, TimerDisplayContainer } from './styled'

import { CycleType } from '../index'

export function TimerDisplay() {
  const {
    cycles,
    secondsTime,
    currentCycleId,
    setCycleState,
    setSecondsTimerState,
    setCurrentCycleIdState,
  } = useContext(CycleContext)

  const currentTaskInProgress: CycleType | undefined =
    cycles && cycles.find((cycle) => cycle.id === currentCycleId)
  const totalMinutesNow = currentTaskInProgress?.inProgress
    ? String(Math.floor(currentTaskInProgress.timer)).padStart(2, '0')
    : '00'
  const totalSecondNow = currentTaskInProgress?.inProgress
    ? String(secondsTime).padStart(2, '0')
    : '00'

  function ConcludeCountDownTime() {
    const createNewCycleState = cycles.map((cycle) => {
      if (cycle.id === currentCycleId) {
        cycle.inProgress = false

        cycle.interrupted = false
      }

      return cycle
    })

    setCycleState(createNewCycleState)
    setCurrentCycleIdState('')
    setSecondsTimerState(0)
  }

  function SwitchTitleWhenPageHidden() {
    if (document.hidden && currentCycleId) {
      document.title = `Timer - ${totalMinutesNow}:${totalSecondNow}`

      return
    }

    document.title = 'Ignite Timer'
  }

  useEffect(() => {
    let interval: number

    if (currentTaskInProgress?.timer! >= 0) {
      interval = setInterval(() => {
        const calcNewTimerCurrent: CycleType[] = cycles.map((cycle) => {
          if (cycle.id === currentCycleId) {
            const removeTimer =
              (new Date().getTime() - cycle.currentTimeNow) / 1000 / 60

            cycle.timer = cycle.countDown - removeTimer

            setSecondsTimerState(
              60 * Math.ceil(cycle.countDown - cycle.timer) -
                Math.ceil(removeTimer * 60),
            )
          }

          return cycle
        })

        setCycleState(calcNewTimerCurrent)
      }, 500)
    }

    if (currentTaskInProgress?.timer! <= 0) {
      ConcludeCountDownTime()
    }

    SwitchTitleWhenPageHidden()

    return () => {
      clearInterval(interval)
    }
  }, [cycles, currentCycleId])

  return (
    <TimerDisplayContainer>
      <span>{totalMinutesNow[0]}</span>
      <span>{totalMinutesNow[1]}</span>
      <SeparatorMinutesHour>:</SeparatorMinutesHour>
      <span>{totalSecondNow[0]}</span>
      <span>{totalSecondNow[1]}</span>
    </TimerDisplayContainer>
  )
}

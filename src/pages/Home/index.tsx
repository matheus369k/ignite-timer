import { HandPalm, Play } from 'phosphor-react'
import { useForm, FormProvider } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { zodResolver } from '@hookform/resolvers/zod'
import 'izitoast/dist/css/iziToast.min.css'
import iziToast from 'izitoast'
import { useContext } from 'react'
import { z } from 'zod'

import { TimerDisplay } from './TimerDisplay'
import { TasksFrom } from './TasksForm'

import { CycleContext } from '../../contexts/CycleContext'
import { OptionContext } from '../../contexts/OptionContext'

import {
  HomeContainer,
  StartCountDownButton,
  StopCountDownButton,
} from './styles'

const cycleSchema = z.object({
  task: z.string().min(1),
  countDown: z.number().min(1).max(60),
})

type CycleZodType = z.infer<typeof cycleSchema>

export interface CycleType extends CycleZodType {
  id: string
  currentTimeNow: number
  timer: number
  inProgress?: boolean
  interrupted?: boolean
}

export interface OptionsTasksType {
  id: string
  value: string
}

export function Home() {
  const { handleCreateNewTaskOption } = useContext(OptionContext)
  const {
    cycles,
    currentCycleId,
    setCycleState,
    setSecondsTimerState,
    setCurrentCycleIdState,
  } = useContext(CycleContext)
  const useFormMethods = useForm<CycleZodType>({
    resolver: zodResolver(cycleSchema),
    defaultValues: {
      task: '',
      countDown: 0,
    },
  })
  const themeStyles = useTheme()

  const { handleSubmit, watch, reset } = useFormMethods
  const task = watch('task')
  const isEmptyTask = !task

  function handleCreateNewTask({ task, countDown }: CycleZodType) {
    const id = new Date().getTime().toString()

    const createNewTask: CycleType = {
      id,
      task,
      countDown,
      timer: countDown,
      currentTimeNow: new Date().getTime(),
      inProgress: true,
    }

    setCycleState([createNewTask, ...cycles])
    setCurrentCycleIdState(id)
    setSecondsTimerState(0)

    handleCreateNewTaskOption(task)

    reset()
  }

  function handleInterlopedCountDownTime() {
    const createNewCycleState = cycles.map((cycle) => {
      if (cycle.id === currentCycleId) {
        cycle.inProgress = false

        cycle.interrupted = true
      }

      return cycle
    })

    setCycleState(createNewCycleState)
    setCurrentCycleIdState('')
    setSecondsTimerState(0)

    iziToast.error({
      theme: 'dark',
      message: 'A tarefa foi interrompido!',
      messageColor: `${themeStyles['gray-100']}`,
      backgroundColor: `${themeStyles['gray-700']}`,
      position: 'topRight',
      progressBarColor: `${themeStyles['red-500']}`,
    })
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewTask)}>
        <FormProvider {...useFormMethods}>
          <TasksFrom />
        </FormProvider>

        <TimerDisplay />

        {currentCycleId ? (
          <StopCountDownButton
            onClick={handleInterlopedCountDownTime}
            type="button"
          >
            <HandPalm size={24} />
            interromper
          </StopCountDownButton>
        ) : (
          <StartCountDownButton type="submit" disabled={isEmptyTask}>
            <Play size={24} />
            Começar
          </StartCountDownButton>
        )}
      </form>
    </HomeContainer>
  )
}

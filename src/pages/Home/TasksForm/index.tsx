import { useFormContext } from 'react-hook-form'
import { useContext, useState } from 'react'
import { Minus, Plus } from 'phosphor-react'

import { CycleContext } from '../../../contexts/CycleContext'
import { OptionContext } from '../../../contexts/OptionContext'

import {
  CountDownContainer,
  CountDownInput,
  FormContainer,
  TaskInput,
} from './styles'

export function TasksFrom() {
  const [amountLessTimer, setAmountLessTimer] = useState<number>(0)
  const { currentCycleId } = useContext(CycleContext)
  const { optionsTasks } = useContext(OptionContext)
  const { register } = useFormContext()

  const isCountDowTimerOn = currentCycleId.length > 0
  const canLessStateAmountLessTimer = amountLessTimer <= 1
  const canAmountStateAmountLessTimer = amountLessTimer >= 60

  function handleAmountTimer() {
    setAmountLessTimer((state) => state + 5)
  }

  function handleLessTimer() {
    setAmountLessTimer((state) => state - 1)
  }

  return (
    <FormContainer>
      <label htmlFor="createTask">Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="createTask"
        list="tasks-suggestion"
        placeholder="Dê um nome para o seu projeto"
        disabled={isCountDowTimerOn}
        {...register('task')}
      />
      <datalist id="tasks-suggestion">
        {optionsTasks.map((optionTask) => {
          return <option key={optionTask.id} value={optionTask.value} />
        })}
      </datalist>

      <label htmlFor="countDownTimer">durante</label>
      <CountDownContainer>
        <button
          disabled={canLessStateAmountLessTimer}
          onClick={handleLessTimer}
          type="button"
          title="Diminuir"
        >
          <Minus size={16} weight="bold" />
        </button>
        <CountDownInput
          type="number"
          id="countDownTimer"
          placeholder="00"
          disabled={isCountDowTimerOn}
          min={1}
          max={60}
          value={amountLessTimer}
          {...register('countDown', { valueAsNumber: true })}
        />
        <button
          disabled={canAmountStateAmountLessTimer}
          onClick={handleAmountTimer}
          type="button"
          title="Adicionar"
        >
          <Plus size={16} weight="bold" />
        </button>
      </CountDownContainer>
      <span>minutos.</span>
    </FormContainer>
  )
}

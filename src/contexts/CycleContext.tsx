import { ReactNode, createContext, useState } from 'react'

interface PropsCycleContextProvide {
  children: ReactNode
}

interface CycleFormType {
  task: string
  countDown: number
}

interface CycleType extends CycleFormType {
  id: string
  currentTimeNow: number
  timer: number
  inProgress?: boolean
  interrupted?: boolean
}

interface ContextType {
  cycles: CycleType[]
  setCycleState: (data: CycleType[]) => void
  secondsTime: number
  setSecondsTimerState: (data: number) => void
  currentCycleId: string
  setCurrentCycleIdState: (data: string) => void
}

export const CycleContext = createContext<ContextType>({
  cycles: [],
  secondsTime: 60,
  currentCycleId: '',
  setCycleState() {},
  setSecondsTimerState() {},
  setCurrentCycleIdState() {},
})

export function CycleContextProvide({ children }: PropsCycleContextProvide) {
  const [cycles, setCycles] = useState<CycleType[]>([])
  const [secondsTime, setSecondsTimer] = useState<number>(60)
  const [currentCycleId, setCurrentCycleId] = useState<string>('')

  function setCycleState(data: CycleType[]) {
    setCycles(data)
  }

  function setSecondsTimerState(data: number) {
    setSecondsTimer(data)
  }

  function setCurrentCycleIdState(data: string) {
    setCurrentCycleId(data)
  }

  return (
    <CycleContext.Provider
      value={{
        cycles,
        setCycleState,
        secondsTime,
        setSecondsTimerState,
        currentCycleId,
        setCurrentCycleIdState,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}

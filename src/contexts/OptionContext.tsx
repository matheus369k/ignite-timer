import { ReactNode, createContext, useState } from 'react'

interface OptionContextProviderProps {
  children: ReactNode
}

interface OptionsTasksType {
  id: string
  value: string
}

interface OptionContexType {
  optionsTasks: OptionsTasksType[]
  handleCreateNewTaskOption: (task: string) => void
}

export const OptionContext = createContext<OptionContexType>({
  optionsTasks: [],
  handleCreateNewTaskOption: function (_task: string): void {
    throw new Error('Function not implemented.')
  },
})

export function OptionContextProvider({
  children,
}: OptionContextProviderProps) {
  const [optionsTasks, setOptionsTasks] = useState<OptionsTasksType[]>([])

  function handleCreateNewTaskOption(task: string) {
    const theOptionExists = optionsTasks.find((option) => {
      return option.value === task
    })

    if (theOptionExists) return

    setOptionsTasks((state) => {
      return [
        ...state,
        {
          id: new Date().toTimeString(),
          value: task,
        },
      ]
    })
  }

  return (
    <OptionContext.Provider value={{ optionsTasks, handleCreateNewTaskOption }}>
      {children}
    </OptionContext.Provider>
  )
}

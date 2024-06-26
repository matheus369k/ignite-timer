import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'

import { CycleContextProvide } from './contexts/CycleContext'
import { OptionContextProvider } from './contexts/OptionContext'

import { defaultTheme } from './styles/Themes/default'
import { GlobalStyle } from './global'

import { router } from './router/Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CycleContextProvide>
        <OptionContextProvider>
          <RouterProvider router={router} />
        </OptionContextProvider>
      </CycleContextProvide>
      <GlobalStyle />
    </ThemeProvider>
  )
}

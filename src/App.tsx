import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Button variant='primary' />
      <Button variant='danger' />
      <Button variant='secondary' />
      <Button variant='success' />
      <Button />
    </ThemeProvider>
  )
}

export default App

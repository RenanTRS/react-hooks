import {Container, Typography} from '@mui/material'
import { Form } from './components/Form'
import '@fontsource/roboto/'
function App() {

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
      <Form />
    </Container>
  )
}

export default App

import {Container, Typography} from '@mui/material'
import { Form } from './components/Form'
import '@fontsource/roboto/'
function App() {

  type dataFormProps = {
    name?: string;
    lastname?: string;
    cpf?: string;
    promocoes?: boolean;
    novidades?: boolean;
  }
  
  const dataForm = (props: dataFormProps) => {
    console.log(props)
  }

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
      <Form dataChange={dataForm} />
    </Container>
  )
}

export default App

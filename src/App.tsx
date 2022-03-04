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
  const validarCPF = (cpf: string) => {
    if(cpf?.length !== 11){
        return {valido: false, texto: "CPF deve ter 11 dígitos"}
    } else {
        return {valido: true, texto: ''}
    }
}

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
      <Form dataChange={dataForm} validarCPF={validarCPF}/>
    </Container>
  )
}

export default App

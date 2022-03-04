import {TextField, Button, Switch, FormControlLabel} from '@mui/material'
import {useState, ChangeEvent} from 'react'
export const Form = () => {
    const [name, setName] = useState<string>('')
    const [lastname, setLastname] = useState<string>('')
    const [cpf, setCpf] = useState<string>('')

    const handlerSubmit = (event: ChangeEvent<HTMLFormElement>) => { //Eventos do formulário
        event.preventDefault()
        console.log('teste')
    }
    
    return (
        <form onSubmit={handlerSubmit}>
            <TextField id='name' value={name} onChange={(event)=>setName(event.target.value)} label='Nome' variant='outlined' margin="normal" fullWidth/>

            <TextField 
                id='lastname' 
                value={lastname}
                onChange={(event)=>setLastname(event.target.value)}
                label='Sobrenome' 
                variant='outlined' 
                margin="normal" 
                fullWidth
            />
            
            <TextField id='cpf' value={cpf} onChange={(event)=>setCpf(event.target.value)} label='CPF' variant='outlined' margin="normal" fullWidth/>

            <FormControlLabel label="Promoções" control={<Switch name="Promoções" defaultChecked />} />
            <FormControlLabel label="Novidades" control={<Switch name="Novidades" defaultChecked />} />
            

            <Button variant='contained' type="submit">Cadastrar</Button>
        </form>
    )
}
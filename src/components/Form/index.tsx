import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

export const Form = () => {
    return (
        <form>
            <TextField id='name' label='Nome' variant='outlined' fullWidth/>

            <TextField id='lastname' label='Sobrenome' variant='outlined' fullWidth/>
            
            <TextField id='cpf' label='CPF' variant='outlined' fullWidth/>

            <label htmlFor="">Promoções</label>
            <input type="checkbox" />

            <label htmlFor="">Novidades</label>
            <input type="checkbox" />

            <Button variant='contained' type="submit">Cadastrar</Button>
        </form>
    )
}
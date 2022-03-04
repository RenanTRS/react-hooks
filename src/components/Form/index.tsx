import {TextField, Button, Switch, FormControlLabel} from '@mui/material'
export const Form = () => {
    return (
        <form>
            <TextField id='name' label='Nome' variant='outlined' margin="normal" fullWidth/>

            <TextField id='lastname' label='Sobrenome' variant='outlined' margin="normal" fullWidth/>
            
            <TextField id='cpf' label='CPF' variant='outlined' margin="normal" fullWidth/>

            <FormControlLabel label="Promoções" control={<Switch name="Promoções" defaultChecked />} />
            <FormControlLabel label="Novidades" control={<Switch name="Novidades" defaultChecked />} />
            

            <Button variant='contained' type="submit">Cadastrar</Button>
        </form>
    )
}
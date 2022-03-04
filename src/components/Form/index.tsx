import Button from '@mui/material/Button'
export const Form = () => {
    return (
        <form>
            <label htmlFor="">Nome</label>
            <input type="text" />

            <label htmlFor="">Sobrenome</label>
            <input type="text" />

            <label htmlFor="">CPF</label>
            <input type="text" />

            <label htmlFor="">Promoções</label>
            <input type="checkbox" />

            <label htmlFor="">Novidades</label>
            <input type="checkbox" />

            <Button variant='contained' type="submit">Cadastrar</Button>
        </form>
    )
}
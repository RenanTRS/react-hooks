import {TextField, Button, Switch, FormControlLabel} from '@mui/material'
import {useState, ChangeEvent} from 'react'

type FormProps = {
    dataChange:(dataState: object) => void; //Tipagem da prop que recebe uma função que recebe um objeto e retorna void
}
/*
type ValidarProps = {
    validarCPF: (cpf: string) => {valido:boolean; texto:string;}
}*/
export const Form = ({dataChange}: FormProps) => {
    const [name, setName] = useState<string>('')
    const [lastname, setLastname] = useState<string>('')
    const [cpf, setCpf] = useState<string>('')
    const [promocoes, setPromocoes] = useState<boolean>(true)
    const [novidades, setNovidades] = useState<boolean>(true)
    const [errors, setErrors] = useState({cpf:{valido:true, texto:""}})

    const handlerSubmit = (event: ChangeEvent<HTMLFormElement>) => { //Eventos do formulário
        event.preventDefault()
        const dataState = {name, lastname, cpf, promocoes, novidades}
        dataChange(dataState)
    }
    const validarCPF = (cpf: string) => {
        if(cpf?.length !== 11){
            return {valido: false, texto: "CPF deve ter 11 dígitos"}
        } else {
            return {valido: true, texto: ''}
        }
    }
    
    return (
        <form onSubmit={handlerSubmit}>
            <TextField id='name' value={name} onChange={(event)=>setName(event.target.value)} label='Nome' variant='outlined' margin="normal" fullWidth/>

            <TextField id='lastname' value={lastname} onChange={(event)=>setLastname(event.target.value)}label='Sobrenome' variant='outlined' margin="normal" fullWidth/>
            
            <TextField id='cpf' value={cpf} 
            onBlur={(event)=>{
                const valido = validarCPF(cpf)
                setErrors({cpf:valido})}}
            error={!errors.cpf.valido} helperText={errors.cpf.texto} onChange={(event)=>setCpf(event.target.value)} label='CPF' variant='outlined' margin="normal" fullWidth/>

            <FormControlLabel label="Promoções" control={<Switch name="Promoções" checked={promocoes} onChange={(event)=>setPromocoes(event.target.checked)} />} />
            <FormControlLabel label="Novidades" control={<Switch name="Novidades" checked={novidades} onChange={(event)=>setNovidades(event.target.checked)} />} />
            

            <Button variant='contained' type="submit">Cadastrar</Button>
        </form>
    )
}
import { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import MainTemplate from '@/templates/main'

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: red;
  color: white;
  border: 2px solid #f60;
`
const Input = styled.input`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: orange;
  color: white;
  border: 2px solid #f60;
`

const Container = styled.div`
  padding: 20px;
  margin: 1rem;
  width: 500px;
  background: black;
  color: white;
  border: 2px solid red;

  >div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default function UseCallback() {
  return (
    <MainTemplate>
      <Container>
        <div>UseCallback</div>
        <Counter />
      </Container>
    </MainTemplate>
  )
}

export const Counter = () => {
  const [cont, setCont] = useState(0)
  const [msj, setMsj] = useState('')
  const getDoble = useCallback(() => () => cont * 2, [cont])

  return (
    <div>
      <p>{cont}</p>
      <Button onClick={() => setCont(cont + 1)}>Incremento</Button>
      <MuestraDoble getDoble={getDoble}/>
      <Input type="text" onChange={(e: any) => setMsj(e.target.value)}/>
      <p>{msj}</p>
    </div>
  )
}

export const MuestraDoble = ({ getDoble }: {getDoble: any}) => {

  const [doble, setDoble] = useState(0)

  useEffect(() => {
    setDoble(getDoble())
    console.log('Muestra doble')
  }, [getDoble])

  return <h2>{doble}</h2>
} 

import React, {useState, useEffect} from 'react'
import MainTemplate from '@/templates/main'
import styled from 'styled-components'

const Container = styled.div`
    border: solid red 2px;
    padding: 20px;
    border-radius: 5px;

    legend{
        font-size: 25px;
        color: black;
    }

    input{
        border: solid blueviolet 2px;
        border-radius: 5px;
        padding: 10px;
    }
`

export default function RefTest() {

    const [msj, setMsj] = useState('')
    // const [count, setCount] = useState(0)
    const count = React.useRef<number>(0)
    const inputRef = React.useRef<HTMLInputElement>(null)

    useEffect(() => {
        count.current += 1
    })

    // useEffect(() => {
    //     setCount(count + 1 )
    // }, [msj])

    const handleClick = () => {
        inputRef?.current?.focus()
    }

    return (
        <MainTemplate>
            <Container>
                <legend>UseRef</legend>
                <h2>Renders:{count.current}</h2>
                <input
                    type="text"
                    value={msj}
                    className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) => setMsj(e.target.value)}
                    ref={inputRef}
                />
                <h2>Mensaje: {msj}</h2>
                <button
                    className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={() => handleClick()}>
                    Focus
                </button>
            </Container>
        </MainTemplate>
    )
}

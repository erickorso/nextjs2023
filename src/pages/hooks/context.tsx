import {useState, createContext, useContext} from 'react'
import MainTemplate from '@/templates/main'
import styled from 'styled-components'

const Container = styled.div`
    border: solid red 2px;
    padding: 20px;
    border-radius: 5px;
    min-width: 500px;

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
const emptytUser = {
    name: '',
    email: ''
}

const LoginContext = createContext({... emptytUser});

const useLoginContext = () => {
    return useContext(LoginContext)
}

const LoginProvider = ({children}: any) => {

    const defaultUser = {
        name: 'Erick',
        email: 'erickorso@gmail.com'
    }

    const [user, setUser] = useState(emptytUser)

    // const changeUser = () => {
    //     if(user.name){
    //         setUser(emptytUser)
    //     }else{
    //         setUser(defaultUser)
    //     }
    // }

    return (
        <LoginContext.Provider value={user}>
            {children}
        </LoginContext.Provider>
    )
}

const SonContext = () => {
    const user = useLoginContext()
    return <div>
        <h2>Name: {user.name}</h2>
        <h2>email: {user.email}</h2>
    </div>
}

export default function ContextTest() {
    return (
        <LoginProvider>
            <MainTemplate>
                <Container>
                    <legend>UseContext</legend>
                    <button
                        className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button"
                        onClick={() => {}}>
                        Change
                    </button>
                    <SonContext />
                </Container>
            </MainTemplate>
        </LoginProvider>
    )
}

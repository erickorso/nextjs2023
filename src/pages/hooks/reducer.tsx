import {useReducer} from 'react'
import MainTemplate from '@/templates/main'

type StateType = {
    name: string,
    pass: string,
    subscribe: boolean
}

type ActionType = {
    type: string,
    value?: any
}

const initialState = {
    name: 'Erick',
    pass: '123',
    subscribe: true
}

const reducer = (state: StateType, action: ActionType) => {
    
    switch (action.type) {
        case 'CHANGE_NAME':
            return ({...state, name: action.value})
            break
        case 'CHANGE_PASS':
            return ({...state, pass: action.value})
            break
        case 'CHANGE_SUBSCRIBE':
            return ({...state, subscribe: action.value})
            break
        case 'RESET':
                return initialState
                break
        default:
            return state
            break
        }
}

export default function Formulario() {

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = () => {
        console.log({state})
    }

    return (
        <MainTemplate>
        <form className="w-full max-w-sm">
            <h1 style={{fontSize: '22px', padding: '30px 0'}}>UseReducer</h1>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                        Full Name
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="text"
                        value={state.name}
                        onChange={(e) => dispatch({type: 'CHANGE_NAME', value: e.target.value})}/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                        Password
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-password"
                        type="password"
                        placeholder="**********" value={state.pass}
                        onChange={(e) => dispatch({type: 'CHANGE_PASS', value: e.target.value})}/>
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <label className="md:w-2/3 block text-gray-500 font-bold">
                    <input
                        className="mr-2 leading-tight"
                        type="checkbox"
                        checked={state.subscribe}
                        onClick={(e) => dispatch({type: 'CHANGE_SUBSCRIBE', value: !state.subscribe})}
                        onChange={(e) => {}}/>
                    <span className="text-sm">
                        Send me your newsletter!
                    </span>
                </label>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-2/3">
                    <button
                        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button"
                        onClick={() => handleSubmit()}>
                        Sign Up
                    </button>
                    <button
                        className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button"
                        onClick={() => dispatch({type: 'RESET'})}>
                        Clear
                    </button>
                </div>
            </div>
        </form>
        </MainTemplate>
    )
}

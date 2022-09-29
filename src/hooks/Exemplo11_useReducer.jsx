import React from "react";
import { useReducer } from "react";

export function Exemplo11_useReducer(){

    //Função incrementar de decrementar
    const funcao = (state, acao) => {

        switch (acao) {
            case 'incrementar':
                return state + 1
            
            case 'decrementar':
                return state - 1;

        default:
        return 0;
        }
    }

    //useReducer
    const [contador, executarFuncao] = useReducer(funcao, 0)

    return(
        <>
        <h1>useReducer</h1>
        <h2>{contador}</h2>
         <button onClick={ e => executarFuncao('incrementar')} >Incrementar</button>
         <button onClick={ e => executarFuncao('decrementar')}>Decrementar</button>
        </>

    )
}
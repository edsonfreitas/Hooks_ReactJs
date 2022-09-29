import React, {useRef} from "react";

export function Exemplo10_useRef(){

    //useRef
    const elemento = useRef();

    //função
    const acao = () =>{
        //current permite trabalhar com as características do nosso elemento HTML
        elemento.current.focus();
        elemento.current.style.backgroundColor = 'red';
        elemento.current.value = "Digite algo..."
        elemento.current.style.color = '#fff'
    }

    return(
        <>
         <h1>useRef</h1>
            <input type="text" ref={elemento} />
            <input type="button" value="Clique aqui" onClick={acao} />
        </>
    )
}
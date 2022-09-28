import React, {useEffect, useState} from "react";

export function Exemplo05_useEffect(){

        //useState
    const [texto, setTexto] = useState('Hello World!')

    //useEffect
    useEffect(()=>{

       setInterval(()=>{
        setTexto('useEffect executado com sucesso!')
       },3000)

    });

    return(
        <>
            <h1>{texto}</h1>
        
        </>
    )
}












//O hook useEffect é executad apó o render() ser realizado, ou seja depois que toda a estrutura da página for carregada, todo HTML, CSS e toda funcionalidades como useState, eventos dentre outros só então o useEffect será execudado.
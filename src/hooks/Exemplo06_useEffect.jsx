import React, {useEffect, useState} from "react";

//SITE da API de fotos => https://jsonplaceholder.typicode.com/photos
export function Exemplo06_useEffect(){

        //useState
    const [vetor, setVetor] = useState([])
    const [status, setStatus] = useState('Carregando...')
      //useEffect
      useEffect(()=>{
        obterDAdos();
 
     });
    
    //Função obter dados da API
    const obterDAdos = async () =>{

        const dados = await fetch(`https://jsonplaceholder.typicode.com/photos`);
        const converter = await dados.json();
        setVetor(converter);
        setStatus('Dados carregados com sucesso!')
    }

    return(
        <>
         <h1>Consumindo API de Foto</h1>
            <h2>{status}</h2>
            <ul>{vetor.map(obj=> (<li>{obj.title}</li>))}</ul>
            
        </>
    )
}












//O hook useEffect é executad apó o render() ser realizado, ou seja depois que toda a estrutura da página for carregada, todo HTML, CSS e toda funcionalidades como useState, eventos dentre outros só então o useEffect será execudado.
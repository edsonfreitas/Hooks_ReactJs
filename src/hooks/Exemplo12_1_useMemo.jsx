//Exemplo com o useMemo
import React, {useState, useMemo} from "react";

//Componente ListarNomes
export function ListarNomes({lista}){
    console.log('Componente listarNomes criado!')

    return(
        <ul>
            {lista.map(nome => (<li key={nome}>{nome}</li>))}
        </ul>
    )
}
//Função Componente
export function Exemplo12_1_useMemo(){
    
    //useState
    const [contador, setContador] = useState(0)
    const [nomes, setNomes] = useState(["Edson","Elisângela","Maria","José","Marcos", "Daniel"])

    //useMemo
    const listarSemRender = useMemo(()=>{
        return <ListarNomes lista={nomes} />
    },[nomes])

    //Renderiza em Tela
    return(
        <>
         <h1>Exemplo com o useMemo</h1>
         <h2>{contador}</h2>
          <button onClick={e => setContador(contador+1)}>Incrementar</button>
          {listarSemRender}
        </>
    )
}
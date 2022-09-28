import React, {useState} from "react";

export function Exemplo02_useState(){
    //useState
    const [name, setName] = useState('');
    const [age,setAge] = useState('') 



    return(
        <>
          <input type="text" placeholder="Digite seu nome" onChange={e=> setName(e.target.value)}/>
          <p>{name}</p>
          <input type="number" placeholder="Digite sua idade." onChange={e=> setAge(e.target.value)}/>
          <p>{age}</p>
        </>
    )
}
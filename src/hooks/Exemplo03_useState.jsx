import React, {useState} from "react";

export function Exemplo03_useState() {
    //useState
    const [nota1, setNota1] = useState(0);
    const [nota2,setNota2] = useState(0) 
    //Calcula média
    let media = (nota1+nota2)/2
   //situação
   let situação = media >= 7 ? "Aprovado(a)" : "Reprovado(a)"

    return(
        <>
          <h1>Vamos calcular sua média</h1>
          <input type="text" placeholder="Primeira nota" onChange={e=> setNota1(parseFloat(e.target.value))}/>
          <p>{nota1}</p>
          <input type="number" placeholder="Segunda nota" onChange={e=> setNota2(parseFloat(e.target.value))}/>
          <p>{nota2}</p>
           {nota1 && nota2 ? <span>{situação} com média <strong>{media}</strong></span> : ''}
        </>
    )
}
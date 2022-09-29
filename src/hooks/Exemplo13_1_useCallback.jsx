/*Exemplo:
    Teremos duas funcionalidades, um botão para intercalar a cor de fundo e um elemento *input* que quando alterado o valor, retorna ele mesmo, seu antercessor e seu sucessor
*/
import React,{ useState, useEffect } from "react";
import { useCallback } from "react";

//Componente Listar Números
function ComponenteListarNumeros({lista}){
    //useState
    const [vetor, setVetor] = useState([])

    //useEffect
    useEffect(()=>{
        console.log("Componente Criado")
        setVetor(lista)
    },[lista]);

    return(
        <ul>
        {vetor.map(n=>(<li key={n}>{n}</li>))}
        </ul>
    )


}

export function Exemplo13_1_useCallback(){

    //useState
    const [cor, setCor] = useState('blue')
    const [numero, setNumero] = useState(0)

    //Função altera cor
    const alterarCor = () => {
        setCor(cor === 'blue' ? 'gray' : 'blue');
    }

    //Função listar os números
    const listarNumeros = useCallback(() => {
        return [numero-1, numero, numero+1]
    },[numero]);

    return(
        <div div style={{backgroundColor:cor}}>
         <h1>Exemplo com useCallback</h1>
          <h2><strong>{cor}</strong></h2>
         <button onClick={alterarCor}>Alterar cor</button>
         <input type= "number" value={numero} onChange={e => setNumero(parseInt(e.target.value))} />
         <ComponenteListarNumeros lista={listarNumeros}/>
        </div>
    )
}
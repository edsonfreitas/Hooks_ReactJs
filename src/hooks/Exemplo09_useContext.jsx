//Exemplo com useContext
import  React, {createContext, useContext} from 'react'
import { useState } from 'react';

    //Criar Contexto
    const Contexto = createContext();

//Componente  Principal
 function Principal(){

    let frase = "Enviando informações com useContext";

    const [fundo, setFundo] = useState('green')

    //Função Altera background da Camada
     const alterarFundo =() =>{
        setFundo(fundo === 'green'? 'blue': 'green');
     }

    return(
        <Contexto.Provider value={{frase, fundo, alterarFundo}}>
            <Camada1 />
        </Contexto.Provider>
    )
}

//Componente Camada 1
    function Camada1(){
        return(
            <div style={{backgroundColor:'red', width:'500px', height:'500px', display:'inline-block'}}>
                <Camada2  />
            </div>
        )
}

//Componente Camada2
function Camada2(){
    return(
        <div style={{backgroundColor:'yellow', width:'400px', height:'400px', margin:'50px', display:'inline-block'}}>
            <Camada3 />
        </div>
    )
}

//Componente Camada2
function Camada3(){
        //Usar o mesmo nome da variável do componente de origem
    const {frase, fundo,alterarFundo} = useContext(Contexto);

    return(
        <div style={{backgroundColor:fundo, width:'300px', height:'300px', margin:'50px'}}>
            <p>{frase}</p>
            <button onClick={alterarFundo}>Clique aqui</button>
        </div>
    )
}

export default Principal;
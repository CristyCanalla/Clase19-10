import {useState} from 'react';

const useContador = (valorInicial) =>{

    const [contador, setContador] = useState(valorInicial);

    const sumar = () =>{
        setContador (contador + 1)
    }

    const restar = () =>{
        setContador (contador - 1)
    }

return {
 contador,
 sumar,
 restar,

}
}
export default useContador;
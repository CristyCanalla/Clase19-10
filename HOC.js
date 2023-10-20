import {useState} from 'react';


function UpdateComponent (OriginalComponent){
  function NewComponent(){
    const [oferta, setOferta] = useState(100);
    const incrementarOferta = ()=>{
        setOferta(oferta * 10)
    };
    return <OriginalComponent incrementarOferta={incrementarOferta} oferta={oferta}/>
  }

  return NewComponent

}
export default UpdateComponent; 
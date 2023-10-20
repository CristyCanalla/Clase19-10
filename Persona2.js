import UpdateComponent from '../Components/HOC';

const Persona2 = ({oferta, incrementarOferta}) =>{

return (
<div>
 <h3>Ana oferto: $ {oferta} </h3>
 <button onClick={incrementarOferta} >APOSTAR</button>

</div>

)

}
export default UpdateComponent(Persona2);
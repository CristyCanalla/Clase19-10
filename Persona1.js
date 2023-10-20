import UpdateComponent from '../Components/HOC';

const Persona1 = ({oferta, incrementarOferta}) =>{

return (
<div>
 <h3>Juan oferto: $ {oferta} </h3>
 <button onClick={incrementarOferta} >APOSTAR</button>

</div>

)

}
export default UpdateComponent(Persona1);
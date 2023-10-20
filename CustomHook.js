import useContador from '../Components/useContador';

const CustomHook = () =>{

 const {contador, sumar, restar} = useContador(0);   


return (
<div>
 <h3>Contador: {contador}</h3>
 <button onClick={sumar}>Sumar</button>
 <button onClick={restar}>Restar</button>
</div>

)

}
export default CustomHook;
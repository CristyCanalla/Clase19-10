

const Click = ({incrementar, contador}) =>{
  
return (
<div>
 <h3>Hiciste {contador} de clicks! </h3>
 <button onClick={incrementar} >Haz click</button>

</div>

)

}
export default Click
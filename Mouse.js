

const Mouse = ({incrementar, contador}) =>{

return (
<div>
 
 <button onMouseLeave={incrementar} >Pasaste el mouses {contador} de veces!</button>

</div>

)

}
export default Mouse
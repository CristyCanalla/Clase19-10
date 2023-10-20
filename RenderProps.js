import {useState} from 'react'

const RenderProps = ({render}) =>{

    const [contador, setContador] = useState(0);

    const incrementar = () =>{
        setContador(contador + 1)
    }

return (
<div>
 
 {render(incrementar, contador)}

</div>

)

}
export default RenderProps
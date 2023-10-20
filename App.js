import Home from '../src/Components/Home';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import PerfilCard from './Components/PerfilCard';
import ProductCard from './Components/ProductCard';
import NavBar from '../src/Components/NavBar/NavBar';
import Click from '../src/Components/Click';
import Mouse from '../src/Components/Mouse';
import RenderProps from '../src/Components/RenderProps';
import Actividad from '../src/Components/Actividad';
import CardContainer from '../src/Components/CardContainer';

function App() {
  return (
    <div className="App">
     
     <NavBar/>
     <RenderProps
     render={(incrementar, contador) =>(<Click incrementar={incrementar} contador={contador}/>)}
     
     />
     <hr/>
     <RenderProps
     render={(incrementar, contador) =>(<Mouse incrementar={incrementar} contador={contador}/>)}
     
     />

     <CardContainer/>
     <Actividad/>
     <ItemListContainer greeting='Proximamente: e-commerce'/>
     
     <Home/>
































     <ProductCard img='https://http2.mlstatic.com/D_NQ_NP_815421-MLA46134521852_052021-O.webp' price={22000} title='Mesa comedor'>

     <p>Elegante mesa con descripción hecha con children </p>
     <button>Agregar al carrito </button>

     </ProductCard>
     <br/>
     <div>
     <ProductCard img='https://http2.mlstatic.com/D_NQ_NP_988113-MLA44420055448_122020-O.webp' price={11000} title='Silla comedor'>

     <p>Silla con elegancia </p>
     <button> Agregar a favoritos </button>

     </ProductCard>
     <br/>
     </div>

     <PerfilCard imagen='https://content.wepik.com/statics/20906796/preview-page0.jpg' nombre='Juan' edad={25} cargo='Fullstack'/>
     <PerfilCard imagen='https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg' nombre='Ana' edad={22} cargo='Frontend'/>
     <PerfilCard imagen='https://img.a.transfermarkt.technology/portrait/big/95172-1678694284.jpg?lm=1' nombre='Pedro' edad={35} cargo='Backend'/>
    
    </div>
  );
}

export default App;

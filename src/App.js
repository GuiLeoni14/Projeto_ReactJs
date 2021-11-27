import './App.css';
import Eventos from './components/Eventos';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';

function App() {

   const meusItens = ['React', 'Vue', 'Angular']
   
   return (
      <div className="App">
         <h1>Renderização de Listar</h1>
         <OutraLista itens={[]}/>
         <OutraLista itens={meusItens}/>
      </div>
   );
}

export default App;

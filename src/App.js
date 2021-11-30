import './App.css';
import { useState } from 'react';
import Eventos from './components/Eventos';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import Teste from './components/Teste'
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
import Frase from './components/Frase';
function App() {

   const meusItens = ['React', 'Vue', 'Angular']
   const [nome, setNome] = useState()
   return (
      <div className="App">
         <h1>Renderização de Listar</h1>
         <Teste/>
         <Frase/>
         <OutraLista itens={[]}/>
         <OutraLista itens={meusItens} />
         <Condicional/>
         <SeuNome setNome={setNome} />
         <Saudacao nome={nome} />
      </div>
   );
}

export default App;

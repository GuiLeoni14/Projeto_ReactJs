import React from "react";
import {
   BrowserRouter as Router,
   Routes,
   Route,
   } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";
function App() {
   return (
      <Router>
         <NavBar/>
         <Routes>
            <Route exact path="/" element={<Home/>}>               
            </Route>
            <Route path="/empresa" element={<Empresa/>}>
            </Route>
            <Route path="/contato" element={<Contato/>}>        
            </Route>
         </Routes>
         <Footer/>
      </Router>
   );
}
export default App;
// import './App.css';
// import { useState } from 'react';
// import Eventos from './components/Eventos';
// import Form from './components/Form';
// import Condicional from './components/Condicional';
// import OutraLista from './components/OutraLista';
// import Teste from './components/Teste'
// import SeuNome from './components/SeuNome';
// import Saudacao from './components/Saudacao';
// import Frase from './components/Frase';
// function App() {

//    const meusItens = ['React', 'Vue', 'Angular']
//    const [nome, setNome] = useState()
//    return (
//       <div className="App">
//          <h1>Renderização de Listar</h1>
//          <Teste/>
//          <Frase/>
//          <OutraLista itens={[]}/>
//          <OutraLista itens={meusItens} />
//          <Condicional/>
//          <SeuNome setNome={setNome} />
//          <Saudacao nome={nome} />
//       </div>
//    );
// }

// export default App;

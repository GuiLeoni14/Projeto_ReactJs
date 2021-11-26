import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
   return (
      <div className="App">
         <HelloWorld />
         <SayMyName nome="Guilherme"/>
         <Pessoa 
         nome="Guilherme" 
         idade="17" 
         profissao="Dev" 
         foto="https://via.placeholder.com/150"/>
         <List/>
      </div>
   );
}

export default App;

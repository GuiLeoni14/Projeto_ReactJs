import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
   const name = "Guilherme"
   return (
      <div className="App">
         <h2>Testando</h2>
         <p>Ola {name}</p>
         <HelloWorld />
      </div>
   );
}

export default App;

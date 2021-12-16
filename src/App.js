import './App.css';
import Header from './components/Header';

import PensionerData from './components/PensionerData';
import BankData from './components/BankData';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
     <Header/>
    
     <PensionerData/>
     <BankData/>
     <Hello/>
     
    
    </div>
  );
}

export default App;
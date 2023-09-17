
import './App.css';


import Badding from './pages/Badding';
import Men from './pages/Men';
import Women from './pages/Women';
import Home from './pages/Home';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Header/>
      
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/Men' element={<Men/>}/>
          <Route path='/Women' element={<Women/>}/>
          <Route path='/Badding' element={<Badding/>}/>
        </Routes>
      
    </div>
  );
}

export default App;

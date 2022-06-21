import Login from './components/main/usuario/Login.jsx';
import { Routes, Route} from 'react-router-dom';
import Registar from './components/main/usuario/Register.jsx';
import Travel from './components/main/viaje/Travel.jsx';
import Driver from './components/main/transportador/Driver.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Travel/>}/>
        <Route path='/usuario/login' element={<Login/>}/>
        <Route path='/usuario/registrar' element={<Registar/>}/>
        <Route path='/driver' element={<Driver/>}/>
      </Routes>
    </>
  );
}

export default App;

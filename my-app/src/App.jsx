import Login from './component/main/usuario/Login.jsx';
import { Routes, Route} from 'react-router-dom';
import Registar from './component/main/usuario/Registar.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/usuario/login' element={<Login/>}/>
        <Route path='/usuario/registar' element={<Registar/>}/>
      </Routes>
    </>
  );
}

export default App;

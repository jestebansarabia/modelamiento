import Index from './component/main/Index.jsx';
import { Routes, Route} from 'react-router-dom';
import Registar from './component/main/usuario/Registar.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/usuario/registar' element={<Registar/>}/>
      </Routes>
    </>
  );
}

export default App;

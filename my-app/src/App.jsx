import Login from './components/main/usuario/Login.jsx';
import { Routes, Route} from 'react-router-dom';
import Registar from './components/main/usuario/Register.jsx';
import Travel from './components/main/viaje/Travel.jsx';
import Driver from './components/main/transportador/Driver.jsx';
import ListRoute from './components/main/ruta/ListRoute.jsx';
import CreateRoute from './components/main/ruta/CreateRoute.jsx';
import CreateDriver from './components/main/transportador/CreateDriver.jsx';
import Vehicle from './components/main/vehiculo/Vehicle.jsx';
import CreateVehicle from './components/main/vehiculo/CreateVehicle.jsx';
import Person from './components/main/persona/Person.jsx';
import NoFound from './components/main/NoFound.jsx';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Travel/>}/>
        <Route path='/usuario/login' element={<Login/>}/>
        <Route path='/usuario/registrar' element={<Registar/>}/>
        <Route path='/drive' element={<Driver/>}/>
        <Route path='/drive/create' element={<CreateDriver/>}/>
        <Route path='/route' element={<ListRoute/>}/>
        <Route path='/route/create' element={<CreateRoute/>}/>
        <Route path='/vehicle' element={<Vehicle/>}/>
        <Route path='/vehicle/create' element={<CreateVehicle/>}/>
        <Route path='/persona' element={<Person/>}/>
      </Routes>
    </>
  );
}

export default App;

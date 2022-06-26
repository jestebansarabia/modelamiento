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
import NotFound from './components/main/NoFound.jsx';
import CreateClient from './components/main/clientes/CreateClient.jsx';
import Client from './components/main/clientes/Client.jsx';
import Ticket from './components/main/ticket/Ticket.jsx';
import CreateTravel from './components/main/viaje/CreateTravel.jsx';
import CreateTicket from './components/main/ticket/CreateTicket.jsx';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Ticket/>}/>
        <Route path='/ticket/create' element={<CreateTicket/>}/>
        <Route path='/usuarios/login' element={<Login/>}/>
        <Route path='/usuarios/registrar' element={<Registar/>}/>
        <Route path='/drives' element={<Driver/>}/>
        <Route path='/drives/create' element={<CreateDriver/>}/>
        <Route path='/routes' element={<ListRoute/>}/>
        <Route path='/routes/create' element={<CreateRoute/>}/>
        <Route path='/vehicles' element={<Vehicle/>}/>
        <Route path='/vehicles/create' element={<CreateVehicle/>}/>
        <Route path='/clients' element={<Client/>}/>
        <Route path='/clients/create' element={<CreateClient/>}/>
        <Route path='/travels' element={<Travel/>}/>
        <Route path='/travels/create' element={<CreateTravel/>}/>
        <Route path="*"   element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;

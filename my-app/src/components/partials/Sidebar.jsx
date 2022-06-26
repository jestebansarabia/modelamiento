import { Link } from 'react-router-dom';
import logo from '../../asset/images/icon-pasajeYa.png'

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <div className="sidebar-icon">
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>

            <ul className="sidebar-options">

                <li><Link to="/"><i className="fa-solid fa-ticket-simple"></i></Link></li>
                <li><Link to="/travels"><i className="fa-solid fa-compass"></i></Link></li>
                <li><Link to="/routes"><i className="fa-solid fa-route"></i></Link></li>
                <li><Link to="/vehicles"><i className="fa-solid fa-car"></i></Link></li>
                <li><Link to="/drives"><i className="fa-solid fa-id-card"></i></Link></li>
                <li><Link to="/clients"><i className="fa-solid fa-person"></i></Link></li>
            </ul>
        </nav>
    );
}

export default Sidebar;

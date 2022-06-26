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
                <li><Link to="/route"><i className="fa-solid fa-registered"></i></Link></li>
                <li><Link to="/vehicle"><i className="fa-solid fa-car"></i></Link></li>
                <li><Link to="/drive"><i className="fa-solid fa-id-card"></i></Link></li>
                <li><Link to="/persona"><i className="fa-solid fa-person"></i></Link></li>
            </ul>
        </nav>
    );
}

export default Sidebar;

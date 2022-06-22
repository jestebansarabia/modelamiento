import { Link } from 'react-router-dom';
import logo from '../../asset/images/icon-pasajeYa.png'

const Sidebar = () => {
    return (
        <nav class="sidebar">
            <div class="sidebar-icon">
                <Link to='/'><img src={logo} alt="" /></Link>
            </div>

            <ul class="sidebar-options">

                <li><Link to="/"><i class="fa-solid fa-ticket-simple"></i></Link></li>
                <li><Link to="/route"><i class="fa-solid fa-registered"></i></Link></li>
                <li><Link to="/vehicle"><i class="fa-solid fa-car"></i></Link></li>
                <li><Link to="/drive"><i class="fa-solid fa-id-card"></i></Link></li>
                <li><Link to="/persona"><i class="fa-solid fa-person"></i></Link></li>
            </ul>
        </nav>
    );
}

export default Sidebar;

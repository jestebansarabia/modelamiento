import { Link } from 'react-router-dom';
import logo from '../../asset/images/icon-pasajeYa.png'

const Sidebar = () => {
    return (
        <nav class="sidebar">
            <div class="sidebar-icon">
                <img src={logo} alt="" />
            </div>

            <ul class="sidebar-options">

                <li><Link to="/"><i class="fa-solid fa-ticket-simple"></i></Link></li>
                <li><Link to="/"><i class="fa-solid fa-registered"></i></Link></li>
                <li><Link to="/"><i class="fa-solid fa-gear"></i></Link></li>

            </ul>
        </nav>
    );
}

export default Sidebar;

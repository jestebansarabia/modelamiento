import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = (props) => {
    const [user, setUser] = useState({});
    useEffect(() => {
        if (!localStorage.getItem('user')) {
            window.location = '/usuario/login';
        }

        setUser(JSON.parse(localStorage.getItem('user')));
    }, []);
    return (
        <header>
        <div className="header-inf">
            <div className="header-inf-left">
                <h4>{user.nombre}</h4>
                <small className='inf-type-user'>Cliente</small>
            </div>
            <div className="header-inf-right">
                <Link to='/usuario/login'><i class="fa-solid fa-user"></i></Link>
            </div>
        </div>
    </header>
    );
}

export default Header;

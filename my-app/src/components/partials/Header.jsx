import { Link } from 'react-router-dom';

const Header = (props) => {
    console.log("props: ",props);
    return (
        <header>
        <div className="header-inf">
            <div className="header-inf-left">
                <h4>{props.nombre}</h4>
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

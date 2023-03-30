import Navbar from './Navbar';
import TuPruTec from '../assets/TuPruTec.svg'
import ArrowDown from '../assets/Arrow-Down.svg'
const Header = () => {
  return (
    <header>
      <div className="header-area">
        <div className="logo">
          <img src={TuPruTec} />
        </div>
        <div className="label">
          <span>Nombre de Usuario</span>
          <img src={ArrowDown} />
        </div>
      </div>
      
      <div className="nav-area">
        
        <Navbar />

      </div>
    </header>
  );
};

export default Header;

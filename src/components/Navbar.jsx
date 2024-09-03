import { useTheme } from '../context/ThemeContext';
import { NavLink } from 'react-router-dom';
import ToggleSwitch from './ToggleSwitch';
import PropTypes from 'prop-types';
import logo from '../assets/images/navbar/logo.jpg';

const Navbar = ({ isLogIn, handleLogin, handleLogout }) => {
  const { theme, toggleTheme } = useTheme();
  
  const getClassName = ({ isActive }) =>
    `font-medium ${!isLogIn ? 'pointer-events-none opacity-50'  : ''} ${isActive ? 'text-teal-600' : 'text-teal-800'}`;

  return (
    <nav className="px-10 py-5 shadow-md bg-white dark:bg-gray-800 text-teal-800 dark:text-white flex justify-between items-center">
      <div className="flex items-center">
        <img src={ logo } alt="Logo" className="h-12"/>
      </div>
      <div className="flex-grow flex justify-center">
        <div className="flex items-center text-xl space-x-9 ml-12">
          <NavLink to="/" className={ getClassName }>
            Beranda
          </NavLink>
          <NavLink to="/about" className={ getClassName }>
            Tentang Kami
          </NavLink>
          <NavLink to="/help" className={ getClassName }>
            Bantuan
          </NavLink>
          <NavLink to="/media" className={ getClassName }>
            Media
          </NavLink>
          <NavLink to="/contact" className={ getClassName }>
            Kontak
          </NavLink>
        </div>
      </div>
      <div className="flex items-center space-x-8">
      <ToggleSwitch
          isChecked={theme === 'dark'}
          onToggle={toggleTheme}
        />
        {isLogIn ? (
          <button onClick={handleLogout} className="text-teal-600 border border-teal-600 px-4 py-2 rounded">
            Logout
          </button>) : (
          <button onClick={handleLogin} className="text-teal-600 border border-teal-600 px-4 py-2 rounded">
            Login
          </button>
        )}
        
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isLogIn: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default Navbar;

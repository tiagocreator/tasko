import { HeaderStyle } from './styles/HeaderStyle';
import Logo from '../images/logo.png';
import { useState } from 'react';
import { IoCloseSharp, IoMenuSharp } from 'react-icons/io5';

const Header = () => {
  const [isActive, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!isActive);
  };

  return (
    <HeaderStyle>
      <div className="logo">
        <img src={Logo} alt="" height="30" width="30" />
        <span>tasko</span>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        {isActive ? (
          <IoCloseSharp className="close-menu" role="button" />
        ) : (
          <IoMenuSharp className="open-menu" role="button" />
        )}
      </div>
    </HeaderStyle>
  );
};

export default Header;

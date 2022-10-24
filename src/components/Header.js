import { HeaderStyle } from './styles/HeaderStyle';
import Logo from '../images/logo.png';

const Header = () => {
  return (
    <HeaderStyle>
      <div className="logo">
        <img src={Logo} alt="" height="30" width="30" />
        <span>tasko</span>
      </div>
    </HeaderStyle>
  );
};

export default Header;

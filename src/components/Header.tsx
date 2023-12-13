import { HeaderStyle } from './styles/HeaderStyle';

const Logo: string = require('../images/logo.png');

const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <div className='logo'>
        <img src={Logo} alt='' height='30' width='30' />
        <span>tasko</span>
      </div>
    </HeaderStyle>
  );
};

export default Header;

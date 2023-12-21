import { Link } from 'react-router-dom';

import { HeaderStyle } from './styles/HeaderStyle';

const Logo: string = require('../images/logo.png');

const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <Link to='/'>
        <div>
          <img src={Logo} alt='' height='30' width='30' />
          <span>tasko</span>
        </div>
      </Link>
    </HeaderStyle>
  );
};

export default Header;

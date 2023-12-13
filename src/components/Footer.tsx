import { FooterStyle } from './styles/FooterStyles';
import { FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <FooterStyle>
      <p>
        <a href='https://github.com/tiagocreator' rel='noreferrer' target='_blank'>
          <FaGithub className='github-icon' />
          tiagocreator
        </a>
      </p>
    </FooterStyle>
  );
};

export default Footer;

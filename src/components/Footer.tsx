import { FaGithub } from 'react-icons/fa';

import { FooterStyle } from './styles/FooterStyles';

const Footer: React.FC = () => {
  const githubLink: string = 'https://github.com/tiagocreator';

  return (
    <FooterStyle>
      <a href={githubLink} rel='noreferrer' target='_blank'>
        <FaGithub className='github-icon' />
        tiagocreator
      </a>
    </FooterStyle>
  );
};

export default Footer;

import { ButtonStyle } from './styles/ButtonStyles';

interface ButtonProps {
  text: string;
  type?: 'submit' | 'button';
  onClick?: () => void;
  bg?: string;
  color?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, type, onClick, bg, color, className }) => {
  return (
    <ButtonStyle
      type={type}
      onClick={onClick}
      style={{ backgroundColor: bg, color: color }}
      className={className}>
      {text}
    </ButtonStyle>
  );
};

export default Button;

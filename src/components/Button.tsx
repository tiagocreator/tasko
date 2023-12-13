import { ButtonStyle } from './styles/ButtonStyles';

interface Props {
  text: string;
  type?: 'submit' | 'button';
  onClick?: () => void;
  className?: string;
}

export const PrimaryButton: React.FC<Props> = ({ text, type, onClick, className }) => {
  return (
    <ButtonStyle
      className={className}
      // primary
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}>
      {text}
    </ButtonStyle>
  );
};

export const SecondaryButton: React.FC<Props> = ({ text, type, onClick, className }) => {
  return (
    <ButtonStyle
      className={className}
      // secondary
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}>
      {text}
    </ButtonStyle>
  );
};

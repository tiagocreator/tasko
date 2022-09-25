import { ButtonStyle } from './styles/ButtonStyles';

export const PrimaryButton = ({ text, type, onClick, className }) => {
  return (
    <ButtonStyle
      className={className}
      primary
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {text}
    </ButtonStyle>
  );
};

export const SecondaryButton = ({ text, type, onClick, className }) => {
  return (
    <ButtonStyle
      className={className}
      secondary
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {text}
    </ButtonStyle>
  );
};

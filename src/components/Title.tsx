import { TitleStyle } from './styles/TitleStyles';

interface Props {
  title: string;
}

const Title: React.FC<Props> = ({ title }) => {
  return <TitleStyle>{title}</TitleStyle>;
};

export default Title;

import { SelectStyle } from './styles/SelectStyles';

interface Props {
  children: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const Select: React.FC<Props> = ({ children, onChange, value }) => {
  return (
    <SelectStyle value={value} onChange={onChange}>
      {children}
    </SelectStyle>
  );
};

export default Select;

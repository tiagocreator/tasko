import { SelectStyle } from './styles/SelectStyles';

interface SelectProps {
  children: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const Select: React.FC<SelectProps> = ({ children, onChange, value }) => {
  return (
    <SelectStyle value={value} onChange={onChange}>
      {children}
    </SelectStyle>
  );
};

export default Select;

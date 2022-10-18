import { SelectStyle } from './styles/SelectStyles';

const Select = ({ children, onChange, value }) => {
  return (
    <SelectStyle value={value} onChange={onChange}>
      {children}
    </SelectStyle>
  );
};

export default Select;

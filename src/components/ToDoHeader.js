import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SecondaryButton } from './Button';
import Select from './Select';
import ToDoModal from './ToDoModal';
import { ToDoHeaderStyle } from './styles/ToDoHeaderStyles';
import { filterItems } from '../redux/todoSlice';

const ToDoHeader = () => {
  const [modalActive, setModalActive] = useState(false);
  const filterStatus = useSelector((state) => state.todo.filterStatus);

  const dispatch = useDispatch();

  const openModal = () => {
    setModalActive(true);
  };

  const updateFilterStatus = (e) => {
    dispatch(filterItems(e.target.value));
  };

  return (
    <ToDoHeaderStyle>
      <SecondaryButton onClick={openModal} text="Nova Tarefa" />
      <Select value={filterStatus} onChange={updateFilterStatus}>
        <option value="all">Todos</option>
        <option value="incomplete">Incompletos</option>
        <option value="complete">Completos</option>
      </Select>
      <ToDoModal
        type="add"
        modalActive={modalActive}
        setModalActive={setModalActive}
      />
    </ToDoHeaderStyle>
  );
};

export default ToDoHeader;

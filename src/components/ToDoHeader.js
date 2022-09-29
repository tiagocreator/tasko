import { useState } from 'react';

import { SecondaryButton } from './Button';
import Select from './Select';
import ToDoModal from './ToDoModal';

import { ToDoHeaderStyle } from './styles/ToDoHeaderStyles';

const ToDoHeader = () => {
  const [modalActive, setModalActive] = useState(false);

  const openModal = () => {
    setModalActive(true);
  };

  return (
    <ToDoHeaderStyle>
      <SecondaryButton onClick={openModal} text="Nova Tarefa" />
      <Select>
        <option value="all">Todos</option>
        <option value="incomplete">Incompletos</option>
        <option value="complete">Completos</option>
      </Select>
      <ToDoModal modalActive={modalActive} setModalActive={setModalActive} />
    </ToDoHeaderStyle>
  );
};

export default ToDoHeader;

import { useDispatch, useSelector } from 'react-redux';
import { filterItems, setShowModalAdd } from '../redux/todoSlice';

import { HeadingButtons, Options, ToDo, Button, Select } from '../components';

import ToDoModal from '../components/ToDoModal';

import { theme } from '../themes';

const ToDoPage: React.FC = () => {
  const filterStatus = useSelector((state: any) => state.todo.filterStatus);
  const showModal = useSelector((state: any) => state.todo.showModalAdd);

  const dispatch = useDispatch();

  const updateFilterStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filterItems(e.target.value));
  };

  return (
    <main>
      <HeadingButtons />
      <Options
        buttonA={
          <Button
            onClick={() => {
              dispatch(setShowModalAdd(true));
            }}
            type='button'
            text='Nova Tarefa'
            bg={theme.successMain}
          />
        }
        buttonB={
          <Select value={filterStatus} onChange={updateFilterStatus}>
            <option value='all'>Todos</option>
            <option value='incomplete'>Incompletos</option>
            <option value='complete'>Completos</option>
          </Select>
        }
      />
      <ToDo />
      {showModal && <ToDoModal type='add' />}
    </main>
  );
};

export default ToDoPage;

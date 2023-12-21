import { useState, useEffect } from 'react';
import { ToDoModalStyle } from './styles/ToDoModalStyles';
import { MdOutlineClose } from 'react-icons/md';
import { Button } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, setShowModalAdd, setShowModalUpdate, updateTodo } from '../redux/todoSlice';

import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

import { theme } from '../themes';

interface ToDoItemProps {
  id: any;
  title: string;
  status: string;
  time: string;
}

interface TodoModalProps {
  type: string;
  todo?: ToDoItemProps | null;
}

const TodoModal: React.FC<TodoModalProps> = ({ type, todo }) => {
  const [title, setTitle] = useState<string>('');
  const [status, setStatus] = useState<string>('incomplete');

  const dispatch = useDispatch();

  const showModalAdd = useSelector((state: any) => state.todo.showModalAdd);
  const showModalUpdate = useSelector((state: any) => state.todo.showModalUpdate);
  const taskToUpdate = useSelector((state: any) => state.todo.taskToUpdate);

  const modalActive = type === 'add' ? showModalAdd : showModalUpdate && taskToUpdate === todo?.id;

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle('');
      setStatus('incomplete');
    }
  }, [type, todo]);

  const closeModal = () => {
    if (type === 'add') {
      dispatch(setShowModalAdd(false));
    } else if (type === 'update') {
      dispatch(setShowModalUpdate(false));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title === '') {
      toast.error('A tarefa precisa de um nome');
      return;
    }

    if (title && status) {
      if (type === 'add') {
        const newUUID: string = uuidv4();
        dispatch(
          addTodo({
            id: newUUID,
            title: title,
            status: status,
            time: new Date().toString(),
          }),
        );
        toast.success('Nova Tarefa Adicionada');
      }
      if (type === 'update') {
        if (todo?.title !== title || todo?.status !== status) {
          dispatch(updateTodo({ ...todo, title, status }));
          toast('Tarefa Atualizada!', {
            icon: '🔄',
          });
        } else {
          toast.error('Nenhuma mudança feita');
          return;
        }
      }
      closeModal();
    }
  };

  const hide: React.CSSProperties = {
    display: 'none',
  };

  const show: React.CSSProperties = {
    display: 'flex',
  };

  const isVisible = modalActive ? show : hide;

  return (
    <ToDoModalStyle style={isVisible}>
      <div className='container'>
        <div
          className='close-btn'
          onClick={closeModal}
          onKeyDown={closeModal}
          tabIndex={0}
          role='button'>
          <span>cancelar</span>
          <MdOutlineClose />
        </div>
        <form className='form' onSubmit={(e) => handleSubmit(e)}>
          <h1 className='form-title'>{type === 'update' ? 'atualizar' : 'nova'} tarefa</h1>
          <label htmlFor='title'>
            Nome
            <input
              type='text'
              id='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label htmlFor='status'>
            Status
            <select
              name='status'
              id='status'
              value={status}
              onChange={(e) => setStatus(e.target.value)}>
              <option value='incomplete'>Incompleto</option>
              <option value='complete'>Completo</option>
            </select>
          </label>
          <div className='button-container'>
            <Button
              className='add'
              type='submit'
              text={type === 'update' ? 'Atualizar' : 'Adicionar'}
              color={theme.white}
              bg={theme.successMain}
            />
            <Button
              className='cancel'
              type='button'
              text='Cancelar'
              bg={theme.errorMain}
              onClick={closeModal}
            />
          </div>
        </form>
      </div>
    </ToDoModalStyle>
  );
};

export default TodoModal;

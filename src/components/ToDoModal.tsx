import { useState, useEffect } from 'react';
import { ToDoModalStyle } from './styles/ToDoModalStyles';
import { MdOutlineClose } from 'react-icons/md';
import { PrimaryButton, SecondaryButton } from './Button';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../redux/todoSlice';
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';

interface ToDoItemProps {
  id: number;
  title: string;
  status: string;
  time: string;
}

interface TodoModalProps {
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
  todo?: ToDoItemProps | null;
}

const TodoModal: React.FC<TodoModalProps> = ({ modalActive, setModalActive, type, todo }) => {
  const [title, setTitle] = useState<string>('');
  const [status, setStatus] = useState<string>('incomplete');

  const dispatch = useDispatch();

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle('');
      setStatus('incomplete');
    }
  }, [type, todo, modalActive]);

  const closeModal = () => {
    setModalActive(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title === '') {
      toast.error('A tarefa precisa de um nome');
      return;
    }

    if (title && status) {
      if (type === 'add') {
        dispatch(
          addTodo({
            id: Number(uuid()),
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
      setModalActive(false);
    }
  };

  return (
    <ToDoModalStyle modalActive={modalActive}>
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
            <SecondaryButton
              className='add'
              type='submit'
              text={type === 'update' ? 'Atualizar' : 'Adicionar'}
            />
            <PrimaryButton className='cancel' text='Cancelar' onClick={closeModal} />
          </div>
        </form>
      </div>
    </ToDoModalStyle>
  );
};

export default TodoModal;

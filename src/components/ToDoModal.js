import { useState } from 'react';
import { ToDoModalStyle } from './styles/ToDoModalStyles';
import { MdOutlineClose } from 'react-icons/md';
import { PrimaryButton, SecondaryButton } from './Button';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';

const TodoModal = ({ modalActive, setModalActive }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  const dispatch = useDispatch();

  const closeModal = () => {
    setModalActive(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && status) {
      dispatch(
        addTodo({
          id: uuid(),
          title: title,
          status: status,
          time: new Date().toLocaleString(),
        })
      );
      toast.success('Nova Tarefa Adicionada');
      setModalActive(false);
    } else {
      toast.error('A tarefa precisa de um nome');
    }
  };

  return (
    <ToDoModalStyle modalActive={modalActive}>
      <div className="container">
        <div
          className="close-btn"
          onClick={closeModal}
          onKeyDown={closeModal}
          tabIndex={0}
          role="button"
        >
          <span>cancelar</span>
          <MdOutlineClose />
        </div>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <h1 className="form-title">nova tarefa</h1>
          <label htmlFor="title">
            Nome
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label htmlFor="status">
            Status
            <select
              name="status"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="incomplete">Incompleto</option>
              <option value="complete">Completo</option>
            </select>
          </label>
          <div className="button-container">
            <SecondaryButton className="add" type="submit" text="Adicionar" />
            <PrimaryButton className="cancel" text="Cancelar" />
          </div>
        </form>
      </div>
    </ToDoModalStyle>
  );
};

export default TodoModal;

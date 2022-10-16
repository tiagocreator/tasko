import { useState, useEffect } from 'react';
import { ToDoItemStyle } from './styles/ToDoItemStyles';
import format from 'date-fns/format';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/todoSlice';
import { toast } from 'react-hot-toast';
import TodoModal from './ToDoModal';
import CheckBox from './CheckBox';

const ToDoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const [updateModalOpen, setupdateModalOpen] = useState(false);

  useEffect(() => {
    if (todo.status === 'complete') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const deleteTask = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Tarefa Apagada');
  };

  const updateTask = () => {
    setupdateModalOpen(true);
  };

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({ ...todo, status: checked ? 'incomplete' : 'complete' })
    );
  };

  return (
    <>
      <ToDoItemStyle>
        <div className="todoDetails">
          <CheckBox checked={checked} handleCheck={handleCheck} />
          <div className="texts">
            <p
              className={`todoText ${
                todo.status === 'complete' && 'todoText--completed'
              }`}
            >
              {todo.title}
            </p>
            <p className="time">
              {format(new Date(todo.time), 'p, dd/MM/yyyy')}
            </p>
          </div>
        </div>
        <div className="todoActions">
          <div
            className="icon"
            role="button"
            tabIndex={0}
            onKeyDown={deleteTask}
            onClick={deleteTask}
          >
            <MdDelete />
          </div>
          <div
            className="icon"
            role="button"
            tabIndex={0}
            onKeyDown={updateTask}
            onClick={updateTask}
          >
            <MdEdit />
          </div>
        </div>
      </ToDoItemStyle>
      <TodoModal
        type="update"
        todo={todo}
        modalActive={updateModalOpen}
        setModalActive={setupdateModalOpen}
      />
    </>
  );
};

export default ToDoItem;

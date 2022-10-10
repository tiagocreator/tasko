import { ToDoItemStyle } from './styles/ToDoItemStyles';
import format from 'date-fns/format';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/todoSlice';
import { toast } from 'react-hot-toast';

const ToDoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteTask = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Tarefa Apagada');
  };

  const updateTask = () => {
    console.log('Update');
  };

  return (
    <ToDoItemStyle>
      <div className="todoDetails">
        [ ]
        <div className="texts">
          <p
            className={`todoText ${
              todo.status === 'complete' && 'todoText--completed'
            }`}
          >
            {todo.title}
          </p>
          <p className="time">{format(new Date(todo.time), 'p, dd/MM/yyyy')}</p>
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
  );
};

export default ToDoItem;

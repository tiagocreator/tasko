import { useSelector } from 'react-redux';
import { ToDoStyle } from './styles/ToDoStyles';
import ToDoItem from './ToDoItem';

const ToDo = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList].sort(
    (a, b) => new Date(b.time) - new Date(a.time)
  );

  return (
    <ToDoStyle>
      <div className="content-wrapper">
        {sortedTodoList && sortedTodoList.length > 0
          ? sortedTodoList.map((task) => <ToDoItem todo={task} key={task.id} />)
          : 'Ainda não tem nenhuma tarefa na lista'}
      </div>
    </ToDoStyle>
  );
};

export default ToDo;

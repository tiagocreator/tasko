import { useSelector } from 'react-redux';
import { ToDoStyle } from './styles/ToDoStyles';
import ToDoItem from './ToDoItem';

const ToDo = () => {
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList].sort(
    (a, b) => new Date(b.time) - new Date(a.time)
  );

  const filteredToDoList = sortedTodoList.filter((item) => {
    if (filterStatus === 'all') return true;
    return item.status === filterStatus;
  });

  return (
    <ToDoStyle>
      <div className="content-wrapper">
        {filteredToDoList && filteredToDoList.length > 0
          ? filteredToDoList.map((task) => (
              <ToDoItem todo={task} key={task.id} />
            ))
          : 'Ainda não tem nenhuma tarefa na lista'}
      </div>
    </ToDoStyle>
  );
};

export default ToDo;

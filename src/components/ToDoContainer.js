import Title from './Title';
import ToDoHeader from './ToDoHeader';
import ToDo from './ToDo';

const ToDoContainer = () => {
  return (
    <>
      <Title title="Lista de Tarefas" />
      <ToDoHeader />
      <ToDo />
    </>
  );
};

export default ToDoContainer;

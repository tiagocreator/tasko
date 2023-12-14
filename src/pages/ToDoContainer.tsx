import ToDoHeader from '../components/ToDoHeader';
import ToDo from '../components/ToDo';
import ButtonsContainer from '../components/ButtonsContainer';

const ToDoContainer: React.FC = () => {
  return (
    <main>
      <ButtonsContainer />
      <ToDoHeader />
      <ToDo />
    </main>
  );
};

export default ToDoContainer;

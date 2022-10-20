import ToDoHeader from '../components/ToDoHeader';
import ToDo from '../components/ToDo';
import ButtonsContainer from '../components/ButtonsContainer';

const ToDoContainer = () => {
  return (
    <>
      <ButtonsContainer />
      <ToDoHeader />
      <ToDo />
    </>
  );
};

export default ToDoContainer;

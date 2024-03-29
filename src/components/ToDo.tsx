import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import { Task } from '../components';

import { ToDoStyle } from './styles/ToDoStyles';

const ToDo: React.FC = () => {
  const todoList = useSelector((state: any) => state.todo.todoList);
  const filterStatus = useSelector((state: any) => state.todo.filterStatus);

  const sortedTodoList = [...todoList].sort(
    (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime(),
  );

  const filteredToDoList = sortedTodoList.filter((item) => {
    if (filterStatus === 'all') return true;
    return item.status === filterStatus;
  });

  const container = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const child = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <ToDoStyle>
      <motion.div
        className='content-wrapper'
        variants={container}
        initial='hidden'
        animate='visible'>
        {filteredToDoList && filteredToDoList.length > 0 ? (
          filteredToDoList.map((task) => <Task todo={task} key={task.id} />)
        ) : (
          <motion.p className='empty-text' variants={child}>
            Ainda não tem nenhuma tarefa na lista
          </motion.p>
        )}
      </motion.div>
    </ToDoStyle>
  );
};

export default ToDo;

import { useSelector } from 'react-redux';
import { ToDoStyle } from './styles/ToDoStyles';
import ToDoItem from './ToDoItem';
import { motion } from 'framer-motion';

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
        className="content-wrapper"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {filteredToDoList && filteredToDoList.length > 0 ? (
          filteredToDoList.map((task) => <ToDoItem todo={task} key={task.id} />)
        ) : (
          <motion.p className="empty-text" variants={child}>
            Ainda não tem nenhuma tarefa na lista
          </motion.p>
        )}
      </motion.div>
    </ToDoStyle>
  );
};

export default ToDo;

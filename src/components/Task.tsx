import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import format from 'date-fns/format';
import { deleteTodo, setShowModalUpdate, setTaskToUpdate, updateTodo } from '../redux/todoSlice';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

import { CheckBox, ToDoModal } from '../components';

import { MdDelete, MdEdit } from 'react-icons/md';

import { TaskStyle } from './styles/TaskStyles';

interface TaskProps {
  todo: {
    id: any;
    status: string;
    title: string;
    time: string;
  };
}

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

const Task: React.FC<TaskProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (todo.status === 'complete') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const deleteTask = (): void => {
    dispatch(deleteTodo(todo.id));
    toast.success('Tarefa Apagada');
  };

  const updateTask = (): void => {
    dispatch(setShowModalUpdate(true));
    dispatch(setTaskToUpdate(todo.id));
  };

  const handleCheck = (): void => {
    setChecked(!checked);
    dispatch(updateTodo({ ...todo, status: checked ? 'incomplete' : 'complete' }));
  };

  return (
    <>
      <TaskStyle as={motion.div} variants={child}>
        <div className='todoDetails'>
          <CheckBox checked={checked} handleCheck={handleCheck} />
          <div className='texts'>
            <p className={`todoText ${todo.status === 'complete' && 'todoText--completed'}`}>
              {todo.title}
            </p>
            <p className='time'>{format(new Date(todo.time), 'p, dd/MM/yyyy')}</p>
          </div>
        </div>
        <div className='todoActions'>
          <div
            className='icon'
            role='button'
            tabIndex={0}
            onKeyDown={deleteTask}
            onClick={deleteTask}>
            <MdDelete />
          </div>
          <div
            className='icon'
            role='button'
            tabIndex={0}
            onKeyDown={updateTask}
            onClick={updateTask}>
            <MdEdit />
          </div>
        </div>
      </TaskStyle>
      <ToDoModal type='update' todo={todo} />
    </>
  );
};

export default Task;

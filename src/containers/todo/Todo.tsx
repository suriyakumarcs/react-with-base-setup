import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getPendingSelector,
  getTodosSelector,
  getErrorSelector,
} from '../../store/todo/selectors';
import { fetchTodoRequest } from '../../store/todo/actions';

const Todo = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const todos = useSelector(getTodosSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, [dispatch]);

  return (
    <div style={{ padding: '15px' }} className="text-primary">
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <ul className="list-group">
          {todos.map((todo, index) => (
            <li className="list-group-item" key={todo.id}>
              {++index}. {todo.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todo;

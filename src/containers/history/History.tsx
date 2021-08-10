import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import { getHistoryListSelector, getErrorSelector } from '../../store/history/selectors';
import { fetchHistoryRequest } from '../../store/history/actions';

const History = () => {
  const dispatch = useDispatch();
  // const historyList = useSelector(getHistoryListSelector);
  // const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchHistoryRequest());
  }, [dispatch]);

  return <div>Current page is under development</div>;
};

export default History;

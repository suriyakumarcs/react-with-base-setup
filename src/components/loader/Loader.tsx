import { useSelector } from 'react-redux';

import { getPendingSelector } from '../../store/history/selectors';
import { getPendingSelector as listSelector } from '../../store/home/selectors';

import styles from './Loader.module.scss';

const Loader = () => {
  const pending = useSelector(getPendingSelector);
  const homePending = useSelector(listSelector);
  return (
    <div>
      {pending || homePending ? (
        <div id="loader" className={`${styles.loadingOverlay}`}>
          <div className={`${styles.loader}`}>
            <div className={`${styles.loaderOne}`} />
            <div className={`${styles.loaderTwo}`} />
            <div className={`${styles.loaderThree}`} />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Loader;

import styles from './Button.module.scss';

interface MyProp {
  callBack: () => void;
  name: string;
  icon: string;
}
const Button = (props: MyProp) => {
  return (
    <button
      type="button"
      className={`${styles.customButton} btn btn-primary`}
      id="create-bootstrap"
      onClick={props.callBack}
    >
      <i className={`${props.icon} m-r-10px`}></i>
      {props.name}
    </button>
  );
};

export default Button;

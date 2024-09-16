import styles from "../styles/components/button.module.scss";

const Button = ({
  text,
  icon,
  action,
}: {
  text: string;
  icon?: React.ReactNode;
  action: () => void;
}) => {
  return (
    <div className={styles["button"]} onClick={action}>
      <div className={styles["text"]}>{text}</div>
      <div className={styles["icon"]}>{icon}</div>
    </div>
  );
};

export default Button;

import styles from "./main.module.scss";
import Child from "../ChildNotification";

export default function Main() {
  return (
    <div className={styles.parent_notification}>
      <Child />
    </div>
  );
}

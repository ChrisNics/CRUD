import styles from "../styles/Header.module.css";
import BoxHeader from "./BoxHeader";
import Options from "./Options";
import AddOption from "./AddOption";

const items = ["Wow", "aw"];

function Box(props) {
  return (
    <div className={styles.box}>
      <BoxHeader />
      <Options items={items} itemsRender={props.itemsRender} />
      <AddOption items={items} />
    </div>
  );
}

export default Box;

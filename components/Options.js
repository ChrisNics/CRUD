import Option from "./Option";
import styles from "../styles/Header.module.css";

function Options(props) {
  return (
    <div className={styles.options}>
      {props.itemsRender.length > 0 ? (
        props.itemsRender.map((item) => <Option key={item._id} text={item.item} id={item._id} />)
      ) : (
        <h3>Please Add an item</h3>
      )}
    </div>
  );
}

export default Options;

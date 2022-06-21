import styles from "../styles/Header.module.css";
import Button from "./Button";
import axios from "axios";
import { useRouter } from "next/router";

function Option(props) {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };
  return (
    <div className={styles.option}>
      <input placeholder={props.text} className={styles.inputStyle} />
      <Button
        text="Delete"
        onClick={async (e) => {
          e.preventDefault();

          const res = await axios({
            url: `/api/movies/${props.id}`,
            method: "DELETE",
          });

          if (res.status < 300) {
            refreshData(); // refresh if successful
          }
        }}
      />
      <Button
        text="Update"
        onClick={async (e) => {
          e.preventDefault();
          const item = e.target.parentElement.children[0].value;
          const res = await axios({
            url: `/api/movies/${props.id}`,
            method: "PATCH",
            data: {
              item,
            },
          });

          if (res.status < 300) {
            refreshData(); // refresh if successful
          }
        }}
      />
    </div>
  );
}

export default Option;

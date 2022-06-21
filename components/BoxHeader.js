import styles from "../styles/Header.module.css";
import Button from "./Button";
import axios from "axios";
import { useRouter } from "next/router";

function BoxHeader(props) {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };
  return (
    <div className={styles.boxHeader}>
      <h3>Your Options</h3>
      <Button
        color="black"
        text="Remove All"
        onClick={async (e) => {
          e.preventDefault();

          const res = await axios({
            url: "/api/movies",
            method: "DELETE",
          });

          if (res.status < 300) {
            refreshData(); // refresh if successful
          }
        }}
      />
    </div>
  );
}

export default BoxHeader;

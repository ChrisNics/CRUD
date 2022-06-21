import styles from "../styles/Header.module.css";
import Button from "./Button";
import Input from "./Input";
import axios from "axios";
import { useRouter } from "next/router";

function AddOption(props) {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };
  return (
    <form
      className={styles.add}
      onSubmit={async (e) => {
        e.preventDefault();

        try {
          const item = e.target.elements[0].value;
          const res = await axios({
            url: "/api/movies",
            method: "POST",
            data: {
              item,
            },
          });
          if (res.status < 300) {
            e.target.elements[0].value = "";
            refreshData(); // refresh if successful
          }
        } catch (e) {
          console.log(e);
        }
      }}
    >
      <Input />
      <Button color="green" text="Add Option" />
    </form>
  );
}

export default AddOption;

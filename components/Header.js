import headerStyles from "../styles/Header.module.css";

function Header(props) {
  return (
    <div className={headerStyles.header}>
      <h1 className={headerStyles.h1}>CRUD APP</h1>
    </div>
  );
}

export default Header;

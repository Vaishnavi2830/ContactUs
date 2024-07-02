import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigate} container`}>
      <div className="logo">
        <img src="/public/images/logo.png" alt="do some coding logo" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, clearUser } from "./store/user/userSlice";
import styles from "./App.module.css";

const Header = () => (
  <header>
    <h1>My Application</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

const Footer = () => (
  <footer>
    <p>&copy; 2023 My Application</p>
  </footer>
);

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setUser({ name: "John Doe", email: "john.doe@example.com" }));
  };

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.content}>
        <h1>Redux User Example</h1>
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <Footer />
    </div>
  );
};

export default App;
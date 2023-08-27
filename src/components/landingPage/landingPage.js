import { Fragment } from "react";
import logo from "../../assets/logo.svg";
import styles from "./landingPage.module.css";
import Home from "../../components/pages/Home";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const LandingPage = (props) => {
  let { id } = useParams();
  console.log(id);
  return (
    <Fragment>
      <nav style={styles.nav}>
        <Link to={"/"}>
          <img src={logo} alt="company site logo"></img>
        </Link>
      </nav>
      <div className={styles.content}>{props.children}</div>
    </Fragment>
  );
};

export default LandingPage;

import { Fragment } from "react";
import styles from "./carItem.module.css";

const CarItem = (props) => {
  return (
    <Fragment>
      <img src={props.Image} alt="placeholder" className={styles.placeholder} />
      <div className={styles.col}>
        <h2>Make: {props.Make}</h2>
        <h2>Model: {props.Model}</h2>
        <h2>Mileage: {props.Mileage}</h2>
        <h2>Year: {props.Year}</h2>
        <h2>Transmission: {props.Transmission}</h2>
        <button>Click Me</button>
      </div>
    </Fragment>
  );
};

export default CarItem;

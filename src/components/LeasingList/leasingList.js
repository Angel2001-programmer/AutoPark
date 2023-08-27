import Card from "../UI/Card/card";
import styles from "./leasingList.css";
import CarItem from "../CarItem/carItem";
import LandingPage from "../landingPage/landingPage";
import { useState } from "react";

const LeasingList = (props) => {
  const [carList, setCarList] = useState(props.data);

  const MakeOption = (e) => {
    setCarList(props.data.filter((car) => car.Make.includes(e.target.value)));
  };

  return (
    <LandingPage>
      <div className={styles.content}>
        <form>
          <select name="Make" onChange={MakeOption}>
            <option value="Vauxhall">Vauxhall</option>
            <option value="Ford">Ford</option>
            <option value="Audi">Audi</option>
          </select>

          <select name="Model" onChange={MakeOption}>
            <option value="Corsa">Corsa</option>
            <option value="Mustang">Mustang</option>
            <option value="A5">A5</option>
          </select>
        </form>
        {carList.map((car) => (
          <Card>
            <CarItem
              Image={car.Image}
              Make={car.Make}
              Model={car.Model}
              Mileage={car.Mileage}
              Year={car.Year}
              Transmission={car.Transmission}
              ppm={car.ppm.toLocaleString("en-UK", {
                style: "currency",
                currency: "GBP",
              })}
            />
          </Card>
        ))}
      </div>
    </LandingPage>
  );
};

export default LeasingList;

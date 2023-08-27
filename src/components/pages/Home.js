import LandingPage from "../../components/landingPage/landingPage";
import { Link } from "react-router-dom";
import styles from "./Home.module.css"

const Home = () => {
  return (
    <LandingPage>
      <div className="landing">
        <div className="col-landing">
          <h2 className="firstLine">Need a new ride</h2>
          <h2 className="secondLine">Try ParkAuto</h2>
          <h2 className="thirdLine">Best Car Leasing website</h2>
        </div>
      </div>
      
      <button className="landingButton"><Link className={styles.Link} to="/leasing"> Check out our selection</Link>
      </button>
    </LandingPage>
  );
};

export default Home;

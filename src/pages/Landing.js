import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>
              {" "}
              Job <span>tracking</span> app
            </h1>
            <p>
              Health goth photo booth yuccie kickstarter thundercats crucifix
              food truck vaporware. Cray fam glossier skateboard stumptown
              everyday carry yes plz leggings celiac portland etsy single-origin
              coffee. Mustache pitchfork hammock pinterest migas solarpunk green
              juice plaid dreamcatcher cronut vape post-ironic viral lomo.
            </p>
            <Link to={"/register"} className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
};

export default Landing;

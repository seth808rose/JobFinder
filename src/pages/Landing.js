import logo from "../assets/images/logo.svg";
// import main from "../assets/images/main.svg";
import main1 from "../assets/images/main1.jpg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='jobster logo' className='logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span>
          </h1>
          <p>
            Login to track and manage your job prospects, upcoming interviews, application statuses, and how to better your chances at recieving that next dream gig! Good luck duck!
          </p>
          <Link to='/register' className='btn btn-hero'>
            {" "}
            Login/Register
          </Link>
        </div>
        <img src={main1} alt='job hunt' className='img img-hero' />
      </div>
    </Wrapper>
  );
};

export default Landing;

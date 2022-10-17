import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper class='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>Ohh! Page not found</h3>
        <p>We can't seem to find that page you are looking for unfortuneatly</p>
        <Link to='/'>Back to home page</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
